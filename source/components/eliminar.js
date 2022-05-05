/**
 * DIBUJA UNA VISTA PARA QUE EL USUARIO 
 * CONFIRME UNA ACCIÓN (ELIMINAR SU CUENTA
 * CAMBIAR CONTRASEÑA, ETC.)
 */

//Crea elemento o nodo HTML
import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Eliminar
const crearSecciónConfirmar = (mensaje)=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionSalir'}]); //sectionSalir
    const p = crearElemento('p', [{type: 'class', name: 'textoSalir'}]);
    const divBoton = crearElemento('div', [{type: 'class', name: 'divBotonesConfirmar'}]);
    const divBotonConfirmar = crearElemento('div', [{type: 'id', name: 'buttonContainer'},{type: 'class', name: 'divBtnConfirmar'}]);
    const btnConfirmarEliminar = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },
        {
          type: 'class', 
          name: 'btnConfirmarEliminar'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Eliminar'
        }
      ]);
    const divBotonCancelar = crearElemento('div', [{type: 'id', name: 'buttonContainer'},{type: 'class', name: 'divBtnCancelar'}]);
    const btnCancelarEliminar = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },
        {
          type: 'class', 
          name: 'btnCancelarEliminar'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Cancelar'
        }
      ]);

    p.textContent = mensaje;
    
    section.appendChild(p);

    divBotonConfirmar.appendChild(btnConfirmarEliminar);
    divBotonCancelar.appendChild(btnCancelarEliminar);

    divBoton.appendChild(divBotonConfirmar);
    divBoton.appendChild(divBotonCancelar);

    section.appendChild(divBoton);

    return section;
}

//Se muestra el componente
export function mostrarConfirmar(mensaje, eliminar, cancelar) {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección Eliminar al Main del index.html
    main.appendChild(crearSecciónConfirmar(mensaje));

    //Obtenemos los dos botones
    const botonEliminar = document.querySelector('.btnConfirmarEliminar');
    const botonCancelar = document.querySelector('.btnCancelarEliminar');    

    //Los ponemos a la escucha y que ejecute la acción
    botonEliminar.onclick = () => eliminar(botonEliminar, botonCancelar);
    botonCancelar.onclick = cancelar;
}