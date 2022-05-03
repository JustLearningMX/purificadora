/**
 * FUNCIÓN QUE IMPLEMENTA ACCIONES EN EL LOCALSTORAGE 
 * CUANDO EL USUARIO ACTUALIZA, ELIMINA, ETC. SUS DATOS
 */

import { usuario, actualizarUsuario } from '../config/usuario.js'

export function actualizarLocalStorage(dataUsuario) {
    const data = {
        admin: dataUsuario.usuario.tipo,
        email: dataUsuario.usuario.email,
        id: dataUsuario.usuario.id,
        telefono: dataUsuario.usuario.telefono,
        token: usuario.token,
    };
            
    //Quitamos del local storage los datos del usuario
    window.localStorage.removeItem('usuarioLogueadoPurificadora');
    window.localStorage.removeItem('usuarioDatos');

     //Actualizamos los nuevos datos del Usuario
     window.localStorage.setItem(
         "usuarioLogueadoPurificadora", JSON.stringify(data)
     );
     window.localStorage.setItem(
        "usuarioDatos", JSON.stringify(dataUsuario)
    );

    actualizarUsuario();
}