/**
 * DIBUJA UN COMPONENTE QUE MUESTRA UN 
 * PRODUCTO PARA VENDER (GARRAFÓN DE AFUA, GALÓN ETC.)
 */
 import { crearElemento } from '../utils/crearNodos.js';

 export function crearComponenteProductos(arrayDeProductos, arrayDeEstilos, handleBtnsAgregar, handleBtnsQuitar) {

    const ul = crearElemento('ul', [{type: 'class', name: arrayDeEstilos.ul}]);

     arrayDeProductos.map( (producto) => {
        const li = crearElemento('li', [{type: 'class', name: arrayDeEstilos.li}, {type: 'key', name: producto.id}]);

        const datosProductoContainer = crearElemento('div', [   
            {
                type: 'class', 
                name: arrayDeEstilos.divDatos
            },
        ]);

        const pNombreProducto = crearElemento('p', [   
            {
                type: 'class', 
                name: arrayDeEstilos.nombreProducto
            },
        ]);
        const pCantidadProducto = crearElemento('p', [   
            {
                type: 'class', 
                name: arrayDeEstilos.cantidadProducto
            },
        ]);
        const pPrecioProducto = crearElemento('p', [   
            {
                type: 'class', 
                name: arrayDeEstilos.precioProducto
            },
        ]);

        const contarProductoContainer = crearElemento('div', [   
            {
                type: 'class', 
                name: arrayDeEstilos.divContarBotones
            },
        ]);
        const btnAgregarProducto = crearElemento('input', [
            {
                type: 'class', 
                name: arrayDeEstilos.agregarProducto
            },
            {
                type: 'type', 
                name: 'submit'
            },
            {
                type: 'value', 
                name: '+'
            },
            {
                type: 'idProducto', 
                name: `${producto.id}`
            }
        ]);
        
        const btnQuitarProducto = crearElemento('input', [
            {
                type: 'class', 
                name: arrayDeEstilos.quitarProducto
            },
            {
                type: 'type', 
                name: 'submit'
            },
            {
                type: 'value', 
                name: '-'
            },
            {
                type: 'idProducto', 
                name: `${producto.id}`
            }
        ]);

        //Listeners para los botones        
        btnAgregarProducto.addEventListener('click', (evento)=> handleBtnsAgregar(evento.target.getAttribute('idProducto')));
        btnQuitarProducto.addEventListener('click',  (evento)=> handleBtnsQuitar(evento.target.getAttribute('idProducto')));

        //Anexamos en orden los nodos creados
        pNombreProducto.textContent = producto.nombre;
        pCantidadProducto.textContent = `${producto.cantidad} ${producto.medida} `;
        pPrecioProducto.textContent = `$${producto.precio.toFixed(2)}`;
   
        datosProductoContainer.appendChild(pNombreProducto);
        datosProductoContainer.appendChild(pCantidadProducto);
        datosProductoContainer.appendChild(pPrecioProducto);

        contarProductoContainer.appendChild(btnAgregarProducto);
        contarProductoContainer.appendChild(btnQuitarProducto);
   
        li.appendChild(datosProductoContainer);
        li.appendChild(contarProductoContainer);
        ul.appendChild(li);

     });

     return ul;
 }