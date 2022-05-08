import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Nosotros
const crearSeccionEnConstruccion = (mensaje)=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'enConstruccionContainer'}]);
    const p = crearElemento('p', [{type: 'class', name: 'subTema'}]);
    // const p2 = crearElemento('p', [{type: 'class', name: 'subTema'}]);
    const div = crearElemento('div', [{type: 'class', name: 'imgContainerConstruccion'}]);
    // const div2 = crearElemento('div', [{type: 'class', name: 'imgContainerConstruccion'}]);
    const img = crearElemento('img', [
        {type: 'class', name: 'enConstruccionImg'},
        {type: 'src', name: './source/assets/enconstruccion.png'},
        {type: 'alt', name: 'en construcción'}
      ]);

    p.textContent = `¡Próximamente aquí ${mensaje}!`;
    // p2.textContent = 'Prueba';
    
    section.appendChild(p);

    div.appendChild(img);
    section.appendChild(div);

    return section;
}

export function mostrarSeccionEnConstruccion(mensaje) {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección En Construcción al Main del index.html
    main.appendChild(crearSeccionEnConstruccion(mensaje));
}