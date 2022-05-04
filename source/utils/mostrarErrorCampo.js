/** 
 * FUNCIÓN QUE IMPLEMENTA UN MENSAJE DE ERROR
 * SI UN CAMPO DEL LOGIN O REGISTRAR VA ERRÓNEO
*/
import { crearElemento } from './crearNodos.js';

export function mostrarError(mensaje, isFirstTime, boton, form) {
    const p = crearElemento('p');
    const div = document.querySelector('.errorCampoOcultar');
    const botonContenedor = document.querySelector('#buttonContainer');

    p.textContent = mensaje;
    const isUnBoton = !boton.length ? true : false;
    
    if(isFirstTime){
        botonContenedor.removeChild(botonContenedor.children[1]); //Removemos el spinner

        if(!div.classList.contains('errorCampoMostrar'))
            div.classList.toggle("errorCampoMostrar");
        
        if(boton && isUnBoton) {
            boton.value = form; //Cambiamos el texto del botón
            boton.disabled = false; //Habilitamos el botón
            boton.classList.toggle("buttonAwaiting"); //Quitamos CSS al botón habilitado
        } else {
            for (let i = 0; i < boton.length; i++){
                boton[i].value = form[i]; //Cambiamos el texto del botón
                boton[i].disabled = false; //Habilitamos el botón
                boton[i].classList.toggle("buttonAwaiting"); //Quitamos CSS al botón habilitado
            }
        }
    }

    div.appendChild(p);
    
    //Mover al inicio de la pantalla
    window.scrollTo(0, 0);
}