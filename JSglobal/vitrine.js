document.addEventListener("DOMContentLoaded", () => {
    const grade = document.querySelector(".grade-produtos");
    if (!grade) return;

    const categoriaPagina = document.body.dataset.categoria;

    let produtosFiltrados = PRODUTOS;
    if (categoriaPagina) {
        produtosFiltrados = PRODUTOS.filter(produto =>
            produto.categoria === categoriaPagina
        );
    }

    grade.innerHTML = "";

    produtosFiltrados.forEach(produto => {
        const card = document.createElement("div");
        card.className = "card-produto";

        // SELECT DE TAMANHOS
        const selectTamanho = produto.tamanho && produto.tamanho.length > 0
            ? `<label for="tamanho-${produto.id}">Tamanho:</label>
               <select id="tamanho-${produto.id}">
                   ${produto.tamanho.map(t => `<option value="${t}">${t}</option>`).join("")}
               </select>`
            : "";

        // SELECT DE COR
        const selectCor = produto.cor && produto.cor.length > 0
            ? `<label for="cor-${produto.id}">Cor:</label>
               <select id="cor-${produto.id}">
                   ${produto.cor.map(c => `<option value="${c}">${c}</option>`).join("")}
               </select>`
            : "";

        // MONTA O CARD
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            ${selectTamanho}
            ${selectCor}
            <button onclick="
                const selectT = document.getElementById('tamanho-${produto.id}');
                const selectC = document.getElementById('cor-${produto.id}');
                const tamanhoSelecionado = selectT ? selectT.value : null;
                const corSelecionada = selectC ? selectC.value : null;

                animarParaCarrinho('${produto.imagem}');
                adicionarAoCarrinho({
                    nome: '${produto.nome}',
                    preco: ${produto.preco},
                    imagem: '${produto.imagem}',
                    tamanho: tamanhoSelecionado,
                    cor: corSelecionada
                });
            ">Adicionar ao carrinho</button>
        `;

        grade.appendChild(card);
    });

    if (produtosFiltrados.length === 0) {
        grade.innerHTML = "<p>Nenhum produto encontrado.</p>";
    }
});

// ==========================
// ANIMAÇÃO DO PRODUTO PARA O CARRINHO
// ==========================
function animarParaCarrinho(imagemSrc) {
    const img = document.createElement("img");
    img.src = imagemSrc;
    img.className = "animar-carrinho";

    const rect = event.target.getBoundingClientRect();
    img.style.left = rect.left + "px";
    img.style.top = rect.top + "px";

    document.body.appendChild(img);

    const carrinho = document.querySelector(".carrinho img");
    const carrinhoRect = carrinho.getBoundingClientRect();

    img.getBoundingClientRect();

    img.style.transform = `translate(${carrinhoRect.left - rect.left}px, ${carrinhoRect.top - rect.top}px) scale(0.1)`;
    img.style.opacity = 0;

    setTimeout(() => {
        img.remove();
    }, 800);
}

// ==========================
// MODIFICAÇÃO: ADICIONAR AO CARRINHO
// ==========================
// (substitua a função existente no seu carrinho.js)
function adicionarAoCarrinho(produto) {
    let carrinho = obterCarrinho();

    produto.preco = Number(produto.preco);
    produto.quantidade = 1;

    // agora verifica nome + tamanho + cor
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
}
