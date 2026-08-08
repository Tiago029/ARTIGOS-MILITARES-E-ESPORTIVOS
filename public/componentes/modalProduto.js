// ==========================================
// PRODUTO EM EDIÇÃO
// ==========================================

let produtoEditando = null;


// ==========================================
// ABRIR MODAL
// ==========================================

async function abrirModalProduto(produto = null) {

    const modal =
        document.getElementById("modalProduto");

    if (!modal) {

        console.error(
            "Modal de produto não encontrado."
        );

        return;

    }


    modal.classList.remove("hidden");

    produtoEditando = produto;


    const titulo =
        document.querySelector(
            ".modalHeader h2"
        );

    const botao =
        document.querySelector(
            ".btnSalvar"
        );


    // ======================================
    // NOVO PRODUTO
    // ======================================

    if (!produto) {

        titulo.textContent =
            "Novo Produto";

        botao.textContent =
            "Salvar Produto";


        document
            .getElementById("formProduto")
            .reset();


        limparVariacoes();


        document
            .getElementById("painelVariacoes")
            .classList.add("hidden");


        return;

    }


    // ======================================
    // EDITAR PRODUTO
    // ======================================

    titulo.textContent =
        "Editar Produto";

    botao.textContent =
        "Salvar Alterações";


    // ======================================
    // BUSCAR PRODUTO COMPLETO
    // ======================================

    if (!produto.variacoes) {

        try {

            const resposta =
                await fetch(
                    `/api/produtos/${produto.id}`
                );


            if (!resposta.ok) {

                throw new Error(
                    "Erro ao buscar produto."
                );

            }


            produto =
                await resposta.json();


            produtoEditando =
                produto;

        }

        catch (erro) {

            console.error(
                "Erro ao carregar produto:",
                erro
            );


            mostrarMensagem(
                "Não foi possível carregar o produto.",
                "erro"
            );


            fecharModalProduto();

            return;

        }

    }


    // ======================================
    // PREENCHER DADOS
    // ======================================

    document
        .getElementById("nomeProduto")
        .value =
        produto.nome || "";


    document
        .getElementById("descricaoProduto")
        .value =
        produto.descricao || "";


    document
        .getElementById("precoProduto")
        .value =
        produto.preco || "";


    document
        .getElementById("categoriaProduto")
        .value =
        produto.categoria_id || "";


    document
        .getElementById("ativoProduto")
        .checked =
        Number(produto.ativo) === 1;


    document
        .getElementById("destaqueProduto")
        .checked =
        Number(produto.destaque) === 1;


    document
        .getElementById("possuiVariacao")
        .checked =
        Number(produto.possui_variacao) === 1;


    // ======================================
    // VARIAÇÕES
    // ======================================

    limparVariacoes();


    if (
        Number(produto.possui_variacao) === 1
    ) {

        const painel =
            document.getElementById(
                "painelVariacoes"
            );


        painel.classList.remove(
            "hidden"
        );


        if (
            produto.variacoes &&
            produto.variacoes.length > 0
        ) {

            produto.variacoes.forEach(
                variacao => {

                    adicionarVariacaoNaTela(

                        variacao.tamanho || "",

                        variacao.cor || "",

                        Number(
                            variacao.estoque
                        ) || 0

                    );

                }
            );

        }

    }

    else {

        document
            .getElementById(
                "painelVariacoes"
            )
            .classList.add(
                "hidden"
            );

    }

}


// ==========================================
// FECHAR MODAL
// ==========================================

function fecharModalProduto() {

    const modal =
        document.getElementById(
            "modalProduto"
        );


    if (modal) {

        modal.classList.add(
            "hidden"
        );

    }

}


// ==========================================
// MENSAGEM
// ==========================================

function mostrarMensagem(
    texto,
    tipo = "sucesso"
) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        texto;


    toast.className =
        "toast " + tipo;


    requestAnimationFrame(() => {

        toast.classList.add(
            "mostrar"
        );

    });


    setTimeout(() => {

        toast.classList.remove(
            "mostrar"
        );

    }, 3000);

}


// ==========================================
// CARREGAR HTML DO MODAL
// ==========================================

async function carregarModalProduto() {

    if (
        document.getElementById(
            "modalProduto"
        )
    ) {

        return;

    }


    try {

        const resposta =
            await fetch(
                "/componentes/modalProduto.html"
            );


        if (!resposta.ok) {

            throw new Error(
                "Não encontrou modalProduto.html"
            );

        }


        const html =
            await resposta.text();


        // ==================================
        // CRIAR ESTRUTURA DO MODAL
        // ==================================

        document.body.insertAdjacentHTML(

            "beforeend",

            `

            <div
                id="modalProduto"
                class="modal hidden">

                ${html}

            </div>

            `

        );


        // ==================================
        // BOTÃO FECHAR
        // ==================================

        const fechar =
            document.getElementById(
                "fecharModal"
            );


        if (fechar) {

            fechar.addEventListener(
                "click",
                fecharModalProduto
            );

        }


        // ==================================
        // BOTÃO CANCELAR
        // ==================================

        const cancelar =
            document.getElementById(
                "cancelarProduto"
            );


        if (cancelar) {

            cancelar.addEventListener(
                "click",
                fecharModalProduto
            );

        }


        // ==================================
        // CLICAR FORA DO MODAL
        // ==================================

        const modal =
            document.getElementById(
                "modalProduto"
            );


        if (modal) {

            modal.addEventListener(
                "click",
                event => {

                    if (
                        event.target.id ===
                        "modalProduto"
                    ) {

                        fecharModalProduto();

                    }

                }
            );

        }


        // ==================================
        // INICIALIZAR
        // ==================================

        await inicializarModalProduto();


        console.log(
            "Modal de produto carregado!"
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar modal:",
            erro
        );

    }

}


// ==========================================
// FUNÇÕES GLOBAIS
// ==========================================

window.carregarModalProduto =
    carregarModalProduto;

window.abrirModalProduto =
    abrirModalProduto;

window.fecharModalProduto =
    fecharModalProduto;

window.mostrarMensagem =
    mostrarMensagem;


// ==========================================
// INICIALIZAR MODAL
// ==========================================

async function inicializarModalProduto() {

    await carregarCategorias();


    const formulario =
        document.getElementById(
            "formProduto"
        );


    if (!formulario) {

        console.error(
            "Formulário de produto não encontrado."
        );

        return;

    }


    formulario.addEventListener(
        "submit",
        salvarProduto
    );


    // ======================================
    // CHECKBOX DE VARIAÇÃO
    // ======================================

    const checkbox =
        document.getElementById(
            "possuiVariacao"
        );


    if (checkbox) {

        checkbox.addEventListener(
            "change",
            controlarPainelVariacoes
        );

    }


    // ======================================
    // BOTÃO ADICIONAR VARIAÇÃO
    // ======================================

    const botaoVariacao =
        document.getElementById(
            "btnAdicionarVariacao"
        );


    if (botaoVariacao) {

        botaoVariacao.addEventListener(
            "click",
            adicionarVariacao
        );

    }


    console.log(
        "Modal de produto inicializado."
    );

}


// ==========================================
// CONTROLAR PAINEL DE VARIAÇÕES
// ==========================================

function controlarPainelVariacoes() {

    const checkbox =
        document.getElementById(
            "possuiVariacao"
        );


    const painel =
        document.getElementById(
            "painelVariacoes"
        );


    if (!checkbox || !painel) {

        return;

    }


    if (checkbox.checked) {

        painel.classList.remove(
            "hidden"
        );

    }

    else {

        painel.classList.add(
            "hidden"
        );

        limparVariacoes();

    }

}


// ==========================================
// CARREGAR CATEGORIAS
// ==========================================

async function carregarCategorias() {

    try {

        const resposta =
            await fetch(
                "/api/categorias"
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro ao buscar categorias."
            );

        }


        const categorias =
            await resposta.json();


        const select =
            document.getElementById(
                "categoriaProduto"
            );


        if (!select) {

            return;

        }


        select.innerHTML = `

            <option value="">
                Selecione uma categoria
            </option>

        `;


        categorias.forEach(
            categoria => {

                select.innerHTML += `

                    <option
                        value="${categoria.id}">

                        ${categoria.nome}

                    </option>

                `;

            }
        );

    }

    catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );

    }

}


// ==========================================
// ADICIONAR VARIAÇÃO
// ==========================================

function adicionarVariacao() {

    const tamanho =
        document
            .getElementById(
                "novoTamanho"
            )
            .value
            .trim();


    const cor =
        document
            .getElementById(
                "novaCor"
            )
            .value
            .trim();


    const estoque =
        Number(
            document
                .getElementById(
                    "novoEstoque"
                )
                .value
        ) || 0;


    // ======================================
    // VALIDAR
    // ======================================

    if (!tamanho && !cor) {

        mostrarMensagem(
            "Informe um tamanho ou uma cor.",
            "erro"
        );

        return;

    }


    // ======================================
    // ADICIONAR NA LISTA
    // ======================================

    adicionarVariacaoNaTela(
        tamanho,
        cor,
        estoque
    );


    // ======================================
    // LIMPAR CAMPOS
    // ======================================

    document
        .getElementById(
            "novoTamanho"
        )
        .value = "";


    document
        .getElementById(
            "novaCor"
        )
        .value = "";


    document
        .getElementById(
            "novoEstoque"
        )
        .value = 0;

}


// ==========================================
// ADICIONAR VARIAÇÃO NA TELA
// ==========================================

function adicionarVariacaoNaTela(
    tamanho,
    cor,
    estoque
) {

    const lista =
        document.getElementById(
            "listaVariacoes"
        );


    if (!lista) {

        return;

    }


    const item =
        document.createElement(
            "div"
        );


    item.className =
        "item-variacao";


    item.innerHTML = `

        <span>
            <strong>Tamanho:</strong>
            ${tamanho || "Sem tamanho"}
        </span>

        <span>
            <strong>Cor:</strong>
            ${cor || "Sem cor"}
        </span>

        <span>
            <strong>Estoque:</strong>
            ${estoque}
        </span>

        <button
            type="button"
            class="btn-remover-variacao">

            🗑

        </button>

    `;


    // ======================================
    // GUARDAR DADOS
    // ======================================

    item.dataset.tamanho =
        tamanho || "";


    item.dataset.cor =
        cor || "";


    item.dataset.estoque =
        estoque;


    // ======================================
    // REMOVER
    // ======================================

    const botaoRemover =
        item.querySelector(
            ".btn-remover-variacao"
        );


    botaoRemover.addEventListener(
        "click",
        () => {

            item.remove();

        }
    );


    lista.appendChild(
        item
    );

}


// ==========================================
// OBTER VARIAÇÕES
// ==========================================

function obterVariacoesDaTela() {

    const itens =
        document.querySelectorAll(
            ".item-variacao"
        );


    const variacoes = [];


    itens.forEach(
        item => {

            variacoes.push({

                tamanho:
                    item.dataset.tamanho ||
                    null,

                cor:
                    item.dataset.cor ||
                    null,

                estoque:
                    Number(
                        item.dataset.estoque
                    ) || 0

            });

        }
    );


    return variacoes;

}


// ==========================================
// LIMPAR VARIAÇÕES
// ==========================================

function limparVariacoes() {

    const lista =
        document.getElementById(
            "listaVariacoes"
        );


    if (lista) {

        lista.innerHTML = "";

    }


    const tamanho =
        document.getElementById(
            "novoTamanho"
        );


    if (tamanho) {

        tamanho.value = "";

    }


    const cor =
        document.getElementById(
            "novaCor"
        );


    if (cor) {

        cor.value = "";

    }


    const estoque =
        document.getElementById(
            "novoEstoque"
        );


    if (estoque) {

        estoque.value = 0;

    }

}


// ==========================================
// SALVAR PRODUTO
// ==========================================

async function salvarProduto(event) {

    event.preventDefault();


    const botaoSalvar =
        document.querySelector(
            ".btnSalvar"
        );


    if (!botaoSalvar) {

        return;

    }


    botaoSalvar.disabled = true;

    botaoSalvar.textContent =
        "Salvando...";

    botaoSalvar.classList.add(
        "carregando"
    );


    const possuiVariacao =
        document
            .getElementById(
                "possuiVariacao"
            )
            .checked;


    const variacoes =
        possuiVariacao
            ? obterVariacoesDaTela()
            : [];


    // ======================================
    // FORM DATA
    // ======================================

    const formData =
        new FormData();


    formData.append(
        "nome",
        document
            .getElementById(
                "nomeProduto"
            )
            .value
    );


    formData.append(
        "categoria_id",
        document
            .getElementById(
                "categoriaProduto"
            )
            .value
    );


    formData.append(
        "preco",
        document
            .getElementById(
                "precoProduto"
            )
            .value
    );


    formData.append(
        "descricao",
        document
            .getElementById(
                "descricaoProduto"
            )
            .value
    );


    formData.append(
        "ativo",
        document
            .getElementById(
                "ativoProduto"
            )
            .checked
                ? 1
                : 0
    );


    formData.append(
        "destaque",
        document
            .getElementById(
                "destaqueProduto"
            )
            .checked
                ? 1
                : 0
    );


    formData.append(
        "possui_variacao",
        possuiVariacao
            ? 1
            : 0
    );


    formData.append(
        "variacoes",
        JSON.stringify(
            variacoes
        )
    );


    // ======================================
    // IMAGEM
    // ======================================

    const imagem =
        document
            .getElementById(
                "imagemProduto"
            )
            .files[0];


    if (imagem) {

        formData.append(
            "imagem",
            imagem
        );

    }


    try {

        let resposta;


        // ==================================
        // EDITAR
        // ==================================

        if (produtoEditando) {

            resposta =
                await fetch(

                    `/api/produtos/${produtoEditando.id}`,

                    {

                        method: "PUT",

                        body: formData

                    }

                );

        }


        // ==================================
        // NOVO
        // ==================================

        else {

            resposta =
                await fetch(

                    "/api/produtos",

                    {

                        method: "POST",

                        body: formData

                    }

                );

        }


        const dados =
            await resposta.json();


        // ==================================
        // ERRO
        // ==================================

        if (!resposta.ok) {

            mostrarMensagem(

                dados.erro ||
                "Erro ao salvar produto.",

                "erro"

            );


            restaurarBotaoSalvar();

            return;

        }


        // ==================================
        // SUCESSO
        // ==================================

        const editando =
            Boolean(
                produtoEditando
            );


        mostrarMensagem(

            editando
                ? "Produto atualizado com sucesso!"
                : "Produto cadastrado com sucesso!",

            "sucesso"

        );


        fecharModalProduto();


        produtoEditando =
            null;


        document
            .getElementById(
                "formProduto"
            )
            .reset();


        limparVariacoes();


        restaurarBotaoSalvar();


        // ==================================
        // ATUALIZAR PRODUTOS
        // ==================================

        if (
            typeof carregarProdutos ===
            "function"
        ) {

            carregarProdutos();

        }


        if (
            typeof carregarResumoDashboard ===
            "function"
        ) {

            carregarResumoDashboard();

        }

    }

    catch (erro) {

        console.error(
            "Erro ao salvar produto:",
            erro
        );


        mostrarMensagem(

            produtoEditando
                ? "Erro ao atualizar produto."
                : "Erro ao cadastrar produto.",

            "erro"

        );


        restaurarBotaoSalvar();

    }

}


// ==========================================
// RESTAURAR BOTÃO
// ==========================================

function restaurarBotaoSalvar() {

    const botaoSalvar =
        document.querySelector(
            ".btnSalvar"
        );


    if (!botaoSalvar) {

        return;

    }


    botaoSalvar.disabled =
        false;


    botaoSalvar.textContent =

        produtoEditando
            ? "Salvar Alterações"
            : "Salvar Produto";


    botaoSalvar.classList.remove(
        "carregando"
    );

}