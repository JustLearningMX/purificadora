/**
 * Función que maneja los eventos del Menú principal
 * con sus respectivas vistas (componentes)
 */

import { mostrarSeccionEnConstruccion } from '../components/construccion.js';

import { mostrarSeccionNosotros } from '../components/nosotros.js';
import { mostrarSeccionServicios } from '../components/servicios.js';
import { mostrarSeccionContacto } from '../components/contacto.js';

export function controladorMenuMain (opcionUsuario){
    opcionUsuario && opcionUsuario === 'Nosotros' ? mostrarSeccionEnConstruccion('Sección Nosotros') :
    opcionUsuario === 'Servicios' ? mostrarSeccionEnConstruccion('Sección Servicios') : 
    opcionUsuario === 'Contacto' ? mostrarSeccionEnConstruccion('Sección Contacto') :
    console.log('No existe');
}