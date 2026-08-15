// ============================================================
// BUSCA GLOBAL DE PRODUTOS
// ============================================================
//
// A busca consulta TODOS os produtos da API Railway.
// Não depende da categoria da página atual.
//
// Não mexe no vitrine.js.
// Não mexe no carrinho.
// Não mexe no dashboard.
// ============================================================


const inputBusca =
    document.querySelector("#pesquisarProduto");

const containerProdutos =
    document.querySelector(".grade-produtos");

const tituloVitrine =
    document.querySelector(".titulo-vitrine");


// ============================================================
// CACHE DOS PRODUTOS
// ============================================================

let todosOsProdutos = null;


// ============================================================
// NORMALIZAR TEXTO
// ============================================================
//
// Permite:
//
// "relogio" -> encontra "Relógio"
// "CAMISA"  -> encontra "Camisa"
// "oculos"  -> encontra "Óculos"
// ============================================================

function normalizarTexto(texto) {

    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


// ============================================================
// CARREGAR TODOS OS PRODUTOS
// ============================================================

async function carregarTodosOsProdutos() {

    if (todosOsProdutos !== null) {

        return todosOsProdutos;

    }


    try {

        console.log(
            "🔎 Buscando todos os produtos para pesquisa..."
        );


        const resposta = await fetch(
            `${API_URL}/api/produtos`
        );


        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }


        const produtos =
            await resposta.json();


        if (!Array.isArray(produtos)) {

            throw new Error(
                "A API não retornou uma lista de produtos."
            );

        }


        todosOsProdutos = produtos;


        console.log(
            `✅ ${produtos.length} produtos carregados para a busca.`
        );


        return todosOsProdutos;

    }

    catch (erro) {

        console.error(
            "❌ Erro ao carregar produtos para busca:",
            erro
        );


        return [];

    }

}


// ============================================================
// MOSTRAR MENSAGEM
// ============================================================

function mostrarMensagemBusca(texto) {

    if (!containerProdutos) {
        return;
    }


    containerProdutos.innerHTML = "";


    const mensagem =
        document.createElement("p");


    mensagem.className =
        "mensagem-busca";


    mensagem.textContent =
        texto;


    containerProdutos.appendChild(
        mensagem
    );

}


// ============================================================
// CRIAR CARD DO PRODUTO
// ============================================================

function criarCardProduto(produto) {

    const card =
        document.createElement("div");


    card.className =
        "card-produto";


    // ========================================================
    // TAMANHOS
    // ========================================================

    const tamanhos =
        produto.variacoes
            ? [
                ...new Set(
                    produto.variacoes
                        .filter(v => v.tamanho)
                        .map(v => v.tamanho)
                )
            ]
            : [];


    // ========================================================
    // CORES
    // ========================================================

    const cores =
        produto.variacoes
            ? [
                ...new Set(
                    produto.variacoes
                        .filter(v => v.cor)
                        .map(v => v.cor)
                )
            ]
            : [];


    // ========================================================
    // TIME
    // ========================================================

    const times =
        Array.isArray(produto.time)
            ? produto.time
            : [];


    // ========================================================
    // SELECT TAMANHO
    // ========================================================

    const selectTamanho =
        tamanhos.length > 0
            ? `

                <label for="busca-tamanho-${produto.id}">
                    Tamanho:
                </label>

                <select id="busca-tamanho-${produto.id}">

                    ${tamanhos
                        .map(tamanho => `
                            <option value="${tamanho}">
                                ${tamanho}
                            </option>
                        `)
                        .join("")
                    }

                </select>

            `
            : "";


    // ========================================================
    // SELECT COR
    // ========================================================

    const selectCor =
        cores.length > 0
            ? `

                <label for="busca-cor-${produto.id}">
                    Cor:
                </label>

                <select id="busca-cor-${produto.id}">

                    ${cores
                        .map(cor => `
                            <option value="${cor}">
                                ${cor}
                            </option>
                        `)
                        .join("")
                    }

                </select>

            `
            : "";


    // ========================================================
    // SELECT TIME
    // ========================================================

    const selectTime =
        times.length > 0
            ? `

                <label for="busca-time-${produto.id}">
                    Time:
                </label>

                <select id="busca-time-${produto.id}">

                    ${times
                        .map(time => `
                            <option value="${time}">
                                ${time}
                            </option>
                        `)
                        .join("")
                    }

                </select>

            `
            : "";


    // ========================================================
    // CARD
    // ========================================================

    card.innerHTML = `

        <a
            href="/descricaoProdutos/produtosDescricao.html?id=${produto.id}"
            class="link-produto"
        >

            <img
                src="${produto.imagem_principal || ""}"
                alt="${produto.nome || "Produto"}"
            >

        </a>


        <h3>
            ${produto.nome || ""}
        </h3>


        <p class="preco">

            R$
            ${Number(produto.preco || 0).toFixed(2)}

        </p>


        ${selectTamanho}

        ${selectCor}

        ${selectTime}


        <button
            class="btn-adicionar-produto"
            data-id="${produto.id}"
        >
            Adicionar ao carrinho
        </button>

    `;


    // ========================================================
    // BOTÃO ADICIONAR AO CARRINHO
    // ========================================================

    const botao =
        card.querySelector(
            ".btn-adicionar-produto"
        );


    if (botao) {

        botao.addEventListener(
            "click",
            event => {


                // --------------------------------------------
                // TAMANHO
                // --------------------------------------------

                const selectTamanhoProduto =
                    document.getElementById(
                        `busca-tamanho-${produto.id}`
                    );


                const tamanhoSelecionado =
                    selectTamanhoProduto
                        ? selectTamanhoProduto.value
                        : null;


                // --------------------------------------------
                // COR
                // --------------------------------------------

                const selectCorProduto =
                    document.getElementById(
                        `busca-cor-${produto.id}`
                    );


                const corSelecionada =
                    selectCorProduto
                        ? selectCorProduto.value
                        : null;


                // --------------------------------------------
                // TIME
                // --------------------------------------------

                const selectTimeProduto =
                    document.getElementById(
                        `busca-time-${produto.id}`
                    );


                const timeSelecionado =
                    selectTimeProduto
                        ? selectTimeProduto.value
                        : null;


                // --------------------------------------------
                // ANIMAÇÃO DO CARRINHO
                // --------------------------------------------

                if (
                    typeof animarParaCarrinho ===
                    "function"
                ) {

                    animarParaCarrinho(
                        produto.imagem_principal,
                        event.currentTarget
                    );

                }


                // --------------------------------------------
                // ADICIONAR AO CARRINHO
                // --------------------------------------------

                if (
                    typeof adicionarAoCarrinho ===
                    "function"
                ) {

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

            }
        );

    }


    return card;

}


// ============================================================
// MOSTRAR RESULTADOS
// ============================================================

function mostrarResultadosBusca(produtos) {

    if (!containerProdutos) {
        return;
    }


    containerProdutos.innerHTML = "";


    // ========================================================
    // NENHUM RESULTADO
    // ========================================================

    if (
        !Array.isArray(produtos) ||
        produtos.length === 0
    ) {

        mostrarMensagemBusca(
            "Nenhum produto encontrado."
        );


        return;

    }


    // ========================================================
    // MOSTRAR QUANTIDADE
    // ========================================================

    if (tituloVitrine) {

        tituloVitrine.textContent =
            "RESULTADOS DA BUSCA";

    }


    // ========================================================
    // CRIAR CARDS
    // ========================================================

    produtos.forEach(produto => {

        const card =
            criarCardProduto(produto);


        containerProdutos.appendChild(
            card
        );

    });


    console.log(
        `🔎 ${produtos.length} produtos encontrados.`
    );

}


// ============================================================
// REALIZAR BUSCA
// ============================================================

async function buscarProduto() {

    if (
        !inputBusca ||
        !containerProdutos
    ) {

        return;

    }


    const termoOriginal =
        inputBusca.value.trim();


    // ========================================================
    // PESQUISA VAZIA
    // ========================================================
    //
    // Quando apagar a pesquisa, recarregamos a página.
    //
    // Isso faz a vitrine voltar exatamente ao funcionamento
    // original da categoria atual.
    // ========================================================

    if (!termoOriginal) {

        window.location.reload();

        return;

    }


    // ========================================================
    // MENSAGEM DE CARREGAMENTO
    // ========================================================

    mostrarMensagemBusca(
        "Pesquisando produtos..."
    );


    // ========================================================
    // CARREGAR TODOS OS PRODUTOS
    // ========================================================

    const produtos =
        await carregarTodosOsProdutos();


    if (!produtos.length) {

        mostrarMensagemBusca(
            "Não foi possível carregar os produtos."
        );

        return;

    }


    // ========================================================
    // NORMALIZAR TERMO
    // ========================================================

    const termo =
        normalizarTexto(
            termoOriginal
        );


    // ========================================================
    // FILTRAR PRODUTOS
    // ========================================================
    //
    // Pesquisa em:
    //
    // - Nome
    // - Categoria
    // - Descrição
    //
    // E ignora acentos.
    // ========================================================

    const resultados =
        produtos.filter(produto => {


            const nome =
                normalizarTexto(
                    produto.nome
                );


            const categoria =
                normalizarTexto(
                    produto.categoria_nome
                    || produto.categoria
                );


            const descricao =
                normalizarTexto(
                    produto.descricao
                );


            return (

                nome.includes(termo) ||

                categoria.includes(termo) ||

                descricao.includes(termo)

            );

        });


    // ========================================================
    // MOSTRAR RESULTADOS
    // ========================================================

    mostrarResultadosBusca(
        resultados
    );

}


// ============================================================
// EVENTO DA BUSCA
// ============================================================

if (inputBusca) {

    inputBusca.addEventListener(
        "input",
        buscarProduto
    );

}