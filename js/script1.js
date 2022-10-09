let animado = document.getElementsByClassName('animado');
let animar = document.getElementsByClassName('cardd');
let nav = document.getElementsByTagName('nav');
let perfil = document.getElementsByClassName('perfil');
let titulo = document.getElementById('titulo1');
let barra = document.getElementById('barra');
let barra2 = document.getElementById('barra2');
let titulo2 = document.getElementById('titulo2');

//Cuando cogemos varios elementos debemos iterarlos para que funcionen en los bucles, de esta manera no da fallo aunque solo cojas a uno.

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < perfil.length; i++) {
        const alturaPerfil = perfil[i].offsetTop;
        if(alturaPerfil - 300 < scrollTop){
            nav[i].style.backgroundColor = "Black";
            nav[i].style.boxShadow ="0px 3px 8px black"
            perfil[i].style.opacity = 1;
            barra.style.opacity = 1;
            barra.classList.add('animacion3');
            
            for(let i = 0; i<perfil.length; i++){
                perfil[i].classList.add('animacion');
            }
            titulo.style.opacity = 1;
            titulo.classList.add('animacion2');
        }else{
            nav[i].style.backgroundColor = "transparent";
            nav[i].style.boxShadow =""
        }
    }

    //Si queremos animar cada card de manera que salgan en distinto tiempo, agregar id a las cards y cambiar los segundos en el keyframe
    
    for (let i = 0; i < animado.length; i++) {
        const alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animado[i].style.opacity = 1;
            titulo2.style.opacity = 1;
            titulo2.classList.add('animacion2');
            barra2.style.opacity = 1;
            barra2.classList.add('animacion3');
            for(let i = 0; i<animar.length; i++){
                animar[i].classList.add('animacion');
            }
        }
    }
}

//Overlay card

let background = document.getElementsByClassName('background');
let img = document.getElementsByClassName('imagenScale');
let texto = document.getElementsByClassName('texto');

for (let i = 0; i< animar.length; i++) {
    animar[i].addEventListener('mouseover',mostrarTexto);
}
for (let i = 0; i< animar.length; i++) {
    animar[i].addEventListener('mouseout',ocultarTexto);
}
function mostrarTexto(){
    for (let i = 0; i < animar.length; i++) {
        background[i].style.width="100%";
        img[i].style.transform = "scale(1.2)";
        texto[i].style.opacity= 1;
        texto[i].style.transition="all 1s ease-in-out";
    }
}
function ocultarTexto(){
    for (let i = 0; i < background.length; i++) {
        background[i].style.width="0%";
        img[i].style.transform = "";
        texto[i].style.opacity= 0;
        texto[i].style.transition="all 0.1s";
    }
}

window.addEventListener('scroll',mostrarScroll);


