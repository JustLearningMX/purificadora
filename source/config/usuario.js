const usuarioLogueado =JSON.parse(window.localStorage.getItem('usuarioLogueadoPurificadora'));
import { mostrarLogin } from '../components/login.js';
import { mostrarSignUp } from '../components/signup.js';
import { mostrarLogout } from '../components/logout.js'
import { mostrarDashboard } from '../components/dashboard.js'

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

    
// console.log('usuarioLogueado: ', usuarioLogueado);
// console.log('usuario: ', usuario)

function controladorSubMenuUsuario (opcionUsuario){
    opcionUsuario && opcionUsuario === 'Login' ? mostrarLogin() :
    opcionUsuario === 'Registro' ? mostrarSignUp() : 
    opcionUsuario === 'Dashboard' ? mostrarDashboard() : 
    opcionUsuario === 'Reportes' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Dashboard' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Mis compras' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Salir' ? mostrarLogout() : 
    console.log('No existe');
}

export { usuario, controladorSubMenuUsuario };