require("dotenv").config();

const path = require("path");

const produtos = require("../public/produtos/produtos");

const db = require("../database");

const { cloudinary } = require("../config/cloudinary");


// Buscar ou criar categoria
async function buscarCategoria(nomeCategoria) {

    const [resultado] = await db.query(
        "SELECT id FROM categorias WHERE nome = ?",
        [nomeCategoria]
    );


    if (resultado.length > 0) {

        return resultado[0].id;

    }


    const [novaCategoria] = await db.query(

        `INSERT INTO categorias
        (nome, descricao)
        VALUES (?, ?)`,

        [
            nomeCategoria,
            `Categoria ${nomeCategoria}`
        ]

    );


    console.log("📁 Categoria criada:", nomeCategoria);


    return novaCategoria.insertId;

}



// Upload Cloudinary
async function enviarImagem(caminho) {


    const imagemLocal = path.join(

        __dirname,
        "../public",
        caminho.replace("../", "")

    );


    const resultado = await cloudinary.uploader.upload(

        imagemLocal,

        {
            folder: "artigos-militares"
        }

    );


    return resultado.secure_url;

}



// Verificar produto existente
async function produtoExiste(nome) {


    const [resultado] = await db.query(

        "SELECT id FROM produtos WHERE nome = ?",

        [nome]

    );


    return resultado.length > 0;

}




async function migrar() {


    console.log(
        `🚀 Iniciando migração de ${produtos.length} produtos`
    );


    let cadastrados = 0;
    let pulados = 0;
    let erros = 0;



    for (let i = 0; i < produtos.length; i++) {


        const produto = produtos[i];


        try {


            console.log(
                `\n[${i + 1}/${produtos.length}] ${produto.nome}`
            );



            // evitar duplicados

            if (await produtoExiste(produto.nome)) {


                console.log(
                    "⚠️ Produto já existe, pulando..."
                );


                pulados++;

                continue;

            }



            // categoria

            const categoriaId = await buscarCategoria(
                produto.categoria
            );



            // imagem

            let imagemUrl = null;


            if (produto.imagem) {


                imagemUrl = await enviarImagem(
                    produto.imagem
                );


            }



            // produto

            const [novoProduto] = await db.query(

                `INSERT INTO produtos
                (
                    categoria_id,
                    nome,
                    descricao,
                    preco,
                    imagem_principal
                )

                VALUES (?,?,?,?,?)`,

                [

                    categoriaId,
                    produto.nome,
                    produto.descricao || null,
                    produto.preco,
                    imagemUrl

                ]

            );



            // imagem produto

            if (imagemUrl) {


                await db.query(

                    `INSERT INTO produto_imagens
                    (
                        produto_id,
                        url,
                        principal
                    )

                    VALUES (?,?,1)`,

                    [

                        novoProduto.insertId,
                        imagemUrl

                    ]

                );


            }



            cadastrados++;


            console.log(
                "✅ Cadastrado ID:",
                novoProduto.insertId
            );



        } catch (erro) {


            erros++;


            console.log(
                "❌ Erro no produto:",
                produto.nome
            );


            console.log(
                erro.message
            );


        }


    }



    console.log("\n==========================");
    console.log("MIGRAÇÃO FINALIZADA");
    console.log("==========================");

    console.log(
        "✅ Cadastrados:",
        cadastrados
    );

    console.log(
        "⚠️ Pulados:",
        pulados
    );

    console.log(
        "❌ Erros:",
        erros
    );


    process.exit();


}


migrar();