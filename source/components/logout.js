/**
 * PERMITE AL USUARIO ABANDONAR LA SESIÓN
 */

import { usuario } from '../config/usuario.js';
import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Salir
const crearSecciónSalir = ()=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionSalir'}]);
    const p = crearElemento('p', [{type: 'class', name: 'textoSalir'}]);
    const inputBoton = crearElemento('input', [
        {
          type: 'class', 
          name: 'submittButtonSalir'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Cerrar sesión'
        }
      ]);

    p.textContent = '¿Desea cerrar la sesión?';
    
    section.appendChild(p);
    section.appendChild(inputBoton);

    return section;
}

//Se muestra el botón para Cerrar sesión
export function mostrarLogout() {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección Salir al Main del index.html
    main.appendChild(crearSecciónSalir());    
}

//Ponemos a la escucha el botón Cerrar sesión
document.addEventListener('click', (event)=>{

    const nodoActual = event.path[0];//Ubicamos el nodo al que se dió clic

    const isBotonSalir = nodoActual.getAttribute('class') === 'submittButtonSalir' ? true : false;

    event.preventDefault();

    //si el usuario está logueado
    if(isBotonSalir && usuario.logueado){
        window.localStorage.removeItem('usuarioLogueadoPurificadora');
        window.location.href='/';
    }

});
