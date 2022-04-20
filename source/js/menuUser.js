//HIRAM CHAVÉZ LÓPEZ -UNADM PT1 -18-abril-2022
//ABRIR-CERRAR MENÚ USUARIO

const userToggle = document.querySelector(".navbar-icon-user"); //Icono de Usuario
const navUserMenu = document.querySelector(".subMenuUser"); //Array de las opciones del menu

const abriCerrarMenu = ()=>{
    navUserMenu.classList.toggle("nav-menu-user_visible");//Agrega la clase para mostrar el menu

    //Atributo para discapacidad visual
    if (navUserMenu.classList.contains("nav-menu-user_visible")) {
        userToggle.setAttribute("aria-label", "Abrir menú");
    } else {
        userToggle.setAttribute("aria-label", "Cerrar menú");
    }
};

//Escuchamos cuando se de clic en el icono de menu Usuario
userToggle.addEventListener("click", () => {
    abriCerrarMenu();
});  

//Escuchamos si hay clic en una opción del menú
window.addEventListener("click", (event) =>{
    const nodoActual = event.path[1];//Ubicamos el nodo al que se dió clic

    let nodoSeleccionadoAnterior;//Variable para guardar el nodo previo seleccionado

    if(nodoActual.getAttribute('id') === "menu-items-user"){//Si se eligió una opción del menú Usuario

        for (let i = 0; i < navUserMenu.children.length; i++) {//Recorremos las opciones del menu
            if(navUserMenu.children[i].className){//Si una opción del menú tiene la clase "selected"
                nodoSeleccionadoAnterior = navUserMenu.children[i];//Guardamos ese nodo
            };            
        };

        nodoActual.classList.toggle("selected");//El nodo seleccionado lo remarcamos

        if(nodoSeleccionadoAnterior)
            nodoSeleccionadoAnterior.classList.toggle("selected");//Y el nodo anterior remarcado, lo desmarcamos

        abriCerrarMenu();
    } 
    //Cerramos el menú si el usuario da clic en otro lado
    else if(nodoActual.getAttribute('class') !== "imgUserContainer" && navUserMenu.classList.contains("nav-menu-user_visible")) {
        abriCerrarMenu();
    }
});