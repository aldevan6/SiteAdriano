let btnTopo = document.querySelector('.btn-topo');
// Animação do menu
let navbarTop = document.querySelector('.navbar-top');
let header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 80) {
        navbarTop.classList.add('anime-header');
        header.style.position = 'fixed';
        header.style.zIndex = 200;
        btnTopo.style.display = 'flex'
    }else{
        navbarTop.classList.remove('anime-header');
        btnTopo.style.display = 'none';
    }
});

// Fim animação do menu

//Botão para voltar ao topo inicio
function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
//Fim
