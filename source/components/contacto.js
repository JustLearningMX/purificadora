import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Contacto
const crearSeccionContacto = ()=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionContainer'}]);
    const p = crearElemento('p', [{type: 'class', name: 'subTema'}]);

    p.textContent = 'Sección Contacto';
    
    section.appendChild(p);

    return section;
}

export function mostrarSeccionContacto() {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección Contacto al Main del index.html
    main.appendChild(crearSeccionContacto());    
}