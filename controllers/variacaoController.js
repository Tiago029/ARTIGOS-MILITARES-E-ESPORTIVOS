const db = require("../database");


// ===============================
// CADASTRAR VARIAÇÕES MANUALMENTE
// ===============================

async function cadastrarVariacoes(req, res) {

    const produto_id = req.params.id;
    const { variacoes } = req.body;


    if (!variacoes || !Array.isArray(variacoes)) {

        return res.status(400).json({
            erro: "Lista de variações inválida."
        });

    }


    let conexao;


    try {

        conexao = await db.getConnection();

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
                    variacao.tamanho_id || null,
                    variacao.cor_id || null,
                    variacao.estoque || 0
                ]

            );

        }


        await conexao.commit();


        res.status(201).json({

            mensagem:
                "Variações cadastradas com sucesso!"

        });


    }

    catch (erro) {

        console.error(
            "Erro ao cadastrar variações:",
            erro
        );


        if (conexao) {

            try {

                await conexao.rollback();

            }

            catch (erroRollback) {

                console.error(
                    "Erro ao desfazer transação:",
                    erroRollback
                );

            }

        }


        res.status(500).json({

            erro:
                "Erro ao cadastrar variações."

        });

    }

    finally {

        if (conexao) {

            conexao.release();

        }

    }

}


// =========================================
// IMPORTAÇÃO ANTIGA
// =========================================
// Esta função existia apenas para importar
// variações do antigo produtos.js.
//
// O sistema agora utiliza exclusivamente
// o MySQL como fonte de produtos.
//
// Mantemos a função para não quebrar a rota
// antiga, caso ela ainda esteja registrada.
// =========================================

async function importarVariacoes(req, res) {

    return res.status(410).json({

        erro:
            "A importação do antigo produtos.js não está mais disponível. Os produtos e variações agora são gerenciados pelo banco de dados MySQL."

    });

}


// ===============================
// EXPORTAR FUNÇÕES
// ===============================

module.exports = {

    cadastrarVariacoes,
    importarVariacoes

};