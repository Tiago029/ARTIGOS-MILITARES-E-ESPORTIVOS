const botaoLogin = document.querySelector(".LOGIN button");
const modal = document.getElementById("modalLogin");
const fechar = document.getElementById("fecharLogin");

botaoLogin.addEventListener("click", () => {
    modal.style.display = "flex";
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});
