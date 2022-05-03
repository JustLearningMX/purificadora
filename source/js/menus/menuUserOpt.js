/**
 * LLENA UN SUBMENÚ CON LAS OPCIONES DEL USUARIO
 */


//Obtenemos si un usuario ya está logueado
import { usuario } from '../../config/usuario.js';

//Obtenemos nodo del submenú usuario en el Navbar
const subMenuUser = document.querySelector('.subMenuUser');

//opciones si el usuario no está registrado
const opcionesSubmenuUserOut = [
    'Login',
    'Registro'
];

//Usuario registrado como Cliente
const opcionesSubmenuUserCliente = [
    'Mis compras',
    'Dashboard',
    'Salir'
];

//Usuario registrado como Admin
const opcionesSubmenuUserAdmin = [
    'Ventas',
    'Dashboard',
    'Reportes',
    'Salir'
];

const mostrarOpcionesSubMenu = (subMenuDeOpciones)=>{
    subMenuDeOpciones.map((subMenu)=>{

        //creamos nodo para opción del submenú
        const li = document.createElement('li');
        li.setAttribute('id', 'menu-items-user');
        
        //Nombre del menú y sus atributos
        const span = document.createElement('span');
        span.setAttribute('class', `nav-link`)
        span.textContent = `${subMenu}`;

        //Anexamos el item a la lista del submenu
        li.appendChild(span);

        //Anexamos la lista al submenú
        subMenuUser.appendChild(li);
    });
}

// Si el usuario NO está logueado
if(!usuario.logueado){
    mostrarOpcionesSubMenu(opcionesSubmenuUserOut);    
} 
// Si el usuario está logueado y es Admin
else if(usuario.logueado && usuario.admin){
    mostrarOpcionesSubMenu(opcionesSubmenuUserAdmin);
}
// Si el usuario está logueado y no es Admin entonces es Cliente
else {
    mostrarOpcionesSubMenu(opcionesSubmenuUserCliente);
}  