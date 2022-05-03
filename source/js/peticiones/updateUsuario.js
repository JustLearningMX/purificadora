/**
 * FUNCIÓN QUE REALIZA SOLICITUD A LA BD PARA
 * ACTUALIZAR LOS DATOS DE UN USUARIO LOGUEADO.
 * Y LO GUARDA EN /CONFIG/USUARIO usuario.datos
 */
 import { requestApi } from '../../utils/httpClient.js';
 import { colocarMensaje, mostrarErrorGeneral } from '../../utils/mensajeGeneral.js';
 import { mostrarError } from '../../utils/mostrarErrorCampo.js';
 import { rfcConHomoclave, emailValido, telefonoDiezDigitos } from '../../js/validacionesGenerales.js';
 import { agregarSpinner } from '../../utils/agregarSpinner.js';
 import { usuario } from '../../config/usuario.js';
 import { actualizarLocalStorage } from '../../utils/localStorage.js'
 import { mostrarDashboard } from '../../components/dashboard.js'

 //1. Primero desactivamos los botones y le agregamos el spinner
 const desactivarBoton = (btnUpdate, btnDelete) => {

    //Habilitamos nuevamente el botón Eliminar
    if(btnDelete.classList.contains("buttonAwaiting")){
        btnDelete.classList.toggle("buttonAwaiting");
        btnDelete.disabled = false;
    }
     
    //Limpiamos la caja q muestra mensajes de error
    const divError = document.querySelector('.errorCampoOcultar');
    while (divError.firstChild) {
        divError.removeChild(divError.firstChild);
    }
    if(divError.classList.contains('errorCampoMostrar'))
        divError.classList.toggle("errorCampoMostrar");

    //Obtenemos el contenedor del botón, y lo enviamos para ponerle el spinner
    const botonContenedor = document.querySelectorAll('#buttonContainer');
    const spinnerElement = agregarSpinner(botonContenedor[0]);
    spinnerElement.style.left = '74%';

    //Deshabilitamos ambos botones
    btnUpdate.value = 'Espere'; //Cambiamos el texto del botón
    btnUpdate.disabled = true; //Deshabilitamos el botón
    btnUpdate.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado
    
    btnDelete.disabled = true;
    btnDelete.classList.toggle("buttonAwaiting");     
 };

//2. Después obtenemos los campos y lo guardamos en un Array.
 const obtenerCampos = () => {
    const arrayDeCampos = document.querySelectorAll('.input-dashboard');
    let body = {};

    for (let i = 0; i < arrayDeCampos.length; i++) {
        const clave = arrayDeCampos[i].name;
        
        const valor = arrayDeCampos[i].name === 'rfc' ? arrayDeCampos[i].value.toUpperCase() : arrayDeCampos[i].value;

        if(valor)
            body[clave] = valor;
    }
    
    return body;

 };

//3. Validamos los campos que el usuario desea modificar
 const validarCampos = (campos, boton) =>{
    let isFirstTime = true;
    let error = false;

    //Campos obligatorios
    if(!campos.nombre || !campos.apellidos || !campos.email || !campos.telefono){
        mostrarError('* Nombre, Apellidos, Email y Teléfono son obligatorios', isFirstTime, boton, ['Actualizar', 'Eliminar']);
        isFirstTime = false;
        error = true;
    }

    //Rfc correcto
    if(campos.rfc && !rfcConHomoclave(campos.rfc) ){
        mostrarError('* Ingrese un RFC completo, incluya homoclave', isFirstTime, boton, ['Actualizar', 'Eliminar']);
        isFirstTime = false;
        error = true;
    }

    //Email correcto
    if(campos.email && !emailValido(campos.email) ){
        mostrarError('* El email debe incluir un @ y un dominio .com, .net, etc.', isFirstTime, boton, ['Actualizar', 'Eliminar']);
        isFirstTime = false;
        error = true;
    }

    //Telefono correcto 10 números
    if(campos.telefono && !telefonoDiezDigitos(campos.telefono) ){
        mostrarError('* Teléfono debe ser de 10 dígitos', isFirstTime, boton, ['Actualizar', 'Eliminar']);
        isFirstTime = false;
        error = true;
    }

    return error;
 };

 //Función que ejecuta la actualización de datos del usuario a la BD
 export async function updateUsuario(boton) {
     const btnDelete = document.querySelector('.deleteButton');
     const arrBotones = [boton, btnDelete];

     //1. Desactivar botón y agregar spinner
     desactivarBoton(boton, btnDelete);

     //2. Obtener valores de los inputs
     const objetoConCampos = obtenerCampos();
     
     //3. Validar los valores
     const body = validarCampos(objetoConCampos, arrBotones) ? null : objetoConCampos;     
     
     //4. Petición al backend de la BD
     try {                            
 
         boton.value = 'Conectando'; //Cambiamos el texto del botón

         //Obtenemos los datos del Usuario para guardalos en /config/usuario.js --> usuario.datos
         const tokenUsuario = 'Bearer ' + usuario.token;

         //Petición al endpoint que actualiza los datos
         const data = await requestApi('/usuarios/update', 'PUT', body, tokenUsuario);
 
         if(data.error) { //Si hubo un error
             mostrarErrorGeneral('Hubo un error: ', data.error);

         } else { //Si todo salió bien 

            //Actualizamos los datos
            actualizarLocalStorage(data);

            //Mover al inicio de la pantalla
            window.scrollTo(0, 0);

            colocarMensaje('¡Actualización exitosa!');

            //Recargamos el componente
            mostrarDashboard();
         }
     } catch (error) { //Error en la BD
        mostrarErrorGeneral('Hubo un error: ', error);        
     }
 }