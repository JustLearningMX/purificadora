/**
 * Función que crea un Elemento o Nodo Spinner para usarlo
 * como Loader de información en una llamada a la BD
 */

//Función que crea Elementos HTML
import { crearElemento } from '../utils/crearNodos.js';

export function spinner() {
    
    //Creamos un div contenedor para el spinner
    const spinnerContainer = crearElemento('div', [
      {type: 'class', name: 'spinnerContainer'},
    ]);
    const spinnerImg = crearElemento('img', [
      {type: 'class', name: 'spinnerImage'},
      {type: 'src', name: './source/assets/spinner.png'},
      {type: 'alt', name: 'Spinner'}
    ]);

    spinnerContainer.appendChild(spinnerImg);

    return spinnerContainer;
    
}