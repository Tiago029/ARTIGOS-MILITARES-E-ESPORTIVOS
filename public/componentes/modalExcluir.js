let idProdutoExcluir = null;

// ==========================================
// CARREGAR MODAL DE EXCLUSÃO
// ==========================================

async function carregarModalExcluir() {

    if (document.getElementById("modalExcluir")) {
        return;
    }

    try {

        const resposta = await fetch("/componentes/modalExcluir.html");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar modal de exclusão.");
        }

        const html = await resposta.text();

        document.body.insertAdjacentHTML("beforeend", html);

        // Botão cancelar
        document
            .getElementById("cancelarExcluir")
            .addEventListener(
                "click",
                fecharModalExcluir
            );

        // Fechar clicando fora do modal
        document
            .getElementById("modalExcluir")
            .addEventListener("click", (e) => {

                if (e.target.id === "modalExcluir") {

                    fecharModalExcluir();

                }

            });

        // Botão confirmar
        document
            .getElementById("confirmarExcluir")
            .addEventListener(
                "click",
                excluirProduto
            );

        console.log("Modal de exclusão carregado!");

    } catch (erro) {

        console.error(
            "Erro ao carregar modal de exclusão:",
            erro
        );

    }

}


// ==========================================
// ABRIR MODAL
// ==========================================

function abrirModalExcluir(id, nome) {

    idProdutoExcluir = id;

    document
        .getElementById("nomeProdutoExcluir")
        .textContent = nome;

    document
        .getElementById("modalExcluir")
        .classList.remove("hidden");

}


// ==========================================
// FECHAR MODAL
// ==========================================

function fecharModalExcluir() {

    document
        .getElementById("modalExcluir")
        .classList.add("hidden");

}


// ==========================================
// EXCLUIR PRODUTO
// ==========================================

async function excluirProduto() {

    if (!idProdutoExcluir) {
        return;
    }

    try {

        console.log(
            "Excluindo produto:",
            idProdutoExcluir
        );

        const resposta = await fetch(
            `${API_URL}/api/produtos/${idProdutoExcluir}`,
            {
                method: "DELETE"
            }
        );

        const texto = await resposta.text();

        let dados;

        try {

            dados = JSON.parse(texto);

        } catch (erro) {

            console.error(
                "Resposta da API não é JSON:",
                texto
            );

            mostrarMensagem(
                "Erro no servidor ao excluir produto.",
                "erro"
            );

            return;
        }

        if (!resposta.ok) {

            console.error(
                "Erro ao excluir:",
                dados
            );

            mostrarMensagem(
                dados.erro || "Erro ao excluir produto.",
                "erro"
            );

            return;
        }

        console.log(
            "Produto excluído:",
            dados
        );

        mostrarMensagem(
            "Produto excluído com sucesso!",
            "sucesso"
        );

        fecharModalExcluir();

        idProdutoExcluir = null;

        // Atualiza a lista de produtos
        await carregarProdutos();

        // Atualiza os números do dashboard
        await carregarResumoDashboard();

    } catch (erro) {

        console.error(
            "Erro ao excluir produto:",
            erro
        );

        mostrarMensagem(
            "Erro ao excluir produto.",
            "erro"
        );

    }

}