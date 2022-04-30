import { crearElemento } from '../utils/crearNodos.js';
import { usuario } from '../config/usuario.js'

//Se crean elementos para el componente Dashboard
const crearDashboard = ()=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'formularioDashboard'}]);
    const divTitulo = crearElemento('div', [{type: 'class', name: 'divTitulo'}]);
    const h3 = crearElemento('h3', [{type: 'class', name: 'tituloDashboard'}]);
    const pLeyenda = crearElemento('p', [{type: 'class', name: 'leyendaForm'}]);
    const divError = crearElemento('div', [{type: 'class', name: 'errorCampoOcultar'}]);
    const divDatosCuenta = crearElemento('div', [{type: 'class', name: 'divDatosDashboard divCuenta'}]);
    const divCambiarPass = crearElemento('div', [{type: 'class', name: 'divDatosDashboard divCambiarPass'}]);
    const spanPass = crearElemento('span', [{type: 'class', name: 'linkCambiarPass'}]);
    const divDatosPersonales = crearElemento('div', [{type: 'class', name: 'divDatosDashboard divDatosPersonales'}]);
    const divDatosOtros = crearElemento('div', [{type: 'class', name: 'divDatosDashboard divDatosOtros'}]);

    const labelNombre = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'nombreUsuario'
    }
    ]);
    const inputNombre = crearElemento('input', [
        {
            type: 'name', 
            name: 'nombreUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Nombres'
        }
    ], true, true); //Required, Autofocus

    const labelApellidos = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'apellidoUsuario'
    }
    ]);
    const inputApellidos = crearElemento('input', [
        {
            type: 'name', 
            name: 'apellidoUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Apellidos'
        }
    ], true); //Required

    const labelTipoUsuario = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'tipoUsuario'
    }
    ]);
    const inputTipo = crearElemento('input', [
        {
            type: 'name', 
            name: 'tipoUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Tipo de usuario'
        }
    ]);
    
    const labelEmailUsuario = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'emailUsuario'
    }
    ]);
    const inputEmail = crearElemento('input', [
        {
            type: 'name', 
            name: 'emailUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'email'
        },
        {
            type: 'placeholder', 
            name: 'Email del usuario'
        }
    ], true); //Required

    const labelCelular = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'celularUsuario'
    }
    ]);
    const inputCelular = crearElemento('input', [
        {
            type: 'name', 
            name: 'celularUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'number'
        },
        {
            type: 'placeholder', 
            name: 'Celular a 10 dígitos'
        }
    ], true); //Required

    const labelDireccion = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'direccionUsuario'
    }
    ]);
    const inputDireccion = crearElemento('input', [
        {
            type: 'name', 
            name: 'direccionUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Calle, número y colonia'
        }
    ]);

    const labelCiudad = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'ciudadUsuario'
    }
    ]);
    const inputCiudad = crearElemento('input', [
        {
            type: 'name', 
            name: 'ciudadUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Ciudad'
        }
    ]);

    const labelEstado = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'estadoUsuario'
    }
    ]);
    const inputEstado = crearElemento('input', [
        {
            type: 'name', 
            name: 'estadoUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Estado'
        }
    ]);
    
    const labelCp = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'cpUsuario'
    }
    ]);
    const inputCp = crearElemento('input', [
        {
            type: 'name', 
            name: 'cpUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'Código postal'
        }
    ]);

    const labelRfc = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'rfcUsuario'
    }
    ]);
    const inputRfc = crearElemento('input', [
        {
            type: 'name', 
            name: 'rfcUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'text'
        },
        {
            type: 'placeholder', 
            name: 'RFC'
        }
    ]);

    const labelEmailRecuperacion = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'emailRecuperacionUsuario'
    }
    ]);
    const inputEmailRecuperacion = crearElemento('input', [
        {
            type: 'name', 
            name: 'emailRecuperacionUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'email'
        },
        {
            type: 'placeholder', 
            name: 'Email secundario'
        }
    ]);

    const labelTelefonoSecundario = crearElemento('label', [{
        type: 'class',
        name: 'label'
    },{
        type: 'for',
        name: 'telefonoSecundarioUsuario'
    }
    ]);
    const inputTelefonoSecundario = crearElemento('input', [
        {
            type: 'name', 
            name: 'telefonoSecundarioUsuario'
        },
        {
            type: 'class', 
            name: 'input-dashboard'
        },
        {
            type: 'type', 
            name: 'number'
        },
        {
            type: 'placeholder', 
            name: 'Teléfono secundario'
        }
    ]);

    const divBoton = crearElemento('div', [{type: 'class', name: 'divBotonesDashboard'}]);
    const updateBoton = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },
        {
        type: 'class', 
        name: 'updateButton'
        },
        {
        type: 'type', 
        name: 'submit'
        },
        {
        type: 'value', 
        name: 'Actualizar datos'
        }
    ]);
    const deleteBoton = crearElemento('input', [
        {
            type: 'id', 
            name: 'input-button'
        },    
        {
        type: 'class', 
        name: 'deleteButton'
        },
        {
        type: 'type', 
        name: 'submit'
        },
        {
        type: 'value', 
        name: 'Eliminar cuenta'
        }
    ]);

    //Valores de texto
    h3.textContent = 'Mis Datos';
    pLeyenda.textContent = 'Actualice su información, cambie su contraseña.';
    labelNombre.textContent = 'Nombre:';
    labelApellidos.textContent = 'Apellidos:';
    labelTipoUsuario.textContent = 'Tipo de usuario:';
    inputTipo.disabled = true;
    labelEmailUsuario.textContent = 'Email:';
    labelCelular.textContent = 'Número de teléfono:';
    labelDireccion.textContent = 'Dirección:';
    labelCiudad.textContent = 'Ciudad:';
    labelEstado.textContent = 'Estado:';
    labelCp.textContent = 'Código Postal:';
    labelRfc.textContent = 'RFC:';
    labelEmailRecuperacion.textContent = 'Email de recuperación:';
    labelTelefonoSecundario.textContent = 'Teléfono secundario:';
    spanPass.textContent = 'Cambiar contraseña'

    //Revisamos si /config/usuario.js --> usuarios.datos tiene 
    //datos para ponerlos en los inputs correspondientes
    if(usuario.datos){
        inputNombre.value = usuario.datos.nombre;
        inputApellidos.value = usuario.datos.apellidos;
        inputTipo.value = usuario.datos.tipo;
        if(usuario.datos.email)
            inputEmail.value = usuario.datos.email;
        inputCelular.value = usuario.datos.telefono;

        if(usuario.datos.direccion)
            inputDireccion.value = usuario.datos.direccion;
        if(usuario.datos.ciudad)
            inputCiudad.value = usuario.datos.ciudad
        if(usuario.datos.estado)
            inputEstado.value = usuario.datos.estado;
        if(usuario.datos.cp)
            inputCp.value = usuario.datos.cp;
        if(usuario.datos.rfc)
            inputRfc.value = usuario.datos.rfc;

        if(usuario.datos.emailRecuperacion)
            inputEmailRecuperacion.value = usuario.datos.emailRecuperacion;
        if(usuario.datos.telefonoRecuperacion)
            inputTelefonoSecundario.value = usuario.datos.telefonoRecuperacion;
    }

    //Anexamos nodos hijos en orden
    divBoton.appendChild(updateBoton);
    divBoton.appendChild(deleteBoton);
    
    divDatosCuenta.appendChild(labelNombre);
    divDatosCuenta.appendChild(inputNombre);
    divDatosCuenta.appendChild(labelApellidos);
    divDatosCuenta.appendChild(inputApellidos);
    divDatosCuenta.appendChild(labelTipoUsuario);
    divDatosCuenta.appendChild(inputTipo);
    divDatosCuenta.appendChild(labelEmailUsuario);
    divDatosCuenta.appendChild(inputEmail);
    divDatosCuenta.appendChild(labelCelular);
    divDatosCuenta.appendChild(inputCelular);

    divCambiarPass.appendChild(spanPass);

    divDatosPersonales.appendChild(labelDireccion);
    divDatosPersonales.appendChild(inputDireccion);
    divDatosPersonales.appendChild(labelCiudad);
    divDatosPersonales.appendChild(inputCiudad);
    divDatosPersonales.appendChild(labelEstado);
    divDatosPersonales.appendChild(inputEstado);
    divDatosPersonales.appendChild(labelCp);
    divDatosPersonales.appendChild(inputCp);
    divDatosPersonales.appendChild(labelRfc);
    divDatosPersonales.appendChild(inputRfc);

    divDatosOtros.appendChild(labelEmailRecuperacion);
    divDatosOtros.appendChild(inputEmailRecuperacion);
    divDatosOtros.appendChild(labelTelefonoSecundario);
    divDatosOtros.appendChild(inputTelefonoSecundario);

    divTitulo.appendChild(h3);
    divTitulo.appendChild(pLeyenda);
    section.appendChild(divTitulo);
    section.appendChild(divError);
    section.appendChild(divDatosCuenta);
    section.appendChild(divCambiarPass);
    section.appendChild(divDatosPersonales);
    section.appendChild(divDatosOtros);
    section.appendChild(divBoton);

    main.appendChild(section);
}

export function mostrarDashboard() {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Mostramos el Dashboard
    crearDashboard(main);    
}