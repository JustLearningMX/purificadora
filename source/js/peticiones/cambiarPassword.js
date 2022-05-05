/**
 * FUNCIÓN QUE REALIZA SOLICITUD A LA BD PARA
 * ELIMINAR LOS DATOS DE UN USUARIO LOGUEADO.
 */
import { requestApi } from '../../utils/httpClient.js';
import { colocarMensaje, mostrarErrorGeneral } from '../../utils/mensajeGeneral.js';
import { mostrarCambiarPassword } from '../../components/cambiarPassword.js';
import { agregarSpinner } from '../../utils/agregarSpinner.js';
import { usuario } from '../../config/usuario.js';
import { mostrarDashboard } from '../../components/dashboard.js'

//Se activan los botones Confirmar y Cancelar
const activarBoton = ( botones ) => {

    botones.map((boton)=>{
        boton.boton.value = boton.texto;
        boton.boton.disabled = false; //Habilitamos el botón
        boton.boton.classList.toggle("buttonAwaiting"); //Quitamos CSS al botón habilitado
    });

    const divBtnConfirmar = document.querySelector('.divBtnConfirmar');
    if(divBtnConfirmar.children[1])
        divBtnConfirmar.removeChild(divBtnConfirmar.children[1]); //Removemos el spinner

};

//Se desactivan los botones Confirmar Eliminar y Cancelar Eliminar
const desactivarBoton = (btnConfirmar, btnCancelar ) => {

    //Habilitamos nuevamente el botón Cancelar
    if(btnCancelar.classList.contains("buttonAwaiting")){
        btnCancelar.classList.toggle("buttonAwaiting");
        btnCancelar.disabled = false;
    }

    //Obtenemos el contenedor del botón, y lo enviamos para ponerle el spinner
    const botonContenedor = document.querySelectorAll('#buttonContainer');
    const spinnerElement = agregarSpinner(botonContenedor[0], 1.5);
    spinnerElement.style.left = '70%';

    //Deshabilitamos ambos botones
    btnConfirmar.value = 'Espere'; //Cambiamos el texto del botón
    btnConfirmar.disabled = true; //Deshabilitamos el botón
    btnConfirmar.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado

    btnCancelar.disabled = true;
    btnCancelar.classList.toggle("buttonAwaiting");     
};

//Nbtenemos los campos y lo guardamos en un Array.
const obtenerCampos = () => {
    const arrayDeCampos = document.querySelectorAll('.input-form');
    let body = {};

    for (let i = 0; i < arrayDeCampos.length; i++) {
        
        const clave = arrayDeCampos[i].name;        
        const valor = arrayDeCampos[i].value;

        if(valor)
            body[clave] = valor;
    }

    return body.hasOwnProperty('viejoPassword') 
        && body.hasOwnProperty('nuevoPassword')
        && body.hasOwnProperty('nuevoPasswordAgain') ? body : null;
 };

const validarCampos = (campos, botonConfirmar, botonCancelar) =>{
    
    let error = false;

    //Se validan las contraseñas nuevas
    const patronRgx = /[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}/i;
    if(!campos.nuevoPassword.match(patronRgx) || !campos.nuevoPasswordAgain.match(patronRgx)){
        mostrarErrorGeneral('Incluya en la contraseña nueva un caracter especial: @ # $ % &');
        activarBoton([{boton: botonConfirmar, texto: 'Confirmar'}, {boton: botonCancelar, texto: 'Cancelar'}]);
        error = true;
    }

    //Se valida que ambas contraseñas nuevas sean iguales
    if(campos.nuevoPassword !== campos.nuevoPasswordAgain){
        mostrarErrorGeneral('Las dos contraseñas nuevas deben coincidir');
        if(!error)
            activarBoton([{boton: botonConfirmar, texto: 'Confirmar'}, {boton: botonCancelar, texto: 'Cancelar'}]);
        
        error = true;
    }

    return error;
 };

//Función que realiza la eliminación total de datos del usuario a la BD
const changePassword = async (botonConfirmar, botonCancelar) => {

    let error = false; 

    //Hay que deshabilitar los notones que se encuentren en la vista y agregar spinner
    desactivarBoton(botonConfirmar, botonCancelar);

    //Obtenemos los campos
    const body = obtenerCampos();

    //Si existe el body validamos los 3 campos
    if(!body) { 
        mostrarErrorGeneral(`Los 3 passwords son obligatorios`);
        activarBoton([{boton: botonConfirmar, texto: 'Confirmar'}, {boton: botonCancelar, texto: 'Cancelar'}]);
        error = true;
    } else {
        error = validarCampos(body, botonConfirmar, botonCancelar)
    };    
    
    //Petición al backend de la BD
    if(!error){
        try {                            

            //Obtenemos el token del usuario
            const tokenUsuario = 'Bearer ' + usuario.token;
            delete body.nuevoPasswordAgain;

            //Petición al endpoint que elimina los datos
            const data = await requestApi('/usuarios/newpassword', 'PUT', body, tokenUsuario);

            if(data.error) { //Si hubo un error
                mostrarErrorGeneral(`No se pudo cambiar la contraseña: ${data.message}`);
            } else { //Si todo salió bien

                colocarMensaje('¡Cambio de password exitoso!');                
            }
        } catch (error) { //Error en la BD
            botonConfirmar.value = 'Confirmar'; //Cambiamos el texto del botón

            //Mover al inicio de la pantalla
            window.scrollTo(0, 0);

            mostrarErrorGeneral(`No se pudo cambiar la contraseña: ${error}`);        
        }
        mostrarDashboard();
    }
}

//Función callback que cancela todo y regresa al dashboard
const cancelar = () => {
    mostrarDashboard();
}

//Función que solicita los passwords para realizar el cambio
export function confirmarCambiarPassword() {
    mostrarCambiarPassword('Ingrese los datos solicitados:', changePassword, cancelar);             
}