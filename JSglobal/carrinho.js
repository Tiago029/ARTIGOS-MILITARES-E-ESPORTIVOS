// ==========================
// UTIL
// ==========================
function obterCarrinho() {
    let dado = localStorage.getItem("carrinho");
    if (!dado) return [];

    try {
        let carrinho = JSON.parse(dado);
        carrinho = carrinho.map(p => ({
            nome: p.nome,
            imagem: p.imagem,
            preco: Number(p.preco) || 0,
            quantidade: Number(p.quantidade) || 1,
            tamanho: p.tamanho || null,
            cor: p.cor || null
        }));
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        return carrinho;
    } catch (e) {
        localStorage.removeItem("carrinho");
        return [];
    }
}

// ==========================
// ADICIONAR AO CARRINHO
// ==========================
function adicionarAoCarrinho(produto) {
    let carrinho = obterCarrinho();

    produto.preco = Number(produto.preco);
    produto.quantidade = 1;

    const existente = carrinho.find(p =>
        p.nome === produto.nome &&
        p.tamanho === produto.tamanho &&
        p.cor === produto.cor
    );

    if (existente) {
        existente.quantidade += 1;
    } else {
        carrinho.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
    carregarCarrinho(); // atualiza a tela
}

// ==========================
// CONTADOR DO ÍCONE
// ==========================
function atualizarContadorCarrinho() {
    const carrinho = obterCarrinho();
    const contador = document.querySelector(".contador-carrinho");
    if (!contador) return;

    const total = carrinho.reduce((soma, p) => soma + p.quantidade, 0);
    contador.textContent = total;
}

// ==========================
// CARREGAR CARRINHO.HTML
// ==========================
function carregarCarrinho() {
    const carrinho = obterCarrinho();
    const lista = document.getElementById("lista-carrinho");
    const totalEl = document.getElementById("total");
    if (!lista || !totalEl) return;

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((produto, index) => {
        const subtotal = produto.preco * produto.quantidade;
        total += subtotal;

        lista.innerHTML += `
            <div class="item-carrinho">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <div class="info">
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    ${produto.tamanho ? `<p>Tamanho: ${produto.tamanho}</p>` : ""}
                    ${produto.cor ? `<p>Cor: ${produto.cor}</p>` : ""}

                    <div class="quantidade">
                        <button class="btn-qtd" data-index="${index}" data-delta="-1">−</button>
                        <span>${produto.quantidade}</span>
                        <button class="btn-qtd" data-index="${index}" data-delta="1">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
    gerarLinkWhatsApp(carrinho, total);

    // adiciona event listener para os botões de quantidade
    const botoes = document.querySelectorAll(".btn-qtd");
    botoes.forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = Number(btn.dataset.index);
            const delta = Number(btn.dataset.delta);

            const produto = carrinho[idx];
            if (!produto) return;

            produto.quantidade += delta;

            if (produto.quantidade <= 0) {
                carrinho.splice(idx, 1);
            }

            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarContadorCarrinho();
            carregarCarrinho();
        });
    });
}

// ==========================
// LINK WHATSAPP
// ==========================
function gerarLinkWhatsApp(carrinho, total) {
    const btn = document.getElementById("btn-whatsapp");
    if (!btn) return;

    let msg = " *Pedido da Loja*%0A%0A";
    carrinho.forEach(p => {
        let desc = p.nome;
        if (p.tamanho) desc += ` - Tamanho: ${p.tamanho}`;
        if (p.cor) desc += ` - Cor: ${p.cor}`;
        msg += `• ${desc} - ${p.quantidade}x - R$ ${(p.preco * p.quantidade).toFixed(2)}%0A`;
    });
    msg += `%0A *Total:* R$ ${total.toFixed(2)}`;

    const telefone = "5597984296744"; // troque pelo seu número
    btn.href = `https://wa.me/${telefone}?text=${msg}`;
}

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    atualizarContadorCarrinho();
    carregarCarrinho();
});
