const usuarioLogueado = window.localStorage.getItem('usuarioLogueadoPurificadora');
import { mostrarLogin } from '../components/login.js';
import { mostrarSignUp } from '../components/signup.js';
import { mostrarLogout } from '../components/logout.js'

const usuario = usuarioLogueado ? {
        logueado: true,
        id: usuarioLogueado.id,
        telefono: usuarioLogueado.telefono,
        email: usuarioLogueado.email,
        admin: usuarioLogueado.admin ? true : false,
        token: usuarioLogueado.token
    } : {
        logueado: false
    };

function controladorSubMenuUsuario (opcionUsuario){
    opcionUsuario && opcionUsuario === 'Login' ? mostrarLogin() :
    opcionUsuario === 'Registro' ? mostrarSignUp() : 
    opcionUsuario === 'Dashboard' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Reportes' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Dashboard' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Mis compras' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Salir' ? mostrarLogout() : 
    console.log('No existe');
}

export { usuario, controladorSubMenuUsuario };