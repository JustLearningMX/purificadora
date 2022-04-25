import { requestApi } from '../utils/httpClient.js';
import { mostrarError } from '../utils/mostrarErrorCampo.js';

export function validandoLogin(e, telefono, password, boton) {
    e.preventDefault();
    
    const patronRgx = /[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}/i;

    let isFirstTime = true;

    if(telefono.length !== 10 || !password.match(patronRgx)){
        mostrarError('Teléfono o Contraseña mal escrito', isFirstTime, boton, 'Iniciar sesión');
        isFirstTime = false;
    } else {
        const div = document.querySelector('.errorCampoOcultar');
        if(div.classList.contains("errorCampoMostrar"))
            div.classList.toggle("errorCampoMostrar");

        const body = { "telefono": telefono, "password": password };

        requestApi('/usuarios/login', 'POST', body)
            .then((data) => {
                //Se recibe el JSON con los datos de la petición
                boton.value = 'Conectando a la BD'; //Cambiamos el texto del botón

                if(data.error) { //Si hubo un error
                    console.log(data.error);      
                    mostrarError('Teléfono o Contraseña errónea', isFirstTime, boton, 'Iniciar sesión');
                } else { //Si todo salió bien 
                    console.log(data);
                    //Guardamos al USUARIO y su TOKEN en el localStorage
                    window.localStorage.setItem(
                        "usuarioLogueadoPurificadora", JSON.stringify(data.user)
                    );
                    boton.value = 'Todo fue exitoso'; //Cambiamos el texto del botón
                    console.log(`Bienvenido ${data.user.email}`);
                    window.location.href='/';
                }
            
            })
            .catch((error)=>{
                console.log('Hubo un error: ', error);
                mostrarError('Error en la aplicación. Intente más tarde', isFirstTime, boton, 'Iniciar sesión');
            });
    }   
};