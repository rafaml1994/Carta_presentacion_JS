let animado = document.getElementsByClassName("animado");
let animar = document.getElementsByClassName("cardd");
let nav = document.getElementsByTagName("nav");
let perfil = document.getElementsByClassName("perfil");
let titulo = document.getElementById("titulo1");
let barra = document.getElementById("barra");
let barra2 = document.getElementById("barra2");
let titulo2 = document.getElementById("titulo2");

let background = document.getElementsByClassName("background");
let img = document.getElementsByClassName("imagenScale");
let texto = document.getElementsByClassName("texto");
let tituloOverlay = document.getElementsByClassName("tituloOverlay");
let linkOverlay = document.getElementsByClassName("linkOverlay");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  if (window.screen.width > 1024) {
    for (let i = 0; i < perfil.length; i++) {
      const alturaPerfil = perfil[i].offsetTop;

      if (alturaPerfil - 300 < scrollTop) {
        nav[i].style.backgroundColor = "Black";
        nav[i].style.boxShadow = "0px 3px 8px black";
        perfil[i].style.opacity = 1;
        barra.style.opacity = 1;
        barra.classList.add("animacion3");

        for (let i = 0; i < perfil.length; i++) {
          perfil[i].classList.add("animacion");
        }
        titulo.style.opacity = 1;
        titulo.classList.add("animacion2");
      } else {
        nav[i].style.backgroundColor = "transparent";
        nav[i].style.boxShadow = "";
      }
    }
  } else {
    for (let i = 0; i < animar.length; i++) {
      const alturaCard = animar[i].offsetTop;
      
      if (alturaCard - 100 > scrollTop) {
        
        barra.style.opacity = 1;
        barra.classList.add("animacion3");

        for (let i = 0; i < perfil.length; i++) {
            perfil[i].style.opacity = 1; 
            perfil[i].classList.add("animacion");
        }
        
        titulo.style.opacity = 1;
        titulo.classList.add("animacion2");

        background[i].style.width = "0%";
        img[i].style.transform = "";
        texto[i].style.transition = "";
        texto[i].style.opacity = 0;
        
      }else{
        background[i].style.width = "100%";
        img[i].style.transform = "scale(1.2)";
        img[i].style.borderRadius = "1rem";
        texto[i].style.transition = "all 2.5s ease-in-out";
        texto[i].style.opacity = 1;
      }
    }
  }

  for (let i = 0; i < animado.length; i++) {
    const alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 400 < scrollTop) {
      animado[i].style.opacity = 1;
      titulo2.style.opacity = 1;
      titulo2.classList.add("animacion2");
      barra2.style.opacity = 1;
      barra2.classList.add("animacion3");
      for (let i = 0; i < animar.length; i++) {
        animar[i].classList.add("animacion");
      }
    }
  }
}

//Overlay card

//También se puede realizar a través de CSS, pero he querido usar "event.target" y conocer un poco mejor su funcionamiento
for (let i = 0; i < animar.length; i++) {
  animar[i].addEventListener("mouseover", mostrarTexto);
  function mostrarTexto(e) {
    let evento = e.target;
    if (
      (evento && evento.className === "imagenScale") ||
      evento.className === "background" ||
      evento.className === "texto" ||
      evento.className === "tituloOverlay" ||
      evento.className === "linkOverlay" ||
      evento.className === "textoOverlay"
    ) {
      background[i].style.width = "100%";
      img[i].style.transform = "scale(1.2)";
      texto[i].style.transition = "all 2.5s ease-in-out";
      texto[i].style.opacity = 1;
    }
  }
}

for (let i = 0; i < animar.length; i++) {
  animar[i].addEventListener("mouseout", ocultarTexto);
}

function ocultarTexto() {
  for (let i = 0; i < background.length; i++) {
    background[i].style.width = "0%";
    img[i].style.transform = "";
    texto[i].style.opacity = 0;
    texto[i].style.transition = "all 0.1s";
  }
}

window.addEventListener("scroll", mostrarScroll);

/* MOBILE */

let mobile = document.getElementById("iconMobile");
let ocultarMenu = document.getElementsByClassName("link_submenu");
let subMenu = document.getElementsByClassName("btn_collapse");

mobile.addEventListener("click", () => {
  let element = null;
  console.log(subMenu);
  for (let i = 0; i < subMenu.length; i++) {
    element = subMenu[i];
    if (element.style.display !== "flex") {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  }
  for (let i = 0; i < ocultarMenu.length; i++) {
    const subElement = ocultarMenu[i];
    subElement.addEventListener("click", () => {
      element.style.display = "none";
    });
  }
});
