// ============================================================
// BUSCA GLOBAL DE PRODUTOS
// ============================================================

const inputBusca =
    document.querySelector("#pesquisarProduto");

const containerProdutos =
    document.querySelector(".grade-produtos");


// ============================================================
// PRODUTOS DO BANCO
// ============================================================

let todosOsProdutos = null;


// ============================================================
// NORMALIZAR TEXTO
// ============================================================

function normalizarTexto(texto) {

    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


// ============================================================
// CARREGAR TODOS OS PRODUTOS DO BANCO
// ============================================================

async function carregarTodosOsProdutos() {

    // Se já carregamos uma vez, não consulta novamente
    if (todosOsProdutos !== null) {

        return todosOsProdutos;

    }


    try {

        console.log(
            "🔎 Carregando todos os produtos do banco..."
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
            "❌ Erro ao carregar produtos:",
            erro
        );


        todosOsProdutos = [];

        return [];

    }

}


// ============================================================
// CRIAR CONTAINER DE SUGESTÕES
// ============================================================

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


// ============================================================
// CRIAR CARD
// ============================================================

function criarCardProduto(produto) {

    const card =
        document.createElement("div");


    card.className =
        "card-produto";


    // ========================================================
    // VARIAÇÕES
    // ========================================================

    const variacoes =
        Array.isArray(produto.variacoes)
            ? produto.variacoes
            : [];


    const tamanhos = [
        ...new Set(
            variacoes
                .map(v => v.tamanho)
                .filter(Boolean)
        )
    ];


    const cores = [
        ...new Set(
            variacoes
                .map(v => v.cor)
                .filter(Boolean)
        )
    ];


    const times =
        Array.isArray(produto.time)
            ? produto.time
            : [];


    // ========================================================
    // TAMANHOS
    // ========================================================

    const htmlTamanhos =
        tamanhos.length > 0
            ? `

                <label>
                    Tamanho:
                </label>

                <select class="busca-tamanho">

                    ${tamanhos.map(tamanho => `
                        <option value="${tamanho}">
                            ${tamanho}
                        </option>
                    `).join("")}

                </select>

            `
            : "";


    // ========================================================
    // CORES
    // ========================================================

    const htmlCores =
        cores.length > 0
            ? `

                <label>
                    Cor:
                </label>

                <select class="busca-cor">

                    ${cores.map(cor => `
                        <option value="${cor}">
                            ${cor}
                        </option>
                    `).join("")}

                </select>

            `
            : "";


    // ========================================================
    // TIMES
    // ========================================================

    const htmlTimes =
        times.length > 0
            ? `

                <label>
                    Time:
                </label>

                <select class="busca-time">

                    ${times.map(time => `
                        <option value="${time}">
                            ${time}
                        </option>
                    `).join("")}

                </select>

            `
            : "";


    // ========================================================
    // HTML DO CARD
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


        ${htmlTamanhos}

        ${htmlCores}

        ${htmlTimes}


        <button
            class="btn-adicionar-produto"
        >
            Adicionar ao carrinho
        </button>

    `;


    // ========================================================
    // BOTÃO CARRINHO
    // ========================================================

    const botao =
        card.querySelector(
            ".btn-adicionar-produto"
        );


    if (botao) {

        botao.addEventListener(
            "click",
            event => {

                const tamanho =
                    card.querySelector(
                        ".busca-tamanho"
                    )?.value || null;


                const cor =
                    card.querySelector(
                        ".busca-cor"
                    )?.value || null;


                const time =
                    card.querySelector(
                        ".busca-time"
                    )?.value || null;


                // --------------------------------------------
                // ANIMAÇÃO
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
                // CARRINHO
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

                        tamanho,

                        cor,

                        time

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

function mostrarResultados(produtos) {

    if (!containerProdutos) {
        return;
    }


    containerProdutos.innerHTML = "";


    if (!produtos.length) {

        const mensagem =
            document.createElement("p");


        mensagem.className =
            "mensagem-busca";


        mensagem.textContent =
            "Nenhum produto encontrado.";


        containerProdutos.appendChild(
            mensagem
        );


        return;

    }


    produtos.forEach(produto => {

        const card =
            criarCardProduto(produto);


        containerProdutos.appendChild(
            card
        );

    });

}


// ============================================================
// MOSTRAR SUGESTÕES
// ============================================================

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


    // IMPORTANTE:
    // Aqui NÃO usamos os cards da página.
    // Usamos TODOS os produtos do banco.

    const produtos =
        todosOsProdutos || [];


    const termoNormalizado =
        normalizarTexto(termo);


    const palavras =
        termoNormalizado
            .split(/\s+/)
            .filter(Boolean);


    // ========================================================
    // FILTRAR TODOS OS PRODUTOS
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


            // Cada palavra digitada precisa aparecer
            // no nome, categoria ou descrição.

            return palavras.every(palavra => {

                return (

                    nome.includes(palavra) ||

                    categoria.includes(palavra) ||

                    descricao.includes(palavra)

                );

            });

        });


    // ========================================================
    // NENHUMA SUGESTÃO
    // ========================================================

    if (!resultados.length) {

        containerSugestoes.style.display =
            "none";

        return;

    }


    // ========================================================
    // MOSTRAR ATÉ 8 SUGESTÕES
    // ========================================================

    resultados
        .slice(0, 8)
        .forEach(produto => {

            const sugestao =
                document.createElement("div");


            sugestao.className =
                "sugestao-produto";


            sugestao.innerHTML = `

                <div class="sugestao-info">

                    <strong>
                        ${produto.nome}
                    </strong>

                    <span>
                        R$ ${Number(
                            produto.preco || 0
                        ).toFixed(2)}
                    </span>

                </div>

            `;


            // Clicar na sugestão abre o produto

            sugestao.addEventListener(
                "click",
                () => {

                    window.location.href =
                        `/descricaoProdutos/produtosDescricao.html?id=${produto.id}`;

                }
            );


            containerSugestoes.appendChild(
                sugestao
            );

        });


    containerSugestoes.style.display =
        "block";

}


// ============================================================
// BUSCA GLOBAL
// ============================================================

async function buscarProduto() {

    if (
        !inputBusca ||
        !containerProdutos
    ) {

        return;

    }


    const texto =
        inputBusca.value.trim();


    // ========================================================
    // CAMPO VAZIO
    // ========================================================

    if (!texto) {

        containerSugestoes.style.display =
            "none";


        // Volta para a vitrine original
        window.location.reload();


        return;

    }


    // ========================================================
    // CARREGAR BANCO
    // ========================================================

    const produtos =
        await carregarTodosOsProdutos();


    if (!produtos.length) {

        mostrarResultados([]);

        return;

    }


    // ========================================================
    // NORMALIZAR
    // ========================================================

    const termo =
        normalizarTexto(texto);


    const palavras =
        termo
            .split(/\s+/)
            .filter(Boolean);


    // ========================================================
    // PESQUISAR EM TODOS OS PRODUTOS
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


            return palavras.every(palavra => {

                return (

                    nome.includes(palavra) ||

                    categoria.includes(palavra) ||

                    descricao.includes(palavra)

                );

            });

        });


    // ========================================================
    // MOSTRAR PRODUTOS
    // ========================================================

    mostrarResultados(
        resultados
    );


    // ========================================================
    // MOSTRAR SUGESTÕES
    // ========================================================

    mostrarSugestoes(
        texto
    );

}


// ============================================================
// EVENTO INPUT
// ============================================================

if (inputBusca) {

    inputBusca.addEventListener(
        "input",
        buscarProduto
    );


    // ========================================================
    // FOCUS
    // ========================================================

    inputBusca.addEventListener(
        "focus",
        async () => {

            if (!inputBusca.value.trim()) {
                return;
            }


            await carregarTodosOsProdutos();


            mostrarSugestoes(
                inputBusca.value
            );

        }
    );


    // ========================================================
    // ESC
    // ========================================================

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


    // ========================================================
    // CLIQUE FORA
    // ========================================================

    document.addEventListener(
        "click",
        event => {

            if (
                !inputBusca.contains(
                    event.target
                ) &&
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

}