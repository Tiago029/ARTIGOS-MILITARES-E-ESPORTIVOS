const db = require("../database");


// Listar categorias
async function listarCategorias(req, res) {

    try {

        const [categorias] = await db.query(
            "SELECT * FROM categorias ORDER BY nome"
        );

        res.json(categorias);

    } catch (erro) {

        console.error("Erro ao listar categorias:", erro);

        res.status(500).json({
            erro: "Erro ao listar categorias."
        });

    }

}


// Cadastrar categoria
async function cadastrarCategoria(req, res) {

    try {

        const { nome, descricao } = req.body || {};


        if (!nome) {

            return res.status(400).json({
                erro: "O nome da categoria é obrigatório."
            });

        }


        await db.query(

            `INSERT INTO categorias
            (nome, descricao)
            VALUES (?, ?)`,

            [nome, descricao]

        );


        res.status(201).json({

            mensagem: "Categoria cadastrada com sucesso!"

        });


    } catch (erro) {

        console.error("Erro ao cadastrar categoria:", erro);


        // Categoria duplicada
        if (erro.code === "ER_DUP_ENTRY") {

            return res.status(400).json({

                erro: "Essa categoria já existe."

            });

        }


        res.status(500).json({

            erro: "Erro ao cadastrar categoria."

        });

    }

}


module.exports = {

    listarCategorias,
    cadastrarCategoria

};