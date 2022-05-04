/**
 * PERMITE AL USUARIO ABANDONAR LA SESIÓN
 */

//Datos del usuario
import { usuario } from '../config/usuario.js';

//Crea elemento o nodo HTML
import { crearElemento } from '../utils/crearNodos.js';

//Pone un Elemento Spinner a otro Elemento HTML
import { agregarSpinner } from '../utils/agregarSpinner.js'

//Se crean elementos para el componente Salir
const crearSecciónSalir = ()=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionSalir'}]);
    const p = crearElemento('p', [{type: 'class', name: 'textoSalir'}]);
    const divBoton = crearElemento('div', [{type: 'id', name: 'buttonContainer'}]);
    const inputBoton = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },
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
    divBoton.appendChild(inputBoton);
    section.appendChild(divBoton);

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
    event.preventDefault();

    const nodoActual = event.path[0];//Ubicamos el nodo al que se dió clic  

    const isBotonCerrarSesion = nodoActual.getAttribute('class') === 'submittButtonSalir' ? true : false;

    //si el usuario está logueado
    if(isBotonCerrarSesion && usuario.logueado){

      //Obtenemos el contenedor del botón, y lo enviamos para ponerle el spinner
      const botonContenedor = document.querySelector('#buttonContainer');
      const spinnerElement = agregarSpinner(botonContenedor, 2);

      spinnerElement.style.left = '80%';

      //Deshabilitamos el botón
      const boton = document.querySelector('.submittButtonSalir');
      boton.value = 'Finalizando'; //Cambiamos el texto del botón
      boton.disabled = true; //Deshabilitamos el botón
      boton.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado

      window.localStorage.removeItem('usuarioLogueadoPurificadora');
      window.localStorage.removeItem('usuarioDatos');
      window.location.href='/';
    }

});
