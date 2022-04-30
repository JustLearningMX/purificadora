/**
 * SE DIBUJA EN EL MAIN DEL INDEX.HTML
 * EL FORMULARIO PARA REGISTRO DE USUARIO
 */

//Función que crea Elementos HTML
import { crearElemento } from '../utils/crearNodos.js';

//Función que crea un Elemento Spinner
import { agregarSpinner } from '../utils/agregarSpinner.js';

//Importamos el componente Login
import { mostrarLogin } from './login.js';

//Validaciones de los campos
import { validandoSignup } from '../js/validacionesSignup.js';

//Función que dibuja todo el formulario, inputs
//botones, etc. del login
const crearFormularioSignUp = (main) => {    

  //Se crean los Nodos que se ocuparán llamando la función crearElemento()
  const section = crearElemento('section', [{type: 'id', name: 'formularioContainer'}]);
  const divDatos = crearElemento('div', [{type: 'class', name: 'ingresarDatos'}]);
  const divError = crearElemento('div', [{type: 'class', name: 'errorCampoOcultar'}]);
  const h3 = crearElemento('h3', [{type: 'class', name: 'tituloForm'}]);
  const pLeyenda = crearElemento('p', [{type: 'class', name: 'leyendaForm'}]);
  const form = crearElemento('form', [{type: 'id', name: 'solicitar-form'}]);
  const nombreUsuario = crearElemento('input', [
      {
        type: 'name', 
        name: 'nombreUsuario'
      },
      {
        type: 'class', 
        name: 'input-form'
      },
      {
        type: 'type', 
        name: 'text'
      },
      {
        type: 'placeholder', 
        name: 'Nombres'
      }
  ], true, true); //required, autofocus  
  const apellidosUsuario = crearElemento('input', [
    {
      type: 'name', 
      name: 'apellidosUsuario'
    },
    {
      type: 'class', 
      name: 'input-form'
    },
    {
      type: 'type', 
      name: 'text'
    },
    {
      type: 'placeholder', 
      name: 'Apellidos'
    }
], true); //required  
  const celularUsuario = crearElemento('input', [
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
  ], true); //required
  const emailUsuario = crearElemento('input', [
      {
        type: 'name', 
        name: 'emailUsuario'
      },
      {
        type: 'class', 
        name: 'input-form'
      },
      {
        type: 'type', 
        name: 'email'
      },
      {
        type: 'placeholder', 
        name: 'Correo electrónico'
      }
  ]);
  const passwordUsuario = crearElemento('input', [
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
  ], true); //required);
  
  const passwordUsuarioAgain = crearElemento('input', [
    {
      type: 'name', 
      name: 'passwordUsuarioAgain'
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
      name: 'Repetir contraseña'
    }
  ], true); //required;
  const divBoton = crearElemento('div', [{type: 'id', name: 'buttonContainer'}]);
  const inputBoton = crearElemento('input', [
    {
        type: 'id', 
        name: 'input-button'
    },
    {
      type: 'class', 
      name: 'submittButtonRegister'
    },
    {
      type: 'type', 
      name: 'submit'
    },
    {
      type: 'value', 
      name: 'Registrar'
    }
  ]);
  const pPie = crearElemento('p', [{type: 'class', name: 'pieForm'}]);
  const span = crearElemento('span', [{type: 'class', name: 'linkLogin'}]);
  const divImagen = crearElemento('div', [{type: 'class', name: 'formularioImagenContainer'}]);
  const img = crearElemento('img', [
      {type: 'class', name: 'formImage'},
      {type: 'src', name: './source/assets/register.jpg'},
      {type: 'alt', name: 'Registrar'}
    ]);

  //Valores de texto
  h3.textContent = 'Regístrese';
  pLeyenda.textContent = 'Y goce de los beneficios que tenemos para usted.';
  pPie.textContent = '¿Ya dispone de cuenta?';
  span.textContent = ' Inicie sesión';

  //Anexamos nodos hijos en orden
  divBoton.appendChild(inputBoton);
  pPie.appendChild(span);
  
  form.appendChild(nombreUsuario);  
  form.appendChild(apellidosUsuario);
  form.appendChild(celularUsuario);
  form.appendChild(emailUsuario);
  form.appendChild(passwordUsuario);
  form.appendChild(passwordUsuarioAgain);
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
const mostrarSignUp = () => {
  //Obtenemos el nodo del main
  const main = document.querySelector("#main");

  //Borramos los nodos hijos del main
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  //Mostramos el formulario
  crearFormularioSignUp(main);
};

//Escuchamos si hay clic en el botón "Registrarse" o el link "Inicie sesión"
document.addEventListener("click", (event) =>{  
    const nodoActual = event.path[0];//Ubicamos el nodo al que se dió clic

    const isBoton = nodoActual.getAttribute('class') === 'submittButtonRegister' ? true : false;
    const isLinkLogin = nodoActual.getAttribute('class') === 'linkLogin' ? true : false;        

    if(isBoton){

      //Limpiamos la caja q muestra mensajes de error
      const divError = document.querySelector('.errorCampoOcultar');
      while (divError.firstChild) {
        divError.removeChild(divError.firstChild);
      }

        const nombre = event.path[2].children[0].value;
        const apellidos = event.path[2].children[1].value;
        const telefono = event.path[2].children[2].value;
        const email = event.path[2].children[3].value;
        const password = event.path[2].children[4].value;
        const password2 = event.path[2].children[5].value;
        
        event.preventDefault();
        
        //Obtenemos el botón y adjuntamos el spinner
        const botonContenedor = document.querySelector('#buttonContainer');
        const spinnerElement = agregarSpinner(botonContenedor);
        spinnerElement.style.left = '80%';

        //Deshabilitamos el botón
        const boton = document.querySelector('.submittButtonRegister');
        boton.value = 'Validando datos'; //Cambiamos el texto del botón
        boton.disabled = true; //Deshabilitamos el botón
        boton.classList.toggle("buttonAwaiting"); //Agregamos CSS al botón ya deshabilitado
        
        validandoSignup(event, nombre, apellidos, telefono, email, password, password2, boton)
    }

    if(isLinkLogin){
        mostrarLogin();
    }
});

export { mostrarSignUp };
