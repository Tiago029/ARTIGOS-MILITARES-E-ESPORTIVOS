let imagens = document.querySelectorAll(".banner1 img");
let index = 0;
let intervalo;

function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove("ativo"));
    imagens[i].classList.add("ativo");
}

function iniciarAutoSlide() {
    intervalo = setInterval(() => {
        index = (index + 1) % imagens.length;
        mostrarImagem(index);
    }, 3000);
}

// setinha direita
document.querySelector(".seta.direita").addEventListener("click", () => {
    clearInterval(intervalo);
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
    iniciarAutoSlide();
});

// setinha esquerda
document.querySelector(".seta.esquerda").addEventListener("click", () => {
    clearInterval(intervalo);
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
    iniciarAutoSlide();
});

// inicia automaticamente
iniciarAutoSlide();
