/**
 * FUNCIÓN QUE REALIZA SOLICITUD A LA BD PARA
 * ELIMINAR LOS DATOS DE UN USUARIO LOGUEADO.
 */
import { requestApi } from '../../utils/httpClient.js';
import { colocarMensaje, mostrarErrorGeneral } from '../../utils/mensajeGeneral.js';
import { mostrarEliminar } from '../../components/eliminar.js';
import { agregarSpinner } from '../../utils/agregarSpinner.js';
import { usuario } from '../../config/usuario.js';
import { deleteLocalStorage } from '../../utils/localStorage.js'
import { mostrarDashboard } from '../../components/dashboard.js'

//Se desactivan los botones Confirmar Eliminar y Cancelar Eliminar
const desactivarBoton = (btnDelete, btnCancelar ) => {

    //Habilitamos nuevamente el botón Eliminar
    if(btnCancelar.classList.contains("buttonAwaiting")){
        btnCancelar.classList.toggle("buttonAwaiting");
        btnCancelar.disabled = false;
    }

    //Obtenemos el contenedor del botón, y lo enviamos para ponerle el spinner
    const botonContenedor = document.querySelectorAll('#buttonContainer');
    const spinnerElement = agregarSpinner(botonContenedor[0], 1.5);
    spinnerElement.style.left = '77%';

    //Deshabilitamos ambos botones
    btnDelete.value = 'Espere'; //Cambiamos el texto del botón
    btnDelete.disabled = true; //Deshabilitamos el botón
    btnDelete.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado

    btnCancelar.disabled = true;
    btnCancelar.classList.toggle("buttonAwaiting");     
};

//Función que realiza la eliminación total de datos del usuario a la BD
const deleteUsuario = async (botonEliminar, botonCancelar) => {

    //Hay que deshabilitar los notones que se encuentren en la vista y agregar spinner
    desactivarBoton(botonEliminar, botonCancelar);
    
    //Petición al backend de la BD
    try {                            

        //Obtenemos el token del usuario
        const tokenUsuario = 'Bearer ' + usuario.token;

        //Petición al endpoint que elimina los datos
        const data = await requestApi('/usuarios/delete', 'DELETE', null, tokenUsuario);

        if(data.error) { //Si hubo un error
            mostrarErrorGeneral(`Hubo un error: ${data.error}`);
        } else { //Si todo salió bien 

            //Eliminamos variables del localStorage
            deleteLocalStorage();

            colocarMensaje('¡Eliminación exitosa!');
            
            window.location.href='/';
        }
    } catch (error) { //Error en la BD
        boton.value = 'Eliminar'; //Cambiamos el texto del botón

        //Mover al inicio de la pantalla
        window.scrollTo(0, 0);

        mostrarErrorGeneral(`Hubo un error: ${error}`);        
    }
}

//Función callback que cancela todo y regresa al dashboard
const cancelar = () => {
    mostrarDashboard();
}

//Función que confirma la eliminación total de datos del usuario a la BD
export function confirmarDeleteUsuario() {
    mostrarEliminar('¿Confirma que desea eliminar su cuenta?', deleteUsuario, cancelar);             
}