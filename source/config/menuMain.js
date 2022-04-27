/**
 * Función que maneja los eventos del Menú principal
 * con sus respectivas vistas (componentes)
 */

import { mostrarSeccionNosotros } from '../components/nosotros.js';
import { mostrarSeccionServicios } from '../components/servicios.js';
import { mostrarSeccionContacto } from '../components/contacto.js';

export function controladorMenuMain (opcionUsuario){
    opcionUsuario && opcionUsuario === 'Nosotros' ? mostrarSeccionNosotros() :
    opcionUsuario === 'Servicios' ? mostrarSeccionServicios() : 
    opcionUsuario === 'Contacto' ? mostrarSeccionContacto() :      
    console.log('No existe');
}