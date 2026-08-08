const db = require("../database");


// ============================================================
// LISTAR PRODUTOS
// ============================================================

async function listarProdutos(req, res) {

    try {

        const [produtos] = await db.query(`
            SELECT
                produtos.*,
                categorias.nome AS categoria_nome

            FROM produtos

            LEFT JOIN categorias
                ON produtos.categoria_id = categorias.id

            ORDER BY produtos.id DESC
        `);

        res.json(produtos);

    }

    catch (erro) {

        console.error(
            "Erro ao listar produtos:",
            erro
        );

        res.status(500).json({
            erro: "Erro ao listar produtos."
        });

    }

}


// ============================================================
// BUSCAR PRODUTOS POR CATEGORIA
// ============================================================

async function buscarPorCategoria(req, res) {

    try {

        const { categoria } = req.params;


        const [produtos] = await db.query(
            `

            SELECT
                produtos.*,
                categorias.nome AS categoria_nome

            FROM produtos

            INNER JOIN categorias
                ON produtos.categoria_id = categorias.id

            WHERE LOWER(categorias.nome) = LOWER(?)

            ORDER BY produtos.nome

            `,
            [categoria]
        );


        for (const produto of produtos) {


            const [variacoes] =
                await db.query(`

                    SELECT

                        produto_variacoes.id,

                        tamanhos.nome AS tamanho,

                        cores.nome AS cor,

                        produto_variacoes.estoque

                    FROM produto_variacoes

                    LEFT JOIN tamanhos
                        ON produto_variacoes.tamanho_id =
                           tamanhos.id

                    LEFT JOIN cores
                        ON produto_variacoes.cor_id =
                           cores.id

                    WHERE produto_variacoes.produto_id = ?

                `, [produto.id]);


            produto.variacoes =
                variacoes;


            const [imagens] =
                await db.query(`

                    SELECT
                        url,
                        principal,
                        ordem

                    FROM produto_imagens

                    WHERE produto_id = ?

                    ORDER BY ordem

                `, [produto.id]);


            produto.imagens =
                imagens;

        }


        res.json(produtos);

    }

    catch (erro) {

        console.error(
            "Erro ao buscar categoria:",
            erro
        );

        res.status(500).json({
            erro:
                "Erro ao buscar produtos da categoria."
        });

    }

}


// ============================================================
// AUXILIAR — OBTER / CRIAR TAMANHO
// ============================================================

async function obterOuCriarTamanho(
    conexao,
    nome
) {

    if (!nome) {

        return null;

    }


    const nomeNormalizado =
        String(nome).trim();


    const [resultado] =
        await conexao.query(
            `
            SELECT id
            FROM tamanhos
            WHERE LOWER(nome) = LOWER(?)
            LIMIT 1
            `,
            [nomeNormalizado]
        );


    if (resultado.length > 0) {

        return resultado[0].id;

    }


    const [novo] =
        await conexao.query(
            `
            INSERT INTO tamanhos
            (nome)

            VALUES (?)
            `,
            [nomeNormalizado]
        );


    return novo.insertId;

}


// ============================================================
// AUXILIAR — OBTER / CRIAR COR
// ============================================================

async function obterOuCriarCor(
    conexao,
    nome
) {

    if (!nome) {

        return null;

    }


    const nomeNormalizado =
        String(nome).trim();


    const [resultado] =
        await conexao.query(
            `
            SELECT id
            FROM cores
            WHERE LOWER(nome) = LOWER(?)
            LIMIT 1
            `,
            [nomeNormalizado]
        );


    if (resultado.length > 0) {

        return resultado[0].id;

    }


    const [nova] =
        await conexao.query(
            `
            INSERT INTO cores
            (nome)

            VALUES (?)
            `,
            [nomeNormalizado]
        );


    return nova.insertId;

}


// ============================================================
// SALVAR VARIAÇÕES
// ============================================================

async function salvarVariacoes(
    conexao,
    produtoId,
    variacoes
) {

    if (!Array.isArray(variacoes)) {

        return;

    }


    for (const variacao of variacoes) {

        const tamanhoId =
            await obterOuCriarTamanho(
                conexao,
                variacao.tamanho
            );


        const corId =
            await obterOuCriarCor(
                conexao,
                variacao.cor
            );


        const estoque =
            Number(
                variacao.estoque
            ) || 0;


        await conexao.query(
            `

            INSERT INTO produto_variacoes

            (
                produto_id,
                tamanho_id,
                cor_id,
                estoque
            )

            VALUES (?, ?, ?, ?)

            `,
            [
                produtoId,
                tamanhoId,
                corId,
                estoque
            ]
        );

    }

}


// ============================================================
// CADASTRAR PRODUTO
// ============================================================

async function cadastrarProduto(req, res) {

    const conexao =
        await db.getConnection();


    try {

        const {

            nome,
            descricao,
            preco,
            categoria_id,
            ativo,
            destaque,
            possui_variacao

        } = req.body;


        const imagem =
            req.file
                ? req.file.path
                : null;


        if (
            !nome ||
            !preco ||
            !categoria_id
        ) {

            return res.status(400).json({

                erro:
                    "Nome, preço e categoria são obrigatórios."

            });

        }


        // ========================================
        // VARIAÇÕES
        // ========================================

        let variacoes = [];


        if (req.body.variacoes) {

            try {

                variacoes =
                    JSON.parse(
                        req.body.variacoes
                    );

            }

            catch (erro) {

                console.error(
                    "Erro ao interpretar variações:",
                    erro
                );

                return res.status(400).json({

                    erro:
                        "Formato das variações inválido."

                });

            }

        }


        await conexao.beginTransaction();


        // ========================================
        // PRODUTO
        // ========================================

        const [produto] =
            await conexao.query(

                `

                INSERT INTO produtos

                (
                    categoria_id,
                    nome,
                    descricao,
                    preco,
                    ativo,
                    destaque,
                    imagem_principal,
                    possui_variacao
                )

                VALUES (?, ?, ?, ?, ?, ?, ?, ?)

                `,

                [

                    categoria_id,
                    nome,
                    descricao,
                    preco,
                    ativo,
                    destaque,
                    imagem,
                    possui_variacao

                ]

            );


        const produtoId =
            produto.insertId;


        // ========================================
        // IMAGEM
        // ========================================

        if (imagem) {

            await conexao.query(

                `

                INSERT INTO produto_imagens

                (
                    produto_id,
                    url,
                    principal,
                    ordem
                )

                VALUES (?, ?, ?, ?)

                `,

                [
                    produtoId,
                    imagem,
                    1,
                    1
                ]

            );

        }


        // ========================================
        // VARIAÇÕES
        // ========================================

        if (
            Number(possui_variacao) === 1 &&
            variacoes.length > 0
        ) {

            await salvarVariacoes(
                conexao,
                produtoId,
                variacoes
            );

        }


        await conexao.commit();


        res.status(201).json({

            mensagem:
                "Produto cadastrado com sucesso!",

            id: produtoId,

            imagem

        });

    }

    catch (erro) {

        await conexao.rollback();


        console.error(
            "Erro ao cadastrar produto:",
            erro
        );


        res.status(500).json({

            erro:
                "Erro ao cadastrar produto."

        });

    }

    finally {

        conexao.release();

    }

}


// ============================================================
// ATUALIZAR PRODUTO
// ============================================================

async function atualizarProduto(req, res) {

    const conexao =
        await db.getConnection();


    try {

        const { id } =
            req.params;


        const {

            nome,
            descricao,
            preco,
            categoria_id,
            ativo,
            destaque,
            possui_variacao

        } = req.body;


        let imagem = null;


        if (req.file) {

            imagem =
                req.file.path;

        }


        // ========================================
        // VARIAÇÕES
        // ========================================

        let variacoes = [];


        if (req.body.variacoes) {

            try {

                variacoes =
                    JSON.parse(
                        req.body.variacoes
                    );

            }

            catch (erro) {

                console.error(
                    "Erro ao interpretar variações:",
                    erro
                );

                return res.status(400).json({

                    erro:
                        "Formato das variações inválido."

                });

            }

        }


        await conexao.beginTransaction();


        // ========================================
        // ATUALIZAR PRODUTO
        // ========================================

        if (imagem) {

            await conexao.query(

                `

                UPDATE produtos

                SET

                    categoria_id = ?,
                    nome = ?,
                    descricao = ?,
                    preco = ?,
                    ativo = ?,
                    destaque = ?,
                    imagem_principal = ?,
                    possui_variacao = ?

                WHERE id = ?

                `,

                [

                    categoria_id,
                    nome,
                    descricao,
                    preco,
                    ativo,
                    destaque,
                    imagem,
                    possui_variacao,
                    id

                ]

            );

        }

        else {

            await conexao.query(

                `

                UPDATE produtos

                SET

                    categoria_id = ?,
                    nome = ?,
                    descricao = ?,
                    preco = ?,
                    ativo = ?,
                    destaque = ?,
                    possui_variacao = ?

                WHERE id = ?

                `,

                [

                    categoria_id,
                    nome,
                    descricao,
                    preco,
                    ativo,
                    destaque,
                    possui_variacao,
                    id

                ]

            );

        }


        // ========================================
        // VARIAÇÕES ANTIGAS
        // ========================================

        await conexao.query(

            `

            DELETE FROM produto_variacoes

            WHERE produto_id = ?

            `,

            [id]

        );


        // ========================================
        // NOVAS VARIAÇÕES
        // ========================================

        if (
            Number(possui_variacao) === 1 &&
            variacoes.length > 0
        ) {

            await salvarVariacoes(
                conexao,
                id,
                variacoes
            );

        }


        await conexao.commit();


        res.json({

            mensagem:
                "Produto atualizado com sucesso!"

        });

    }

    catch (erro) {

        await conexao.rollback();


        console.error(
            "Erro ao atualizar produto:",
            erro
        );


        res.status(500).json({

            erro:
                "Erro ao atualizar produto."

        });

    }

    finally {

        conexao.release();

    }

}


// ============================================================
// PRODUTOS EM DESTAQUE
// ============================================================

async function listarDestaques(req, res) {

    try {

        const [produtos] =
            await db.query(`

                SELECT
                    produtos.*,
                    categorias.nome AS categoria_nome

                FROM produtos

                LEFT JOIN categorias
                    ON produtos.categoria_id =
                       categorias.id

                WHERE produtos.destaque = 1

                ORDER BY produtos.id DESC

            `);


        for (const produto of produtos) {

            const [variacoes] =
                await db.query(`

                    SELECT

                        produto_variacoes.id,

                        tamanhos.nome AS tamanho,

                        cores.nome AS cor,

                        produto_variacoes.estoque

                    FROM produto_variacoes

                    LEFT JOIN tamanhos
                        ON produto_variacoes.tamanho_id =
                           tamanhos.id

                    LEFT JOIN cores
                        ON produto_variacoes.cor_id =
                           cores.id

                    WHERE produto_variacoes.produto_id = ?

                `, [produto.id]);


            produto.variacoes =
                variacoes;


            const [imagens] =
                await db.query(`

                    SELECT
                        url,
                        principal,
                        ordem

                    FROM produto_imagens

                    WHERE produto_id = ?

                    ORDER BY ordem

                `, [produto.id]);


            produto.imagens =
                imagens;

        }


        res.json(produtos);

    }

    catch (erro) {

        console.error(erro);


        res.status(500).json({

            erro:
                "Erro ao listar destaques."

        });

    }

}


// ============================================================
// BUSCAR PRODUTO POR ID
// ============================================================

async function buscarProdutoPorId(req, res) {

    try {

        const { id } =
            req.params;


        const [produtos] =
            await db.query(`

                SELECT
                    produtos.*,
                    categorias.nome AS categoria_nome

                FROM produtos

                LEFT JOIN categorias
                    ON produtos.categoria_id =
                       categorias.id

                WHERE produtos.id = ?

            `, [id]);


        if (produtos.length === 0) {

            return res.status(404).json({

                erro:
                    "Produto não encontrado."

            });

        }


        const produto =
            produtos[0];


        // ========================================
        // VARIAÇÕES
        // ========================================

        const [variacoes] =
            await db.query(`

                SELECT

                    produto_variacoes.id,

                    tamanhos.nome AS tamanho,

                    cores.nome AS cor,

                    produto_variacoes.estoque

                FROM produto_variacoes

                LEFT JOIN tamanhos
                    ON produto_variacoes.tamanho_id =
                       tamanhos.id

                LEFT JOIN cores
                    ON produto_variacoes.cor_id =
                       cores.id

                WHERE produto_variacoes.produto_id = ?

            `, [id]);


        produto.variacoes =
            variacoes;


        // ========================================
        // IMAGENS
        // ========================================

        const [imagens] =
            await db.query(`

                SELECT

                    url,
                    principal,
                    ordem

                FROM produto_imagens

                WHERE produto_id = ?

                ORDER BY ordem

            `, [id]);


        produto.imagens =
            imagens;


        res.json(produto);

    }

    catch (erro) {

        console.error(erro);


        res.status(500).json({

            erro:
                "Erro ao buscar produto."

        });

    }

}


// ============================================================
// EXCLUIR PRODUTO
// ============================================================

async function excluirProduto(req, res) {

    const conexao =
        await db.getConnection();


    try {

        const { id } =
            req.params;


        await conexao.beginTransaction();


        await conexao.query(

            `

            DELETE FROM produto_imagens

            WHERE produto_id = ?

            `,

            [id]

        );


        await conexao.query(

            `

            DELETE FROM produto_variacoes

            WHERE produto_id = ?

            `,

            [id]

        );


        const [resultado] =
            await conexao.query(

                `

                DELETE FROM produtos

                WHERE id = ?

                `,

                [id]

            );


        if (
            resultado.affectedRows === 0
        ) {

            await conexao.rollback();


            return res.status(404).json({

                erro:
                    "Produto não encontrado."

            });

        }


        await conexao.commit();


        res.json({

            mensagem:
                "Produto excluído com sucesso!"

        });

    }

    catch (erro) {

        await conexao.rollback();


        console.error(
            "Erro ao excluir produto:",
            erro
        );


        res.status(500).json({

            erro:
                "Erro ao excluir produto."

        });

    }

    finally {

        conexao.release();

    }

}


// ============================================================
// EXPORTAÇÕES
// ============================================================

module.exports = {

    listarProdutos,

    listarDestaques,

    buscarPorCategoria,

    buscarProdutoPorId,

    cadastrarProduto,

    atualizarProduto,

    excluirProduto

};