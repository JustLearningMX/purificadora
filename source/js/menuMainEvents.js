//HIRAM CHAVÉZ LÓPEZ -UNADM PT1 -15-abril-2022
//ABRIR-CERRAR MENÚ HAMBURGUESA

const navToggle = document.querySelector(".header-icon-menu"); //Icono de menu hamburguesa
const navMenu = document.querySelector(".menu"); //Array de las opciones del menu

import { controladorMenuMain } from '../config/menuMain.js'

const abrirCerrarMenu = ()=>{
    navMenu.classList.toggle("nav-menu_visible");//Agrega la clase para mostrar el menu

    //Atributo para discapacidad visual
    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Abrir menú");
    } else {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    }
};

//Escuchamos cuando se de clic en el icono de menu hamburguesa
navToggle.addEventListener("click", (event) => {
    abrirCerrarMenu()
});  

//Escuchamos si hay clic en una opción del menú
window.addEventListener("click", (event) =>{
    const nodoActual = event.path[1];//Ubicamos el nodo al que se dió clic
    // console.log(nodoActual.getAttribute('id'))

    let nodoSeleccionadoAnterior;//Variable para guardar el nodo que previo seleccionado

    if(nodoActual.getAttribute('id') ==="menu-items"){//Si se eligió una opción del menú

        for (let i = 0; i < navMenu.children.length; i++) {//Recorremos las opciones del menu
            if(navMenu.children[i].className){//Si una opción del menú tiene la clase "selected"
                nodoSeleccionadoAnterior = navMenu.children[i];//Guardamos ese nodo
            };            
        };

        nodoActual.classList.toggle("selected");//El nodo seleccionado lo remarcamos
        nodoSeleccionadoAnterior.classList.toggle("selected");//Y el nodo anterior remarcado, lo desmarcamos

        abrirCerrarMenu();

        //Pasamos la acción al módulo correspondiente: Nosotros, Servicios, Contacto, etc
        const opcionElegida = nodoActual.children[0].textContent;
        // console.log(opcionElegida)
        controladorMenuMain(opcionElegida);
    }

    //Cerramos el menú si el usuario da clic en otro lado
    else if(nodoActual.children[0].getAttribute('class') !== "header-icon-menu" && navMenu.classList.contains("nav-menu_visible")) {
        // console.log(nodoActual)
        abrirCerrarMenu();
    };

    //SI SE DIÓ CLIC EN EL LOGO PRINCIPAL --> Retorna a la página principal
    const isLogoPrincipal = event.path[0].getAttribute('class') === 'logo-principal' ? true : false;
    if(isLogoPrincipal){
        window.location.href='/';
    }
});