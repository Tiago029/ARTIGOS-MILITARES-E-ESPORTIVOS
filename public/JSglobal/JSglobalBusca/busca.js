// =============================
// BUSCAR PRODUTOS
// =============================

const inputBusca =
    document.querySelector("#pesquisarProduto");

const containerProdutos =
    document.querySelector(".grade-produtos");


// =============================
// BUSCA
// =============================

function buscarProduto() {

    if (!inputBusca || !containerProdutos) {
        return;
    }


    const termo =
        inputBusca.value
            .trim()
            .toLowerCase();


    const cards =
        containerProdutos.querySelectorAll(
            ".card-produto"
        );


    cards.forEach(card => {

        const nomeProduto =
            card.querySelector("h3");


        if (!nomeProduto) {
            return;
        }


        const nome =
            nomeProduto.textContent
                .trim()
                .toLowerCase();


        if (nome.includes(termo)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });


    // =============================
    // VERIFICAR SE ENCONTROU
    // =============================

    const cardsVisiveis =
        Array.from(cards).filter(card => {

            return card.style.display !== "none";

        });


    let mensagem =
        document.querySelector(
            ".mensagem-busca"
        );


    if (cardsVisiveis.length === 0) {

        if (!mensagem) {

            mensagem =
                document.createElement("p");

            mensagem.className =
                "mensagem-busca";

            containerProdutos.appendChild(
                mensagem
            );

        }

        mensagem.textContent =
            "Nenhum produto encontrado.";

    } else {

        if (mensagem) {

            mensagem.remove();

        }

    }

}


// =============================
// EVENTO DE BUSCA
// =============================

if (inputBusca) {

    inputBusca.addEventListener(
        "input",
        buscarProduto
    );

}