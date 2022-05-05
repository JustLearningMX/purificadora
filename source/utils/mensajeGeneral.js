/** 
 * FUNCIÓN QUE IMPLEMENTA UN 
 * MENSAJE GENERAL EN EL BODY
*/
import { crearElemento } from './crearNodos.js';

export function colocarMensaje(mensaje){//, isFirstTime, boton, form) {
    const p = crearElemento('p');
    const divMensaje = document.querySelector('.divMensajesGeneral');

    p.textContent = mensaje;
    divMensaje.appendChild(p);

    if(!divMensaje.classList.contains('divMensajesGeneralMostrar'))
        divMensaje.classList.toggle("divMensajesGeneralMostrar");

}

export function mostrarErrorGeneral(mensaje) {
    cerrarMensajeGeneral();
    
    const p = crearElemento('p');
    const divMensaje = document.querySelector('.divMensajesGeneral');
    divMensaje.style.border= '1px solid crimson';
    divMensaje.style.color= '#FC4F4F';

    p.textContent = mensaje;
    divMensaje.appendChild(p);

    if(!divMensaje.classList.contains('divMensajesGeneralMostrar'))
        divMensaje.classList.toggle("divMensajesGeneralMostrar");
}

export function cerrarMensajeGeneral() {
    const divMensaje = document.querySelector('.divMensajesGeneral');
    const nodosHijos = divMensaje.children.length;

    //Borramos los nodos hijos excepto la "x" para cerrar
    for (let i = 1; i < nodosHijos; i++) {
        divMensaje.removeChild(divMensaje.children[i]);
    }

    if(divMensaje.classList.contains('divMensajesGeneralMostrar'))
        divMensaje.classList.toggle("divMensajesGeneralMostrar");
}