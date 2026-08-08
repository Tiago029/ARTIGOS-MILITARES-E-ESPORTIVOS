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
            tamanho: p.tamanho || "",
            cor: p.cor || "",
            time: p.time || ""

        }));

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        return carrinho;

    } catch (e) {

        localStorage.removeItem("carrinho");
        return [];

    }
}

// ==========================
// GERAR CHAVE DO ITEM
// ==========================
function gerarChaveItem(produto){

    return [
        produto.nome,
        produto.tamanho || "",
        produto.cor || "",
        produto.time || ""
    ].join("-");

}

// ==========================
// ADICIONAR AO CARRINHO
// ==========================
function adicionarAoCarrinho(produto) {

    let carrinho = obterCarrinho();

    produto.preco = Number(produto.preco);
    produto.quantidade = 1;

    produto.tamanho = produto.tamanho || "";
    produto.cor = produto.cor || "";
    produto.time = produto.time || "";

    const chave = gerarChaveItem(produto);

    const existente = carrinho.find(p => gerarChaveItem(p) === chave);

    if (existente) {

        existente.quantidade += 1;

    } else {

        carrinho.push(produto);

    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContadorCarrinho();

    
    if (document.getElementById("lista-carrinho")) {
        carregarCarrinho();
    }

}

// ==========================
// CONTADOR DO ÍCONE
// ==========================
function atualizarContadorCarrinho() {

    const carrinho = obterCarrinho();

    const contadores = document.querySelectorAll(".contador-carrinho");

    const total = carrinho.reduce((soma, p) => soma + p.quantidade, 0);

    contadores.forEach(contador => {

        contador.textContent = total;

    });

}

// ==========================
// CARREGAR CARRINHO
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
                    ${produto.time ? `<p>Time: ${produto.time}</p>` : ""}

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

    let msg = "*Pedido da Loja*%0A%0A";

    carrinho.forEach(p => {

        let desc = p.nome;

        if (p.tamanho) desc += ` - Tamanho: ${p.tamanho}`;
        if (p.cor) desc += ` - Cor: ${p.cor}`;
        if (p.time) desc += ` - Time: ${p.time}`;

        msg += `• ${desc} - ${p.quantidade}x - R$ ${(p.preco * p.quantidade).toFixed(2)}%0A`;

    });

    msg += `%0A*Total:* R$ ${total.toFixed(2)}`;

    const telefone = "5597984258133";

    
    btn.href = `https://wa.me/${telefone}?text=${msg}`;

    btn.onclick = null; // limpa clique antigo

    btn.addEventListener("click", () => {

    let listaProdutos = "";
    let totalItens = 0;

    carrinho.forEach(p => {

        listaProdutos += `${p.nome} (${p.quantidade}x) - R$ ${(p.preco * p.quantidade).toFixed(2)}\n`;

        totalItens += p.quantidade;

    });

    const dados = new FormData();

    dados.append("entry.1725565858", listaProdutos);      // PRODUTOS
    dados.append("entry.57545570", total.toFixed(2));     // TOTAL
    dados.append("entry.1435584134", totalItens);         // QUANTIDADE
    dados.append("entry.14341212", "Pedido vindo do site"); // Campo antigo

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfAQeW71fjNQSXiL_72zvhtS_17mh2ecd8rLNAwYIjtBw6LVQ/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: dados
    });

});

}

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    atualizarContadorCarrinho();
    carregarCarrinho();

});

// ==========================
// CARRINHO FLUTUANTE
// ==========================
document.addEventListener("scroll", () => {

    const flutuante = document.querySelector(".carrinho-flutuante");
    const header = document.querySelector("header");

    if (!flutuante || !header) return;

    const headerBottom = header.getBoundingClientRect().bottom;


    if (headerBottom < 0) {

        flutuante.style.display = "flex";

    } else {

        flutuante.style.display = "none";

    }

});

// ==========================
// ANIMAÇÃO PARA CARRINHO
// ==========================
function animarParaCarrinho(imagemSrc, elementoOrigem) {

    const img = document.createElement("img");

    img.src = imagemSrc;

    img.className = "animar-carrinho";

    const rect = elementoOrigem.getBoundingClientRect();

    img.style.left = rect.left + "px";
    img.style.top = rect.top + "px";

    document.body.appendChild(img);


    let carrinhoIcon = document.querySelector(".carrinho-flutuante");

    if (!carrinhoIcon || carrinhoIcon.style.display === "none") {

        carrinhoIcon = document.querySelector(".carrinho");

    }

    if (!carrinhoIcon) return;

    const destino = carrinhoIcon.getBoundingClientRect();

    requestAnimationFrame(() => {

        img.style.transform = `translate(${destino.left - rect.left}px, ${destino.top - rect.top}px) scale(0.2)`;
        img.style.opacity = "0";

    });

    setTimeout(() => img.remove(), 800);

}