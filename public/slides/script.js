function pegarSlidesVisiveis(){
    return Array.from(document.querySelectorAll(".slide"))
        .filter(img => window.getComputedStyle(img).display !== "none");
}

let imagens = pegarSlidesVisiveis();
let index = 0;
let intervalo;

function mostrarImagem(i){
    imagens.forEach(img => img.classList.remove("ativo"));
    if(imagens[i]) imagens[i].classList.add("ativo");
}

function iniciarAutoSlide(){
    intervalo = setInterval(() => {
        imagens = pegarSlidesVisiveis(); // atualiza slides visíveis
        index = (index + 1) % imagens.length;
        mostrarImagem(index);
    }, 3000);
}

// seta direita
document.querySelector(".seta.direita").addEventListener("click", () => {
    clearInterval(intervalo);
    index = (index + 1) % imagens.length;
    mostrarImagem(index);
    iniciarAutoSlide();
});

// seta esquerda
document.querySelector(".seta.esquerda").addEventListener("click", () => {
    clearInterval(intervalo);
    index = (index - 1 + imagens.length) % imagens.length;
    mostrarImagem(index);
    iniciarAutoSlide();
});


iniciarAutoSlide();

