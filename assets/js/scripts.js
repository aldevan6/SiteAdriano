// Animação do menu
let navbarTop = document.querySelector('.navbar-top');
let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 100) {
        navbarTop.classList.add('anime-header');
        header.style.position = "fixed";
        header.style.zIndex = 200;
    }else{
        navbarTop.classList.remove('anime-header');
    }
});

// Fim animação do menu