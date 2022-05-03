/**
 * LLENA EL MENÚ PRINCIPAL
 */

//Obtenemos nodo del menú principal en el Navbar
const mainMenu = document.querySelector('.menu');

//opciones del menú principal
const opcionesMenuMain = [
    'Nosotros',
    'Servicios',
    'Contacto'
];

const mostrarOpcionesMenuPrincipal = (menuDeOpciones)=>{
    menuDeOpciones.map((opcion)=>{

        //creamos nodo para opción del menú
        const li = document.createElement('li');
        li.setAttribute('id', 'menu-items');

        if(opcion === 'Nosotros')
            li.setAttribute('class', 'selected');
        
        //Nombre del menú y sus atributos
        const span = document.createElement('span');
        span.setAttribute('class', `nav-link nav-link-main`)
        span.textContent = `${opcion}`;

        //Anexamos el item a la lista del submenu
        li.appendChild(span);

        //Anexamos la lista al menú
        mainMenu.appendChild(li);
    });
}

// Pasamos el array de las opciones
    mostrarOpcionesMenuPrincipal(opcionesMenuMain);    
