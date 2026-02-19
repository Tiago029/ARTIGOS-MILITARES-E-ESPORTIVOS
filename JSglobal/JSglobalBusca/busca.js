// buscar.js
const inputBusca = document.querySelector('#pesquisarProduto');
const containerProdutos = document.querySelector('.grade-produtos');

function mostrarProdutos(lista) {
    containerProdutos.innerHTML = '';

    if (lista.length === 0) {
        containerProdutos.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }

    lista.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card-produto'; // mesma classe do CSS da vitrine

        // Usa o caminho do produto exatamente como definido no produtos.js
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho({
                nome: '${produto.nome}',
                preco: ${produto.preco},
                imagem: '${produto.imagem}'
            })">
                Adicionar ao carrinho
            </button>
        `;

        containerProdutos.appendChild(card);
    });
}

// Função de busca em tempo real
function buscarProduto() {
    const termo = inputBusca.value.trim().toLowerCase();

    // Se quiser respeitar categoria da página, pode descomentar abaixo:
    // const categoriaPagina = document.body.dataset.categoria;
    // let produtosFiltrados = PRODUTOS.filter(p => 
    //     (p.nome.toLowerCase().includes(termo) || p.categoria.toLowerCase().includes(termo)) &&
    //     (!categoriaPagina || p.categoria === categoriaPagina)
    // );

    // Busca em todos os produtos do site
    const produtosFiltrados = PRODUTOS.filter(p =>
        p.nome.toLowerCase().includes(termo) ||
        (p.categoria && p.categoria.toLowerCase().includes(termo))
    );

    mostrarProdutos(produtosFiltrados);
}

// Evento para busca em tempo real
inputBusca.addEventListener('input', buscarProduto);

// Mostra todos os produtos inicialmente
mostrarProdutos(PRODUTOS);
