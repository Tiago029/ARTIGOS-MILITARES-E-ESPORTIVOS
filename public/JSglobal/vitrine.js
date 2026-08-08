document.addEventListener("DOMContentLoaded", async () => {

    const grade =
        document.querySelector(".grade-produtos");

    if (!grade) return;

    // ==============================
    // MENSAGEM DE CARREGAMENTO
    // ==============================

    grade.innerHTML = `
    <div class="carregando-produtos">
        <div class="spinner-produtos"></div>
        <p>Carregando produtos...</p>
        <span>Aguarde enquanto preparamos nossa vitrine.</span>
    </div>
`;


    // ==========================================
    // CATEGORIA DA PÁGINA
    // ==========================================

    const categoriaPagina =
        document.body.dataset.categoria;


    // ==========================================
    // VERIFICAR CATEGORIA
    // ==========================================

    if (!categoriaPagina) {

        console.warn(
            "Esta página não possui data-categoria."
        );

        grade.innerHTML =
            "<p>Nenhuma categoria selecionada.</p>";

        return;

    }


    // ==========================================
    // DEFINIR URL
    // ==========================================

    let url;


    if (
        categoriaPagina
            .trim()
            .toLowerCase() ===
        "produtos em destaques"
    ) {

        url =
            "/api/produtos/destaques";

    }

    else {

        url =
            "/api/produtos/categoria/" +
            encodeURIComponent(
                categoriaPagina
            );

    }


    console.log(
        "Categoria da página:",
        categoriaPagina
    );

    console.log(
        "Buscando produtos em:",
        url
    );


    // ==========================================
    // BUSCAR PRODUTOS
    // ==========================================

    let produtosFiltrados = [];


    try {

        const resposta =
            await fetch(url);


        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }


        produtosFiltrados =
            await resposta.json();


    }

    catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );


        grade.innerHTML =
            "<p>Erro ao carregar produtos.</p>";

        return;

    }


    // ==========================================
    // LIMPAR GRADE
    // ==========================================

    grade.innerHTML = "";


    // ==========================================
    // NENHUM PRODUTO
    // ==========================================

    if (
        !Array.isArray(produtosFiltrados) ||
        produtosFiltrados.length === 0
    ) {

        grade.innerHTML =
            "<p>Nenhum produto encontrado.</p>";

        return;

    }


    // ==========================================
    // MOSTRAR PRODUTOS
    // ==========================================

    produtosFiltrados.forEach(produto => {

        const card =
            document.createElement("div");


        card.className =
            "card-produto";


        // ======================================
        // TAMANHOS
        // ======================================

        const tamanhos =
            produto.variacoes

                ? [
                    ...new Set(

                        produto.variacoes

                            .filter(
                                v => v.tamanho
                            )

                            .map(
                                v => v.tamanho
                            )

                    )
                ]

                : [];


        // ======================================
        // CORES
        // ======================================

        const cores =
            produto.variacoes

                ? [
                    ...new Set(

                        produto.variacoes

                            .filter(
                                v => v.cor
                            )

                            .map(
                                v => v.cor
                            )

                    )
                ]

                : [];


        // ======================================
        // SELECT TAMANHO
        // ======================================

        const selectTamanho =
            tamanhos.length > 0

                ? `

                    <label
                        for="tamanho-${produto.id}">

                        Tamanho:

                    </label>

                    <select
                        id="tamanho-${produto.id}">

                        ${tamanhos
                    .map(
                        tamanho =>
                            `<option value="${tamanho}">
                                            ${tamanho}
                                        </option>`
                    )
                    .join("")

                }

                    </select>

                `

                : "";


        // ======================================
        // SELECT COR
        // ======================================

        const selectCor =
            cores.length > 0

                ? `

                    <label
                        for="cor-${produto.id}">

                        Cor:

                    </label>

                    <select
                        id="cor-${produto.id}">

                        ${cores
                    .map(
                        cor =>
                            `<option value="${cor}">
                                            ${cor}
                                        </option>`
                    )
                    .join("")

                }

                    </select>

                `

                : "";


        // ======================================
        // SELECT TIME
        // ======================================

        const selectTime =
            produto.time &&
                produto.time.length > 0

                ? `

                    <label
                        for="time-${produto.id}">

                        Time:

                    </label>

                    <select
                        id="time-${produto.id}">

                        ${produto.time
                    .map(
                        time =>
                            `<option value="${time}">
                                            ${time}
                                        </option>`
                    )
                    .join("")

                }

                    </select>

                `

                : "";


        // ======================================
        // CARD
        // ======================================

        card.innerHTML = `

            <a
                href="/descricaoProdutos/produtosDescricao.html?id=${produto.id}"
                class="link-produto">

                <img
                    src="${produto.imagem_principal}"
                    alt="${produto.nome}"
                >

            </a>


            <h3>
                ${produto.nome}
            </h3>


            <p class="preco">

                R$
                ${Number(produto.preco).toFixed(2)}

            </p>


            ${selectTamanho}

            ${selectCor}

            ${selectTime}


            <button
                class="btn-adicionar-produto"
                data-id="${produto.id}">

                Adicionar ao carrinho

            </button>

        `;


        // ======================================
        // BOTÃO CARRINHO
        // ======================================

        const botao =
            card.querySelector(
                ".btn-adicionar-produto"
            );


        botao.addEventListener(
            "click",
            event => {

                const selectT =
                    document.getElementById(
                        `tamanho-${produto.id}`
                    );


                const selectC =
                    document.getElementById(
                        `cor-${produto.id}`
                    );


                const selectTime =
                    document.getElementById(
                        `time-${produto.id}`
                    );


                const tamanhoSelecionado =
                    selectT
                        ? selectT.value
                        : null;


                const corSelecionada =
                    selectC
                        ? selectC.value
                        : null;


                const timeSelecionado =
                    selectTime
                        ? selectTime.value
                        : null;


                // ANIMAÇÃO

                animarParaCarrinho(
                    produto.imagem_principal,
                    event.currentTarget
                );


                // ADICIONAR

                adicionarAoCarrinho({

                    id:
                        produto.id,

                    nome:
                        produto.nome,

                    preco:
                        Number(produto.preco),

                    imagem:
                        produto.imagem_principal,

                    tamanho:
                        tamanhoSelecionado,

                    cor:
                        corSelecionada,

                    time:
                        timeSelecionado

                });

            }
        );


        grade.appendChild(card);

    });

});


// ============================================================
// ANIMAÇÃO PARA O CARRINHO
// ============================================================

function animarParaCarrinho(
    imagemSrc,
    elementoOrigem
) {

    const img =
        document.createElement("img");


    img.src =
        imagemSrc;


    img.className =
        "animar-carrinho";


    if (!elementoOrigem) {

        return;

    }


    const origem =
        elementoOrigem.getBoundingClientRect();


    img.style.left =
        origem.left + "px";


    img.style.top =
        origem.top + "px";


    document.body.appendChild(img);


    // ==========================================
    // LOCALIZAR CARRINHO
    // ==========================================

    let carrinho =
        document.querySelector(
            ".carrinho-flutuante"
        );


    if (
        !carrinho ||
        carrinho.style.display === "none"
    ) {

        carrinho =
            document.querySelector(
                ".carrinho"
            );

    }


    if (!carrinho) {

        img.remove();

        return;

    }


    const destino =
        carrinho.getBoundingClientRect();


    requestAnimationFrame(() => {

        img.style.transform =
            `translate(
                ${destino.left - origem.left}px,
                ${destino.top - origem.top}px
            )
            scale(0.1)`;


        img.style.opacity =
            "0";

    });


    setTimeout(() => {

        img.remove();

    }, 800);

}


// ============================================================
// ABRIR PÁGINA DO PRODUTO
// ============================================================

function abrirDetalhe(id) {

    window.location.href =
        `/descricaoProdutos/produtosDescricao.html?id=${id}`;

}