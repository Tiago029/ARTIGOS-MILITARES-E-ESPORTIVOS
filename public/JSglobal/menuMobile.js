document.querySelectorAll(".categoria > a").forEach(link => {

    link.addEventListener("click", function(e) {

        const submenu = this.nextElementSibling;

        if(submenu && submenu.classList.contains("subcategorias")){

            e.preventDefault();

            submenu.classList.toggle("ativa");

        }

    });

});