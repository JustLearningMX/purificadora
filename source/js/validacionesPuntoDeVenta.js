/**
 * FUNCIÓN QUE ESCUCHA LOS EVENTOS NECESARIOS
 * EN EL MÓDULO DE PUNTO DE VENTA
 */

import { crearElemento } from '../utils/crearNodos.js';
let contadorItem = 0;

const usuarios = [
    {
        telefono: '8339001234567',
        nombre: 'Hiram'
    },
    {
        telefono: '8338001234567',
        nombre: 'Carlos'
    },
    {
        telefono: '8337001234567',
        nombre: 'Laura'
    },
];

//Función que escucha cuando se realiza una búsqueda
// const buscador = document.querySelector('.buscador');
// buscador.addEventListener('keyup', (event) => {
//     event.preventDefault();
//     buscador.value ? console.log(buscador.value) : '';
// });


//Función a la escucha cuando se presiona el botón pagar
// const btnPagar = document.querySelector('.botonPagar');
// btnPagar.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('Cliente va a pagar sus productos');
// });

function renderizarTabla(producto){
    // console.log(producto);
    const tablaListaCompras = document.querySelector('.tablaListaCompras');
    const fila = crearElemento('tr', [{type: 'class', name: 'filaItems'}]);
    const numItem = crearElemento('td', [{type: 'class', name: 'celdaFilaItems'}]);
    const descripcionItem = crearElemento('td', [{type: 'class', name: 'celdaFilaItems'}]);
    const precioItem = crearElemento('td', [{type: 'class', name: 'celdaFilaItems'}]);

    numItem.textContent = contadorItem + 1;
    descripcionItem.textContent = `${producto.nombre} de ${producto.cantidad} ${producto.medida}`;
    precioItem.textContent = `$${producto.precio.toFixed(2)}`;

    fila.appendChild(numItem);
    fila.appendChild(descripcionItem);
    fila.appendChild(precioItem);
    tablaListaCompras.appendChild(fila);
}

export { renderizarTabla };