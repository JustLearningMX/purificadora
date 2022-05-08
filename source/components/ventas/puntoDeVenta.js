/**
 * IMPLEMENTA FUNCIONES QUE PERMITEN DIBUJAR 
 * UNA VENTANA PARA EL PUNTO DE VENTA
 */
 import { crearElemento } from '../../utils/crearNodos.js';
 import { crearComponenteProductos } from '../productos.js';

function crearVentanaPuntoDeVenta(main) {

    //Sección principal de todo el punto de venta
    const puntoDeVentaContainer = crearElemento('section', [{type: 'id', name: 'puntoDeVentaContainer'}]);

    //Sección para la búsqueda del cliente
    const sectionSearch = crearElemento('section', [{type: 'id', name: 'searchContainer'}, {type: 'class', name: 'containersVentas'}]);
    const buscador = crearElemento('input', [
        {
            type: 'name', 
            name: 'buscador'
        },
        {
            type: 'class', 
            name: 'inputsVentas buscador'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Ingrese número de teléfono'
        }
    ], null, true); //Not required, Autofocus
    // sectionSearch.textContent= 'Search';

    //Sección que muestra lo que el cliente lleva
    const sectionListaCompras = crearElemento('section', [{type: 'id', name: 'listaDeComprasContainer'}, {type: 'class', name: 'containersVentas'}]);
    // sectionListaCompras.textContent= 'Lista de compras';
    const tablaListaCompras = crearElemento('table', [{type: 'class', name: 'tablaListaCompras'}]); 
    const filaEncabezados = crearElemento('tr', [{type: 'class', name: 'filaEncabezados'}]);
    const encabezadoItem = crearElemento('td', [{type: 'class', name: 'encabezadoItem'}]);
    const encabezadoDescripcion = crearElemento('td', [{type: 'class', name: 'encabezadoDescripcion'}]);
    const encabezadoPrecio = crearElemento('td', [{type: 'class', name: 'encabezadoPrecio'}]);

    encabezadoItem.textContent = '#';
    encabezadoDescripcion.textContent = 'Descripción';
    encabezadoPrecio.textContent = 'Precio';

    filaEncabezados.appendChild(encabezadoItem);
    filaEncabezados.appendChild(encabezadoDescripcion);
    filaEncabezados.appendChild(encabezadoPrecio);
    tablaListaCompras.appendChild(filaEncabezados);
    sectionListaCompras.appendChild(tablaListaCompras);

    //Sección que muestra los productos que se pueden vender
    const sectionProductosDisponibles = crearElemento('section', [{type: 'id', name: 'listaDeProductosContainer'}, {type: 'class', name: 'containersVentas'}]);

    const arrayDeProductos = [
        {
            id: 1,
            nombre: 'Garrafón',
            medida: 'litros',
            cantidad: 20,
            precio: 18,
        },
        {
            id: 2,
            nombre: 'Galón',
            medida: 'litros',
            cantidad: 4,
            precio: 5,
        },
        {
            id: 3,
            nombre: 'Litro',
            medida: 'litros',
            cantidad: 1,
            precio: 1.5,
        }
    ];

    const arrayDeEstilosSeccionProductos =
    {
        ul: 'productosContainer',
        li: 'itemProductos',
        divDatos: 'divDatosContainer',
        nombreProducto: 'nombreProducto',
        cantidadProducto: 'cantidadProducto',
        precioProducto: 'precioProducto',
        divContarBotones: 'divContarBotones',
        agregarProducto: 'agregarProducto',
        quitarProducto: 'quitarProducto'

    };

    const ul = crearComponenteProductos(arrayDeProductos, arrayDeEstilosSeccionProductos);
    sectionProductosDisponibles.appendChild(ul);

    //Sección que muestra el resumen a pagar
    const sectionCarritoDeCompras = crearElemento('section', [
        {type: 'id', name: 'carritoDeComprasContainer'}, 
        {type: 'class', name: 'containersVentas'}
    ]);

    const divSubtotal = crearElemento('section', [ 
        {type: 'class', name: 'divSubtotal'}]);
    const labelSubtotal = crearElemento('label', [{
            type: 'class',
            name: 'labelsPuntoDeVenta labelSubtotal'
        },{
            type: 'for',
            name: 'inputSubtotal'
        }
    ]);
    const inputSubtotal = crearElemento('input', [
        {
            type: 'name', 
            name: 'inputSubtotal'
        },
        {
            type: 'class', 
            name: 'inputsCarrito inputSubtotal'
        },
        {
            type: 'type', 
            name: 'number'
        },
        {
            type: 'placeholder', 
            name: '$0.00'
        }
    ], true, null); //Required, not autofocus

    const divDescuento = crearElemento('section', [ 
            {type: 'class', name: 'divDescuento'}]);
    const labelDescuento = crearElemento('label', [{
            type: 'class',
            name: 'labelsPuntoDeVenta labelDescuento'
        },{
            type: 'for',
            name: 'inputDescuento'
        }
    ]);
    const inputDescuento = crearElemento('input', [
        {
            type: 'name', 
            name: 'inputDescuento'
        },
        {
            type: 'class', 
            name: 'inputsCarrito inputDescuento'
        },
        {
            type: 'type', 
            name: 'number'
        },
        {
            type: 'placeholder', 
            name: '$0.00'
        }
    ], null, null); //not Required, not autofocus

    const divTotal = crearElemento('section', [ 
        {type: 'class', name: 'divTotal'}]);
    const labelTotal = crearElemento('label', [{
            type: 'class',
            name: 'labelsPuntoDeVenta labelTotal'
        },{
            type: 'for',
            name: 'inputTotal'
        }
    ]);
    const inputTotal = crearElemento('input', [
        {
            type: 'name', 
            name: 'inputTotal'
        },
        {
            type: 'class', 
            name: 'inputsCarrito inputTotal'
        },
        {
            type: 'type', 
            name: 'number'
        },
        {
            type: 'placeholder', 
            name: '$0.00'
        }
    ], true, null); //Required, not autofocus

    const divInputBtnCobrar = crearElemento('section', [ 
        {type: 'class', name: 'divInputBtnCobrar'}
    ]);
    const botonPagar = crearElemento('input', [
        {
        type: 'class', 
        name: 'botonPagar'
        },
        {
        type: 'type', 
        name: 'submit'
        },
        {
        type: 'value', 
        name: 'Pagar'
        }
    ]);

    labelSubtotal.textContent = 'Subtotal:';
    labelDescuento.textContent = 'Descuento:';
    labelTotal.textContent = 'Total:'

    divSubtotal.appendChild(labelSubtotal);
    divSubtotal.appendChild(inputSubtotal);

    divDescuento.appendChild(labelDescuento);
    divDescuento.appendChild(inputDescuento);

    divTotal.appendChild(labelTotal);
    divTotal.appendChild(inputTotal);

    divInputBtnCobrar.appendChild(botonPagar);

    sectionCarritoDeCompras.appendChild(divSubtotal);
    sectionCarritoDeCompras.appendChild(divDescuento);
    sectionCarritoDeCompras.appendChild(divTotal);
    sectionCarritoDeCompras.appendChild(divInputBtnCobrar);
    // sectionCarritoDeCompras.textContent= 'Carrito de compras';

    //Anexamos el input del search
    sectionSearch.appendChild(buscador);

    //Anexamos los nodos principales
    puntoDeVentaContainer.appendChild(sectionSearch);
    puntoDeVentaContainer.appendChild(sectionListaCompras);
    puntoDeVentaContainer.appendChild(sectionProductosDisponibles);
    puntoDeVentaContainer.appendChild(sectionCarritoDeCompras);

    main.appendChild(puntoDeVentaContainer);
}

export function ventanaDePuntoDeVenta() {

    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    crearVentanaPuntoDeVenta(main);
}