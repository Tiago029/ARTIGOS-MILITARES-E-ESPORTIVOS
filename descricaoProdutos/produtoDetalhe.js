document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const produto = PRODUTOS.find(p => p.id === id);

    if (!produto) {
        document.body.innerHTML = "<p>Produto não encontrado.</p>";
        return;
    }

    // ELEMENTOS
    document.getElementById("imagemProduto").src = "../" + produto.imagem;
    document.getElementById("nomeProduto").textContent = produto.nome;
    document.getElementById("precoProduto").textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById("descricaoProduto").textContent = produto.descricao || "";

    const opcoes = document.getElementById("opcoesProduto");

    // TAMANHO
    if (produto.tamanho?.length) {
        opcoes.innerHTML += `
            <div class="opcao">
                <label>Tamanho:</label>
                <select id="tamanho">
                    ${produto.tamanho.map(t => `<option>${t}</option>`).join("")}
                </select>
            </div>
        `;
    }

    // COR
    if (produto.cor?.length) {
        opcoes.innerHTML += `
            <div class="opcao">
                <label>Cor:</label>
                <select id="cor">
                    ${produto.cor.map(c => `<option>${c}</option>`).join("")}
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
        animarParaCarrinho(produto.imagem, event.currentTarget);
    }

    // adiciona ao carrinho
    adicionarAoCarrinho({
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        tamanho: tamanho,
        cor: cor
    });

});

});

// ================= ZOOM NA IMAGEM =================

const zoomContainer = document.getElementById("zoomContainer");
const imagem = document.getElementById("imagemProduto");

if (zoomContainer && imagem) {

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

    // ===== MOUSE (PC) =====
    zoomContainer.addEventListener("mousemove", (e) => {
        aplicarZoom(e.clientX, e.clientY);
    });

    zoomContainer.addEventListener("mouseleave", removerZoom);

    // ===== TOQUE (CELULAR) =====
    zoomContainer.addEventListener("touchstart", (e) => {
        const touch = e.touches[0];
        aplicarZoom(touch.clientX, touch.clientY);
    });

    zoomContainer.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        aplicarZoom(touch.clientX, touch.clientY);
    });

    zoomContainer.addEventListener("touchend", removerZoom);

}
