/**
 * SE DIBUJA EN EL MAIN DEL INDEX.HTML
 * LA PANTALLA DE "MIS COMPRAS" DEL CLIENTE
 */

//Importamos al Usuario y sus compras del /config/usuario
import { compras, usuario } from '../config/usuario.js'
import { llenado } from '../config/llenadoGratis.js'

//Función que crea Elementos HTML
import { crearElemento } from '../utils/crearNodos.js';

//Función que crea un Elemento Spinner
import { spinner } from './spinner.js';

//Función que dibuja toda la vista, inputs
//botones, etc. del login
const crearMiscompras = (main) => {    

  //Se crean los Nodos que se ocuparán llamando la función crearElemento()
  const section = crearElemento('section', [{type: 'id', name: 'miscomprasContainer'}]);
//   const divError = crearElemento('div', [{type: 'class', name: 'errorCampoOcultar'}]);
  const pTitulo = crearElemento('p', [{type: 'class', name: 'tituloCompras'}]);
  const divInfo = crearElemento('div', [{type: 'class', name: 'infoComprasContainer'}]);
  const img = crearElemento('img', [
    {type: 'class', name: 'imgCompras'},
    {type: 'src', name: './source/assets/botellon.png'},
    {type: 'alt', name: 'botellon-logo'}
  ]);

  const pTotalLlenos = crearElemento('p', [{type: 'class', name: 'pFraseCompras'}]);
  const spanTotalLlenos = crearElemento('span', [{type: 'class', name: 'spanCompras'}]);
  const pFraseTotal = crearElemento('span', [{type: 'class', name: 'spanFraseCompras'}]);

  const pFaltaLlenar = crearElemento('p', [{type: 'class', name: 'pFraseCompras'}]);
  const spanFaltaLlenar = crearElemento('span', [{type: 'class', name: 'spanCompras'}]);
    const pFraseLlenar = crearElemento('span', [{type: 'class', name: 'spanFraseCompras'}]);

  const divBoton = crearElemento('div', [{type: 'class', name: 'buttonsComprasContainer'}]);
  const botonComprar = crearElemento('input', [
    {
        type: 'id', 
        name: 'input-button'
    },
    {
      type: 'class', 
      name: 'comprarPedido'
    },
    {
      type: 'type', 
      name: 'submit'
    },
    {
      type: 'value', 
      name: 'Comprar'
    }
  ]);
  const botonSolicitar = crearElemento('input', [
    {
        type: 'id', 
        name: 'input-button'
    },
    {
      type: 'class', 
      name: 'solicitarLlenado'
    },
    {
      type: 'type', 
      name: 'submit'
    },
    {
      type: 'value', 
      name: 'Llenado Gratis'
    }
  ]);
  const botonHistorial = crearElemento('input', [
    {
        type: 'id', 
        name: 'input-button'
    },
    {
      type: 'class', 
      name: 'historialCompras'
    },
    {
      type: 'type', 
      name: 'submit'
    },
    {
      type: 'value', 
      name: 'Ver mi historial'
    }
  ]);
  const pLeyenda = crearElemento('p', [{type: 'class', name: 'leyendaCompras'}]);
  const pPie = crearElemento('p', [{type: 'class', name: 'pieCompras'}]);
  const spanPie = crearElemento('span', [{type: 'class', name: 'spanPieCompras'}]);

  const totalCompras = compras.isCompras ? compras.cantidad : 0;
  const cantidadRequerida = llenado ? llenado.cantidad : 10;

  //Valores de texto
  pTitulo.textContent = 'Llenado gratis:';
  pTotalLlenos.textContent = 'Haz llenado ';
  spanTotalLlenos.textContent = totalCompras;
  pFraseTotal.textContent = ' botellones.';

  pFaltaLlenar.textContent = 'Sólo te faltan ';
  spanFaltaLlenar.textContent = cantidadRequerida - totalCompras;
  pFraseLlenar.textContent = ' más para alcanzar el llenado de uno gratis';

  pLeyenda.textContent = '¡Sigue llenando para seguir ganando!';
  pPie.textContent = 'Se aplican restricciones. Cambios sin previo aviso. Programa "Llenado Gratis" a partir de: ';
  spanPie.textContent = cantidadRequerida + ' botellones.';

  //Anexamos nodos hijos en orden
  section.appendChild(pTitulo);

  spanTotalLlenos.appendChild(pFraseTotal);
  spanFaltaLlenar.appendChild(pFraseLlenar);

  pTotalLlenos.appendChild(spanTotalLlenos);
  pFaltaLlenar.appendChild(spanFaltaLlenar);

  divInfo.appendChild(img);
  divInfo.appendChild(pTotalLlenos);
  divInfo.appendChild(pFaltaLlenar);

  section.appendChild(divInfo);

  divBoton.appendChild(botonComprar);  
  divBoton.appendChild(botonSolicitar);
  divBoton.appendChild(botonHistorial);

  section.appendChild(divBoton);
  
  section.appendChild(pLeyenda);

  pPie.appendChild(spanPie);
  section.appendChild(pPie);

  main.appendChild(section);

};

//Mostramos la pantalla Login en el MAIN del index.html
const mostrarMisCompras = () => {
  //Obtenemos el nodo del main
  const main = document.querySelector("#main");

  //Borramos los nodos hijos del main
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  //Mostramos el formulario
  crearMiscompras(main);
};

/* 
//Escuchamos si hay clic los botones
document.addEventListener("click", (event) =>{
    const nodoActual = event.path[0];//Ubicamos el nodo al que se dió clic

    const isBoton = nodoActual.getAttribute('class') === 'submittButtonLogin' ? true : false;

    if(isBoton){

      //Limpiamos la caja q muestra mensajes de error
    //   const divError = document.querySelector('.errorCampoOcultar');
    //   while (divError.firstChild) {
    //     divError.removeChild(divError.firstChild);
    //   }

        const telefono = event.path[2].children[0].value;
        const password = event.path[2].children[1].value;
        
        event.preventDefault();
        
        //Obtenemos el botón
        const botonContenedor = document.querySelector('#buttonContainer');

        //Creamos un componente Spinner
        const spinnerBoton = spinner();

        //Adjuntamos el spinner al botón
        botonContenedor.appendChild(spinnerBoton);

        //Deshabilitamos el botón
        const boton = document.querySelector('.submittButtonLogin');
        boton.value = 'Validando datos'; //Cambiamos el texto del botón
        boton.setAttribute('disabled', 'true'); //Deshabilitamos el botón
        boton.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado
        
        validandoLogin(event, telefono, password, boton)
    }

}); */

export { mostrarMisCompras };
