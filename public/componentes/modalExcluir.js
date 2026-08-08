let idProdutoExcluir = null;

async function carregarModalExcluir(){

    if(document.getElementById("modalExcluir")) return;

    const resposta = await fetch("/componentes/modalExcluir.html");

    const html = await resposta.text();

    document.body.insertAdjacentHTML("beforeend", html);

    document
        .getElementById("cancelarExcluir")
        .addEventListener("click", fecharModalExcluir);

    document
        .getElementById("modalExcluir")
        .addEventListener("click",(e)=>{

            if(e.target.id=="modalExcluir"){

                fecharModalExcluir();

            }

        });

    document
        .getElementById("confirmarExcluir")
        .addEventListener("click", excluirProduto);

}

function abrirModalExcluir(id,nome){

    idProdutoExcluir=id;

    document
        .getElementById("nomeProdutoExcluir")
        .textContent=nome;

    document
        .getElementById("modalExcluir")
        .classList.remove("hidden");

}

function fecharModalExcluir(){

    document
        .getElementById("modalExcluir")
        .classList.add("hidden");

}

// ==========================================
// EXCLUIR PRODUTO
// ==========================================

async function excluirProduto() {

    if (!idProdutoExcluir) return;

    try {

        const resposta = await fetch(`/api/produtos/${idProdutoExcluir}`, {

            method: "DELETE"

        });

        const dados = await resposta.json();

        if (!resposta.ok) {

            mostrarMensagem(dados.erro, "erro");
            return;

        }

        mostrarMensagem("Produto excluído com sucesso!", "sucesso");

        fecharModalExcluir();

        idProdutoExcluir = null;

        carregarProdutos();

        carregarResumoDashboard();

    } catch (erro) {

        console.error(erro);

        mostrarMensagem(
            "Erro ao excluir produto.",
            "erro"
        );

    }

}