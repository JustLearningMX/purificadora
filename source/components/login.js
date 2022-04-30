/**
 * SE DIBUJA EN EL MAIN DEL INDEX.HTML
 * EL FORMULARIO PARA EL LOGIN DE USUARIO
 */

//Función que crea Elementos HTML
import { crearElemento } from '../utils/crearNodos.js';

//Función que crea y poner un Elemento Spinner a otro Elemento HTML
import { agregarSpinner } from '../utils/agregarSpinner.js'

//Importamos el componente Signup
import { mostrarSignUp } from './signup.js';

//Validaciones de los campos
import { validandoLogin } from '../js/validacionesLogin.js';

//Función que dibuja todo el formulario, inputs
//botones, etc. del login
const crearFormularioLogin = (main) => {    

  //Se crean los Nodos que se ocuparán llamando la función crearElemento()
  const section = crearElemento('section', [{type: 'id', name: 'formularioContainer'}]);
  const divDatos = crearElemento('div', [{type: 'class', name: 'ingresarDatos'}]);
  const divError = crearElemento('div', [{type: 'class', name: 'errorCampoOcultar'}]);
  const h3 = crearElemento('h3', [{type: 'class', name: 'tituloForm'}]);
  const pLeyenda = crearElemento('p', [{type: 'class', name: 'leyendaForm'}]);
  const form = crearElemento('form', [{type: 'id', name: 'solicitar-form'}]);
  const inputCelular = crearElemento('input', [
      {
        type: 'name', 
        name: 'celularUsuario'
      },
      {
        type: 'class', 
        name: 'input-form'
      },
      {
        type: 'type', 
        name: 'number'
      },
      {
        type: 'placeholder', 
        name: 'Celular a 10 dígitos'
      }
    ], true, true); //Required, Autofocus
    const inputPassword = crearElemento('input', [
        {
          type: 'name', 
          name: 'passwordUsuario'
        },
        {
          type: 'class', 
          name: 'input-form'
        },
        {
          type: 'type', 
          name: 'password'
        },
        {
          type: 'placeholder', 
          name: 'Contraseña'
        }
      ], true); // required
  const divBoton = crearElemento('div', [{type: 'id', name: 'buttonContainer'}]);
  const inputBoton = crearElemento('input', [
    {
      type: 'id', 
      name: 'input-button'
    },
    {
      type: 'class', 
      name: 'submittButtonLogin'
    },
    {
      type: 'type', 
      name: 'submit'
    },
    {
      type: 'value', 
      name: 'Iniciar sesión'
    }
  ]);
  const pPie = crearElemento('p', [{type: 'class', name: 'pieForm'}]);
  const span = crearElemento('span', [{type: 'class', name: 'linkRegistrar'}]);
  const divImagen = crearElemento('div', [{type: 'class', name: 'formularioImagenContainer'}]);
  const img = crearElemento('img', [
      {type: 'class', name: 'formImage'},
      {type: 'src', name: './source/assets/login.jpg'},
      {type: 'alt', name: 'Login'}
    ]);

  //Valores de texto
  h3.textContent = 'Inicie sesión';
  pLeyenda.textContent = 'Acceda a su información y conozca sus compras.';
  pPie.textContent = '¿No dispone de una cuenta?';
  span.textContent = ' Regístrese aquí';

  //Anexamos nodos hijos en orden
  divBoton.appendChild(inputBoton);
  pPie.appendChild(span);
  
  form.appendChild(inputCelular);
  form.appendChild(inputPassword);
  form.appendChild(divBoton);
  form.appendChild(pPie);

  divImagen.appendChild(img);

  divDatos.appendChild(h3);
  divDatos.appendChild(pLeyenda);
  divDatos.appendChild(divError);
  divDatos.appendChild(form);

  section.appendChild(divDatos);
  section.appendChild(divImagen);

  main.appendChild(section);

};

//Mostramos la pantalla Login en el MAIN del index.html
const mostrarLogin = () => {
  //Obtenemos el nodo del main
  const main = document.querySelector("#main");

  //Borramos los nodos hijos del main
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  //Mostramos el formulario
  crearFormularioLogin(main);
};

//Escuchamos si hay clic en el botón "Iniciar sesión" o el link "Regístrese aquí"
document.addEventListener("click", (event) =>{
    const nodoActual = event.path[0];//Ubicamos el nodo al que se dió clic

    const isBoton = nodoActual.getAttribute('class') === 'submittButtonLogin' ? true : false;
    const isLinkRegistrar = nodoActual.getAttribute('class') === 'linkRegistrar' ? true : false;

    if(isBoton){

      //Limpiamos la caja q muestra mensajes de error
      const divError = document.querySelector('.errorCampoOcultar');
      while (divError.firstChild) {
        divError.removeChild(divError.firstChild);
      }

        const telefono = event.path[2].children[0].value;
        const password = event.path[2].children[1].value;
        
        event.preventDefault();

        //Obtenemos el contenedor del botón, y lo enviamos para ponerle el spinner
        const botonContenedor = document.querySelector('#buttonContainer');
        const spinnerElement = agregarSpinner(botonContenedor);
        spinnerElement.style.left = '80%';

        //Deshabilitamos el botón
        const boton = document.querySelector('.submittButtonLogin');
        boton.value = 'Validando datos'; //Cambiamos el texto del botón
        boton.disabled = true; //Deshabilitamos el botón
        boton.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado
        
        validandoLogin(event, telefono, password, boton);
    }

    if(isLinkRegistrar){
        mostrarSignUp();
    }
});

export { mostrarLogin };
