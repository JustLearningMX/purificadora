/**
 * FUNCIÓN QUE EJECUTA EVENTOS DE ACUERDO A LOS BOTONES,
 * YA SEA PARA USUARIOS, VENTAS, ETC.
 */

import { updateUsuario } from '../js/peticiones/updateUsuario.js';
import { confirmarDeleteUsuario } from '../js/peticiones/deleteUsuario.js';
import { confirmarCambiarPassword } from '../js/peticiones/cambiarPassword.js';
import { cerrarMensajeGeneral } from '../utils/mensajeGeneral.js';

const evento = {
    //Botones en "Dashboard"
    updateUsuario: (boton) => updateUsuario(boton),
    deleteUsuario: () => confirmarDeleteUsuario(),
    cambiarPassUsuario: () => confirmarCambiarPassword(),

    //Botones en "Mis compras"
    comprarPedido: () => alert('Solicitó una compra'),
    solicitarLlenado: () => alert('Eliminó el usuario'),
    historialCompras: () => alert('Cambió el password del usuario'),

    //Cierra la x del mensaje general en el body
    cerrarMsjGeneral: () => cerrarMensajeGeneral(),
}


window.addEventListener("click", (event) =>{
    const boton = event.composedPath()[0];

    boton.classList.contains('updateButton') ? evento['updateUsuario'](boton) :
    boton.classList.contains('deleteButton') ? evento['deleteUsuario']() :
    boton.classList.contains('linkCambiarPass') ? evento['cambiarPassUsuario']() :
    boton.classList.contains('comprarPedido') ? evento['comprarPedido']() :
    boton.classList.contains('solicitarLlenado') ? evento['solicitarLlenado']() :
    boton.classList.contains('historialCompras') ? evento['historialCompras']() :
    boton.classList.contains('cerrar') ? evento['cerrarMsjGeneral']() :
    '';
});