// =============================
// BUSCAR PRODUTOS
// =============================

const inputBusca =
    document.querySelector("#pesquisarProduto");

const containerProdutos =
    document.querySelector(".grade-produtos");


// =============================
// NORMALIZAR TEXTO
// =============================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// =============================
// CRIAR CONTAINER DE SUGESTÕES
// =============================

let containerSugestoes =
    document.querySelector(".sugestoes-busca");


if (!containerSugestoes && inputBusca) {

    containerSugestoes =
        document.createElement("div");

    containerSugestoes.className =
        "sugestoes-busca";

    inputBusca.parentElement.appendChild(
        containerSugestoes
    );

}


// =============================
// PEGAR TODOS OS PRODUTOS
// =============================

function obterCardsProdutos() {

    if (!containerProdutos) {
        return [];
    }

    return Array.from(
        containerProdutos.querySelectorAll(
            ".card-produto"
        )
    );

}


// =============================
// PEGAR NOME DO PRODUTO
// =============================

function obterNomeProduto(card) {

    const elementoNome =
        card.querySelector("h3");

    if (!elementoNome) {
        return "";
    }

    return elementoNome.textContent
        .trim();

}


// =============================
// PEGAR PREÇO
// =============================

function obterPrecoProduto(card) {

    const elementosPreco =
        card.querySelectorAll(
            ".preco, .preco-produto, .precoProduto"
        );

    if (elementosPreco.length > 0) {

        return elementosPreco[0]
            .textContent
            .trim();

    }

    return "";

}


// =============================
// ABRIR PRODUTO
// =============================

function abrirProduto(card) {

    // Primeiro tenta encontrar um link
    const link =
        card.querySelector("a");

    if (link && link.href) {

        window.location.href =
            link.href;

        return;

    }


    // Caso o card tenha alguma função
    // de clique própria
    card.click();

}


// =============================
// MOSTRAR SUGESTÕES
// =============================

function mostrarSugestoes(termo) {

    if (!containerSugestoes) {
        return;
    }


    containerSugestoes.innerHTML = "";


    if (!termo) {

        containerSugestoes.style.display =
            "none";

        return;

    }


    const cards =
        obterCardsProdutos();


    // =============================
    // BUSCAR PRODUTOS
    // =============================

    const termoNormalizado =
        normalizarTexto(termo);


    const palavras =
        termoNormalizado
            .split(/\s+/)
            .filter(Boolean);


    const produtosEncontrados =
        cards.filter(card => {

            const nome =
                normalizarTexto(
                    obterNomeProduto(card)
                );


            // Todas as palavras digitadas
            // precisam existir no nome
            return palavras.every(
                palavra =>
                    nome.includes(palavra)
            );

        });


    // =============================
    // NENHUM RESULTADO
    // =============================

    if (
        produtosEncontrados.length === 0
    ) {

        containerSugestoes.style.display =
            "none";

        return;

    }


    // =============================
    // LIMITE DE SUGESTÕES
    // =============================

    const limite =
        produtosEncontrados.slice(0, 8);


    // =============================
    // CRIAR SUGESTÕES
    // =============================

    limite.forEach(card => {

        const nome =
            obterNomeProduto(card);


        const preco =
            obterPrecoProduto(card);


        const sugestao =
            document.createElement("div");

        sugestao.className =
            "sugestao-produto";


        sugestao.innerHTML = `

            <div class="sugestao-info">

                <strong>
                    ${nome}
                </strong>

                ${
                    preco
                        ? `<span>${preco}</span>`
                        : ""
                }

            </div>

        `;


        sugestao.addEventListener(
            "click",
            () => {

                abrirProduto(card);

            }
        );


        containerSugestoes.appendChild(
            sugestao
        );

    });


    // =============================
    // MOSTRAR
    // =============================

    containerSugestoes.style.display =
        "block";

}


// =============================
// FILTRAR PRODUTOS
// =============================

function buscarProduto() {

    if (
        !inputBusca ||
        !containerProdutos
    ) {

        return;

    }


    const termo =
        normalizarTexto(
            inputBusca.value
        );


    const palavras =
        termo
            .split(/\s+/)
            .filter(Boolean);


    const cards =
        obterCardsProdutos();


    let quantidadeEncontrada = 0;


    cards.forEach(card => {

        const nome =
            normalizarTexto(
                obterNomeProduto(card)
            );


        const encontrou =
            palavras.length === 0 ||
            palavras.every(
                palavra =>
                    nome.includes(palavra)
            );


        if (encontrou) {

            card.style.display = "";

            quantidadeEncontrada++;

        } else {

            card.style.display =
                "none";

        }

    });


    // =============================
    // SUGESTÕES
    // =============================

    mostrarSugestoes(
        inputBusca.value
    );


    // =============================
    // MENSAGEM
    // =============================

    let mensagem =
        document.querySelector(
            ".mensagem-busca"
        );


    if (
        termo &&
        quantidadeEncontrada === 0
    ) {

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


    // Mostrar sugestões quando
    // clicar no campo novamente
    inputBusca.addEventListener(
        "focus",
        () => {

            if (inputBusca.value.trim()) {

                mostrarSugestoes(
                    inputBusca.value
                );

            }

        }
    );


    // Fechar sugestões ao clicar fora
    document.addEventListener(
        "click",
        event => {

            if (
                !inputBusca.contains(event.target) &&
                !containerSugestoes?.contains(
                    event.target
                )
            ) {

                if (containerSugestoes) {

                    containerSugestoes.style.display =
                        "none";

                }

            }

        }
    );


    // Fechar com ESC
    inputBusca.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (containerSugestoes) {

                    containerSugestoes.style.display =
                        "none";

                }

            }

        }
    );

}