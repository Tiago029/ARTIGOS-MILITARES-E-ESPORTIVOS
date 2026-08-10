document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // =====================================================
    // URL DA API
    // Usa a variável do config.js.
    // Se ela não existir, utiliza diretamente o Railway.
    // =====================================================

    const URL_API =
        typeof API_URL !== "undefined"
            ? API_URL
            : "https://artigos-militares-e-esportivos-production.up.railway.app";

    // =====================================================
    // VERIFICAR ID
    // =====================================================

    if (!id) {

        document.body.innerHTML = `
            <p>Produto não encontrado.</p>
        `;

        return;
    }

    try {

        // =================================================
        // BUSCAR PRODUTO NO RAILWAY
        // =================================================

        const resposta = await fetch(
            `${URL_API}/api/produtos/${id}`
        );

        if (!resposta.ok) {

            console.error(
                "Erro ao buscar produto:",
                resposta.status
            );

            document.body.innerHTML = `
                <p>Produto não encontrado.</p>
            `;

            return;
        }

        const produto = await resposta.json();

        console.log("Produto carregado:", produto);
        console.log("Variações:", produto.variacoes);


        // =================================================
        // ELEMENTOS DA PÁGINA
        // =================================================

        const imagem =
            document.getElementById("imagemProduto");

        const nome =
            document.getElementById("nomeProduto");

        const preco =
            document.getElementById("precoProduto");

        const descricao =
            document.getElementById("descricaoProduto");

        const opcoes =
            document.getElementById("opcoesProduto");


        // =================================================
        // PREENCHER PRODUTO
        // =================================================

        if (imagem) {

            imagem.src = produto.imagem_principal || "";

            imagem.alt = produto.nome || "Produto";

        }

        if (nome) {

            nome.textContent = produto.nome || "";

        }

        if (preco) {

            preco.textContent =
                `R$ ${Number(produto.preco || 0).toFixed(2)}`;

        }

        if (descricao) {

            descricao.textContent =
                produto.descricao || "";

        }


        // =================================================
        // ZOOM DA IMAGEM
        // =================================================

        if (imagem) {

            imagem.onload = () => {

                const zoomContainer =
                    document.getElementById("zoomContainer");

                if (!zoomContainer) return;


                function aplicarZoom(x, y) {

                    const rect =
                        zoomContainer.getBoundingClientRect();

                    const posX =
                        ((x - rect.left) / rect.width) * 100;

                    const posY =
                        ((y - rect.top) / rect.height) * 100;

                    imagem.style.transformOrigin =
                        `${posX}% ${posY}%`;

                    imagem.style.transform =
                        "scale(2)";

                }


                function removerZoom() {

                    imagem.style.transform =
                        "scale(1)";

                    imagem.style.transformOrigin =
                        "center";

                }


                // DESKTOP

                zoomContainer.addEventListener(
                    "mousemove",
                    (e) => {

                        aplicarZoom(
                            e.clientX,
                            e.clientY
                        );

                    }
                );


                zoomContainer.addEventListener(
                    "mouseleave",
                    removerZoom
                );


                // CELULAR

                zoomContainer.addEventListener(
                    "touchstart",
                    (e) => {

                        if (!e.touches[0]) return;

                        aplicarZoom(
                            e.touches[0].clientX,
                            e.touches[0].clientY
                        );

                    }
                );


                zoomContainer.addEventListener(
                    "touchmove",
                    (e) => {

                        if (!e.touches[0]) return;

                        aplicarZoom(
                            e.touches[0].clientX,
                            e.touches[0].clientY
                        );

                    }
                );


                zoomContainer.addEventListener(
                    "touchend",
                    removerZoom
                );

            };

        }


        // =================================================
        // VARIAÇÕES
        // =================================================

        if (!opcoes) return;

        opcoes.innerHTML = "";

        const variacoes =
            Array.isArray(produto.variacoes)
                ? produto.variacoes
                : [];


        // =================================================
        // TAMANHOS
        // =================================================

        const tamanhos = [
            ...new Set(
                variacoes
                    .map(v => v.tamanho)
                    .filter(Boolean)
            )
        ];


        // =================================================
        // CORES
        // =================================================

        const cores = [
            ...new Set(
                variacoes
                    .map(v => v.cor)
                    .filter(Boolean)
            )
        ];


        // =================================================
        // SELECT DE TAMANHO
        // =================================================

        if (tamanhos.length > 0) {

            opcoes.innerHTML += `

                <div class="opcao">

                    <label for="tamanho">
                        Tamanho
                    </label>

                    <select id="tamanho">

                        ${tamanhos.map(tamanho => `

                            <option value="${tamanho}">
                                ${tamanho}
                            </option>

                        `).join("")}

                    </select>

                </div>

            `;

        }


        // =================================================
        // SELECT DE COR
        // =================================================

        if (cores.length > 0) {

            opcoes.innerHTML += `

                <div class="opcao">

                    <label for="cor">
                        Cor
                    </label>

                    <select id="cor">

                        ${cores.map(cor => `

                            <option value="${cor}">
                                ${cor}
                            </option>

                        `).join("")}

                    </select>

                </div>

            `;

        }


        // =================================================
        // BOTÃO ADICIONAR AO CARRINHO
        // =================================================

        const botaoCarrinho =
            document.getElementById(
                "btnAdicionarCarrinho"
            );


        if (botaoCarrinho) {

            botaoCarrinho.addEventListener(
                "click",
                function (event) {

                    const tamanho =
                        document.getElementById("tamanho")?.value
                        || null;

                    const cor =
                        document.getElementById("cor")?.value
                        || null;


                    // Animação

                    if (
                        typeof animarParaCarrinho ===
                        "function"
                    ) {

                        animarParaCarrinho(
                            produto.imagem_principal,
                            event.currentTarget
                        );

                    }


                    // Adicionar ao carrinho

                    if (
                        typeof adicionarAoCarrinho ===
                        "function"
                    ) {

                        adicionarAoCarrinho({

                            id: produto.id,

                            nome: produto.nome,

                            preco:
                                Number(produto.preco),

                            imagem:
                                produto.imagem_principal,

                            tamanho,

                            cor

                        });

                    } else {

                        console.error(
                            "Função adicionarAoCarrinho não encontrada."
                        );

                    }

                }
            );

        }

    }

    catch (erro) {

        console.error(
            "Erro ao carregar produto:",
            erro
        );

        document.body.innerHTML = `
            <p>Erro ao carregar produto.</p>
        `;

    }

});