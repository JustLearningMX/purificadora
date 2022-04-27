/**
 * Archivo de configuración que 
 * guarda los datos del usuario logueado
 */

const usuarioLogueado = JSON.parse(window.localStorage.getItem('usuarioLogueadoPurificadora'));
const usuarioCompras = JSON.parse(window.localStorage.getItem('usuarioCompras'));

//Componentes a mostrar según elija el usuario
import { mostrarLogin } from '../components/login.js';
import { mostrarSignUp } from '../components/signup.js';
import { mostrarLogout } from '../components/logout.js'
import { mostrarDashboard } from '../components/dashboard.js'
import { mostrarMisCompras } from '../components/miscompras.js';

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

const compras = usuarioCompras ? {
    isCompras: true,
    cantidad: usuarioCompras.cantidad ? usuarioCompras.cantidad : 0
} : {
    isCompras: false
};

function controladorSubMenuUsuario (opcionUsuario){
    opcionUsuario && opcionUsuario === 'Login' ? mostrarLogin() :
    opcionUsuario === 'Registro' ? mostrarSignUp() : 
    opcionUsuario === 'Dashboard' ? mostrarDashboard() : 
    opcionUsuario === 'Reportes' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Dashboard' ? console.log(`Eligió: ${opcionUsuario}`) : 
    opcionUsuario === 'Mis compras' ? mostrarMisCompras() : 
    opcionUsuario === 'Salir' ? mostrarLogout() : 
    console.log('No existe');
}

export { usuario, controladorSubMenuUsuario, compras };