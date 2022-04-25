/** 
 * FUNCIÓN QUE IMPLEMENTA UN MENSAJE DE ERROR
 * SI UN CAMPO DEL LOGIN O REGISTRAR VA ERRÓNEO
*/
import { crearElemento } from './crearNodos.js';

export function mostrarError(mensaje, isFirstTime, boton, form) {
    const p = crearElemento('p');
    const div = document.querySelector('.errorCampoOcultar');
    const botonContenedor = document.querySelector('#buttonContainer');
    // console.log(botonContenedor)

    p.textContent = mensaje;
    
    if(isFirstTime){
        botonContenedor.removeChild(botonContenedor.children[1]); //Removemos el spinner

        if(!div.classList.contains('errorCampoMostrar'))
            div.classList.toggle("errorCampoMostrar");
        
        if(boton) {
            boton.value = form; //Cambiamos el texto del botón
            boton.disabled = false; //Habilitamos el botón
            boton.classList.toggle("buttonAwaiting"); //Quitamos CSS al botón habilitado
        }
    }

    const divError = document.querySelector('.errorCampoOcultar');

    divError.appendChild(p);

}