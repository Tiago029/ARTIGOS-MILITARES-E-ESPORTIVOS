document.addEventListener("DOMContentLoaded", async () => {

    await carregarModalProduto();

    await carregarModalExcluir();

    await carregarResumoDashboard();

});

// =====================================
// CARREGAR RESUMO DO DASHBOARD
// =====================================
async function carregarResumoDashboard() {

    try {

        const resposta = await fetch("/api/dashboard/resumo");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar resumo.");
        }

        const dados = await resposta.json();

        document.getElementById("totalProdutos").textContent = dados.produtos;
        document.getElementById("totalCategorias").textContent = dados.categorias;
        document.getElementById("totalPedidos").textContent = dados.pedidos;
        document.getElementById("totalClientes").textContent = dados.clientes;

    } catch (erro) {

        console.error("Erro:", erro);

    }

}

// =====================================
// MENU LATERAL
// =====================================

const menus = document.querySelectorAll(".sidebar li");

menus.forEach(menu => {

    menu.addEventListener("click", () => {

        menus.forEach(item => item.classList.remove("ativo"));

        menu.classList.add("ativo");

        switch (menu.id) {

            case "menuProdutos":
                carregarProdutos();
                break;

        }

    });

});

// =====================================
// BOTÃO SAIR
// =====================================

const btnSair = document.getElementById("btnSair");

btnSair.addEventListener("click", () => {

    if (confirm("Deseja realmente sair do painel administrativo?")) {

        window.location.href = "/";

    }

});

// =====================================
// CARREGAR PRODUTOS
// =====================================
async function carregarProdutos() {

    try {

        const resposta = await fetch("/api/produtos");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar produtos.");
        }

        const produtos = await resposta.json();

        const conteudo = document.getElementById("conteudoPrincipal");

        conteudo.innerHTML = `
            <div class="paginaProdutos">

                
            <div class="cabecalhoProdutos">

                <div>

                    <h2>Produtos Cadastrados</h2>

                    <small id="totalListaProdutos">
                        ${produtos.length} produtos cadastrados
                    </small>

                </div>

                <div class="acoesProdutos">

                    <input
                        type="text"
                        id="buscarProduto"
                        placeholder="Pesquisar produto..."
                    >

                    <select id="filtroCategoria">

                        <option value="">
                            Todas as categorias
                        </option>

                    </select>

                    <button id="novoProduto">
                        + Novo Produto
                    </button>
                </div> <!-- FECHA acoesProdutos -->    

            </div>
                <div class="listaProdutos">

                    <table class="tabelaProdutos">

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Imagem</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                                <th>Ações</th>

                            </tr>

                        </thead>

                        <tbody>

                            ${produtos.map(produto => `

                                <tr>

                                    <td>${produto.id}</td>

                                    <td>

                                        <img
                                            src="${produto.imagem_principal}"
                                            width="60">

                                    </td>

                                    <td>${produto.nome}</td>

                                    <td>
                                        R$ ${Number(produto.preco).toFixed(2)}
                                    </td>

                                    <td>${produto.categoria_nome || "-"}</td>

                                    <td>

                                        <button class="editar"
                                            data-id="${produto.id}">
                                            Editar
                                        </button>

                                        <button class="excluir"
                                            data-id="${produto.id}">
                                            Excluir
                                        </button>

                                    </td>

                                </tr>

                            `).join("")}

                        </tbody>

                    </table>

                </div>

            </div>
        `;

        // Botões editar
        document.querySelectorAll(".editar").forEach(botao => {

            botao.addEventListener("click", async () => {

                const id = botao.dataset.id;

                try {

                    const resposta = await fetch(`/api/produtos/${id}`);

                    if (!resposta.ok) {
                        throw new Error("Erro ao buscar produto");
                    }

                    const produto = await resposta.json();

                    abrirModalProduto(produto);

                } catch (erro) {

                    console.error("Erro ao carregar produto:", erro);

                }

            });

        });

        // Botões excluir
        document.querySelectorAll(".excluir").forEach(botao => {

            botao.addEventListener("click", () => {

                const id = botao.dataset.id;

                const nome = botao
                    .closest("tr")
                    .children[2]
                    .textContent;

                abrirModalExcluir(id, nome);

            });

        });


        // Carrega categorias no filtro
        await preencherFiltroCategorias();

        // Ativa pesquisa
        document
            .getElementById("buscarProduto")
            .addEventListener("input", filtrarProdutos);

        // Ativa filtro
        document
            .getElementById("filtroCategoria")
            .addEventListener("change", filtrarProdutos);

        // Botão novo produto
        document
            .getElementById("novoProduto")
            .addEventListener("click", () => {

                abrirModalProduto();

            });


        async function preencherFiltroCategorias() {

            const resposta = await fetch("/api/categorias");

            const categorias = await resposta.json();

            const select = document.getElementById("filtroCategoria");

            categorias.forEach(cat => {

                select.innerHTML += `
            <option value="${cat.nome}">
                ${cat.nome}
            </option>
        `;

            });

        }

        function filtrarProdutos() {

            const texto = document
                .getElementById("buscarProduto")
                .value
                .toLowerCase();

            const categoria = document
                .getElementById("filtroCategoria")
                .value;

            const linhas = document.querySelectorAll(".tabelaProdutos tbody tr");

            let total = 0;

            linhas.forEach(linha => {

                const nome = linha.children[2].textContent.toLowerCase();

                const categoriaLinha = linha.children[4].textContent;

                const mostrar =
                    nome.includes(texto) &&
                    (categoria === "" || categoriaLinha === categoria);

                linha.style.display = mostrar ? "" : "none";

                if (mostrar) total++;

            });

            document.getElementById("totalListaProdutos").textContent =
                `${total} produtos encontrados`;

        }

    } catch (erro) {

        console.error(erro);

    }

}