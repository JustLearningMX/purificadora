/**
 * DIBUJA UNA VISTA PARA QUE EL USUARIO 
 * CONFIRME UNA ACCIÓN (ELIMINAR SU CUENTA
 * CAMBIAR CONTRASEÑA, ETC.)
 */

//Crea elemento o nodo HTML
import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Eliminar
const crearSecciónCambiarPassword = (mensaje)=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionSalir'}]); //sectionSalir
    const p = crearElemento('p', [{type: 'class', name: 'textoSalir'}]);
    const divDatosPasswords = crearElemento('div', [{type: 'class', name: 'divDatosPasswords'}]);
    const passwordActual = crearElemento('input', [
      {
        type: 'name', 
        name: 'viejoPassword'
      },
      {
        type: 'class', 
        name: 'input-form passwordActual'
      },
      {
        type: 'type', 
        name: 'password'
      },
      {
        type: 'placeholder', 
        name: 'Ingrese su contraseña actual'
      }
    ], true, true); // required, autofocus
    const passwordNuevo = crearElemento('input', [
      {
        type: 'name', 
        name: 'nuevoPassword'
      },
      {
        type: 'class', 
        name: 'input-form passwordNuevo'
      },
      {
        type: 'type', 
        name: 'password'
      },
      {
        type: 'placeholder', 
        name: 'Ingrese la nueva contraseña'
      }
    ], true); // required
    const passwordNuevoAgain = crearElemento('input', [
      {
        type: 'name', 
        name: 'nuevoPasswordAgain'
      },
      {
        type: 'class', 
        name: 'input-form'
      },
      {
        type: 'type', 
        name: 'password'
      },
      {
        type: 'placeholder', 
        name: 'Repita la nueva contraseña'
      }
    ], true); // required

    const divBoton = crearElemento('div', [{type: 'class', name: 'divBotonesConfirmar'}]);
    const divBotonConfirmar = crearElemento('div', [{type: 'id', name: 'buttonContainer'},{type: 'class', name: 'divBtnConfirmar'}]);
    const btnConfirmar = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },
        {
          type: 'class', 
          name: 'btnConfirmar'
        },
        {
          type: 'type', 
          name: 'submit'
        },
        {
          type: 'value', 
          name: 'Confirmar'
        }
      ]);
    const divBotonCancelar = crearElemento('div', [{type: 'id', name: 'buttonContainer'},{type: 'class', name: 'divBtnCancelar'}]);
    const btnCancelar = crearElemento('input', [
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

    divDatosPasswords.appendChild(passwordActual);
    divDatosPasswords.appendChild(passwordNuevo);
    divDatosPasswords.appendChild(passwordNuevoAgain);

    section.appendChild(divDatosPasswords);

    divBotonConfirmar.appendChild(btnConfirmar);
    divBotonCancelar.appendChild(btnCancelar);

    divBoton.appendChild(divBotonConfirmar);
    divBoton.appendChild(divBotonCancelar);

    section.appendChild(divBoton);

    return section;
}

//Se muestra el componente
export function mostrarCambiarPassword(mensaje, changePassword, cancelar) {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección Eliminar al Main del index.html
    main.appendChild(crearSecciónCambiarPassword(mensaje));

    //Obtenemos los dos botones
    const botonConfirmar = document.querySelector('.btnConfirmar');
    const botonCancelar = document.querySelector('.btnCancelarEliminar');    

    //Los ponemos a la escucha y que ejecute la acción
    botonConfirmar.onclick = () => changePassword(botonConfirmar, botonCancelar);
    botonCancelar.onclick = cancelar;
}