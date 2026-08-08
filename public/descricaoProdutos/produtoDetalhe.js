document.addEventListener("DOMContentLoaded", async () => {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    try {

        const resposta = await fetch(`/api/produtos/${id}`);

        if (!resposta.ok) {

            document.body.innerHTML = "<p>Produto não encontrado.</p>";

            return;

        }

        const produto = await resposta.json();
        console.log(produto);
        console.log(produto.variacoes);


        // ELEMENTOS

        const imagem = document.getElementById("imagemProduto");

        imagem.src = produto.imagem_principal;

        document.getElementById("nomeProduto").textContent =
            produto.nome;

        document.getElementById("precoProduto").textContent =
            `R$ ${Number(produto.preco).toFixed(2)}`;

        document.getElementById("descricaoProduto").textContent =
            produto.descricao || "";

        // ================= ZOOM NA IMAGEM =================
        imagem.onload = () => {

            const zoomContainer = document.getElementById("zoomContainer");

            if (!zoomContainer) return;

            function aplicarZoom(x, y) {

                const rect = zoomContainer.getBoundingClientRect();

                const posX = (x - rect.left) / rect.width * 100;
                const posY = (y - rect.top) / rect.height * 100;

                imagem.style.transformOrigin = `${posX}% ${posY}%`;
                imagem.style.transform = "scale(2)";

            }

            function removerZoom() {

                imagem.style.transform = "scale(1)";
                imagem.style.transformOrigin = "center";

            }

            zoomContainer.addEventListener("mousemove", e => {

                aplicarZoom(e.clientX, e.clientY);

            });

            zoomContainer.addEventListener("mouseleave", removerZoom);

            zoomContainer.addEventListener("touchstart", e => {

                aplicarZoom(
                    e.touches[0].clientX,
                    e.touches[0].clientY
                );

            });

            zoomContainer.addEventListener("touchmove", e => {

                aplicarZoom(
                    e.touches[0].clientX,
                    e.touches[0].clientY
                );

            });

            zoomContainer.addEventListener("touchend", removerZoom);

        };


        const opcoes = document.getElementById("opcoesProduto");

        // ==============================
        // TAMANHOS E CORES
        // ==============================

        const variacoes = produto.variacoes || [];

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

        // ---------- TAMANHOS ----------

        if (tamanhos.length > 0) {

            opcoes.innerHTML += `

        <div class="opcao">

            <label>Tamanho</label>

            <select id="tamanho">

                ${tamanhos.map(t => `
                    <option value="${t}">
                        ${t}
                    </option>
                `).join("")}

            </select>

        </div>

    `;

        }

        // ---------- CORES ----------

        if (cores.length > 0) {

            opcoes.innerHTML += `

        <div class="opcao">

            <label>Cor</label>

            <select id="cor">

                ${cores.map(c => `
                    <option value="${c}">
                        ${c}
                    </option>
                `).join("")}

            </select>

        </div>

    `;

        }

        // BOTÃO
        document.getElementById("btnAdicionarCarrinho")
            .addEventListener("click", function (event) {

                const tamanho = document.getElementById("tamanho")?.value || null;
                const cor = document.getElementById("cor")?.value || null;

                // 🔥 animação correta
                if (typeof animarParaCarrinho === "function") {
                    animarParaCarrinho(
                        produto.imagem_principal,
                        event.currentTarget
                    );
                }

                // adiciona ao carrinho
                adicionarAoCarrinho({

                    id: produto.id,

                    nome: produto.nome,

                    preco: Number(produto.preco),

                    imagem: produto.imagem_principal,

                    tamanho,

                    cor

                });

            });

    }

    catch (erro) {

        console.error(erro);

        document.body.innerHTML =
            "<p>Erro ao carregar produto.</p>";

    }

});

