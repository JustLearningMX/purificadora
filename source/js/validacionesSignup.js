import { requestApi } from '../utils/httpClient.js';
import { mostrarError } from '../utils/mostrarErrorCampo.js';
import { usuario as user } from '../config/usuario.js';
import { mostrarLogin } from '../components/login.js';

export function validandoSignup(e, nombre, apellidos, telefono, email, password, password2, boton) {
    e.preventDefault();
    
    const patronRgxPassword = /[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}/i;
    const patronRgxEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    let isFirstTime = true;

    //Validaciones
    if(nombre.length <= 0 || apellidos.length <= 0){
        mostrarError('* Ingrese nombre y apellidos', isFirstTime, boton, 'Registrar');
        isFirstTime = false;
    }
    
    if(telefono.length !== 10){
        mostrarError('* Teléfono debe ser de 10 dígitos', isFirstTime, boton, 'Registrar');
        isFirstTime = false;
    }
    
    if(!email.match(patronRgxEmail)){
        mostrarError('* El email debe incluir un @ y un dominio .com, .net, etc.', isFirstTime, boton, 'Registrar');
        isFirstTime = false;
    }
    
    if(!password.match(patronRgxPassword)){
        mostrarError('* Password debe incluir un caracter especial #, $, %. & y mínimo 9 caracteres', isFirstTime, boton, 'Registrar');
        isFirstTime = false;
    }
    
    if(password !== password2){
        mostrarError('* Passwords no coinciden. Deben ser iguales', isFirstTime, boton, 'Registrar');
        isFirstTime = false;
    }
     else {

        //Ocultamos la caja de mensajes de advertencia
        const div = document.querySelector('.errorCampoOcultar');
        if(div.classList.contains("errorCampoMostrar"))
            div.classList.toggle("errorCampoMostrar");

        //Cuerpo de la petición al backend
        const body = { 
            "nombre": nombre, 
            "apellidos": apellidos, 
            "email": email, 
            "telefono": telefono, 
            "password": password,
         };

         //Si es usuario Admin, puede crear todo tipo de usuarios
        //  const usuario = user.admin ? user : null;
        const tokenUsuario = 'Bearer ' + user.token;

        requestApi('/usuarios/signup', 'POST', body, tokenUsuario)
            .then((data) => {//Se recibe el JSON con los datos de la petición
                boton.value = 'Conectando a la BD'; //Cambiamos el texto del botón

                if(data.error) { //Si hubo un error
                    mostrarError(data.message, isFirstTime, boton, 'Registrar');
                } else { //Si todo salió bien 
                    boton.value = 'Todo fue exitoso'; //Cambiamos el texto del botón
                    mostrarLogin();
                }
            
            })
            .catch((error)=>{
                // console.log('Hubo un error: ', error);
                mostrarError('Error en la aplicación. Intente más tarde', isFirstTime, boton, 'Registrar');
            });
    }   
};