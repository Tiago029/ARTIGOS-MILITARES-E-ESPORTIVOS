const db = require("../database");
const PRODUTOS = require("../public/produtos/produtos");

// ===============================
// Cadastrar variações manualmente
// ===============================
async function cadastrarVariacoes(req, res) {

    const produto_id = req.params.id;
    const { variacoes } = req.body;

    if (!variacoes || !Array.isArray(variacoes)) {
        return res.status(400).json({
            erro: "Lista de variações inválida."
        });
    }

    const conexao = await db.getConnection();

    try {

        await conexao.beginTransaction();

        for (const variacao of variacoes) {

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
                    produto_id,
                    variacao.tamanho_id,
                    variacao.cor_id,
                    variacao.estoque || 0
                ]
            );

        }

        await conexao.commit();

        res.status(201).json({
            mensagem: "Variações cadastradas com sucesso!"
        });

    } catch (erro) {

        await conexao.rollback();

        console.error(erro);

        res.status(500).json({
            erro: "Erro ao cadastrar variações."
        });

    } finally {

        conexao.release();

    }

}


// =========================================
// Importar variações do antigo produtos.js
// =========================================
async function importarVariacoes(req, res) {

    const conexao = await db.getConnection();

    try {

        await conexao.beginTransaction();

        const [produtosBanco] = await conexao.query(`
            SELECT id, nome
            FROM produtos
        `);

        const [tamanhos] = await conexao.query(`
            SELECT id, nome
            FROM tamanhos
        `);

        const [cores] = await conexao.query(`
            SELECT id, nome
            FROM cores
        `);

        let totalVariacoes = 0;

        for (const produtoBanco of produtosBanco) {

            // procura o produto equivalente no produtos.js
            const produtoJS = PRODUTOS.find(
                p =>
                    p.nome.trim().toLowerCase() ===
                    produtoBanco.nome.trim().toLowerCase()
            );

            if (!produtoJS) continue;

            // Já possui variações?
            const [existe] = await conexao.query(`
                SELECT id
                FROM produto_variacoes
                WHERE produto_id = ?
                LIMIT 1
            `, [produtoBanco.id]);

            if (existe.length > 0) {
                continue;
            }

            const listaTamanhos = produtoJS.tamanho || [];
            const listaCores = produtoJS.cor || [];

            // Produto sem variações
            if (listaTamanhos.length === 0 && listaCores.length === 0) {
                continue;
            }

            // =====================================
            // Apenas tamanhos
            // =====================================
            if (listaTamanhos.length > 0 && listaCores.length === 0) {

                for (const nomeTamanho of listaTamanhos) {

                    const tamanho = tamanhos.find(
                        t =>
                            t.nome.trim().toLowerCase() ===
                            nomeTamanho.trim().toLowerCase()
                    );

                    if (!tamanho) continue;

                    await conexao.query(`
                        INSERT INTO produto_variacoes
                        (
                            produto_id,
                            tamanho_id,
                            cor_id,
                            estoque
                        )
                        VALUES (?, ?, NULL, ?)
                    `, [
                        produtoBanco.id,
                        tamanho.id,
                        10
                    ]);

                    totalVariacoes++;

                }

            }

            // =====================================
            // Apenas cores
            // =====================================
            else if (listaTamanhos.length === 0 && listaCores.length > 0) {

                for (const nomeCor of listaCores) {

                    const cor = cores.find(
                        c =>
                            c.nome.trim().toLowerCase() ===
                            nomeCor.trim().toLowerCase()
                    );

                    if (!cor) continue;

                    await conexao.query(`
                        INSERT INTO produto_variacoes
                        (
                            produto_id,
                            tamanho_id,
                            cor_id,
                            estoque
                        )
                        VALUES (?, NULL, ?, ?)
                    `, [
                        produtoBanco.id,
                        cor.id,
                        10
                    ]);

                    totalVariacoes++;

                }

            }

            // =====================================
            // Tamanho + Cor
            // =====================================
            else {

                for (const nomeTamanho of listaTamanhos) {

                    const tamanho = tamanhos.find(
                        t =>
                            t.nome.trim().toLowerCase() ===
                            nomeTamanho.trim().toLowerCase()
                    );

                    if (!tamanho) continue;

                    for (const nomeCor of listaCores) {

                        const cor = cores.find(
                            c =>
                                c.nome.trim().toLowerCase() ===
                                nomeCor.trim().toLowerCase()
                        );

                        if (!cor) continue;

                        await conexao.query(`
                            INSERT INTO produto_variacoes
                            (
                                produto_id,
                                tamanho_id,
                                cor_id,
                                estoque
                            )
                            VALUES (?, ?, ?, ?)
                        `, [
                            produtoBanco.id,
                            tamanho.id,
                            cor.id,
                            10
                        ]);

                        totalVariacoes++;

                    }

                }

            }

        }

        await conexao.commit();

        res.json({
            mensagem: "Importação concluída com sucesso!",
            produtosAnalisados: produtosBanco.length,
            variacoesCriadas: totalVariacoes
        });

    } catch (erro) {

        console.error("=========================");
        console.error("ERRO COMPLETO:");
        console.error(erro);
        console.error("=========================");

        try {
            await conexao.rollback();
        } catch { }

        res.status(500).json({
            erro: erro.message
        });

    } finally {

        conexao.release();

    }

}

module.exports = {

    cadastrarVariacoes,
    importarVariacoes

};