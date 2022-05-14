import { crearElemento } from '../utils/crearNodos.js';

//Se crean elementos para el componente Nosotros
const crearSeccionNosotros = ()=>{

    //Se crean los Nodos que se ocuparán llamando la función crearElemento()
    const section = crearElemento('section', [{type: 'id', name: 'sectionContainer'}]);

    //Sección de la cabecera
    const articleCabecera = crearElemento('article', [{type: 'id', name: 'articleCabecera'}]);
    const divInfoCabecera = crearElemento('div', [{type: 'class', name: 'infoCabeceraContainer'}]);

    const pSubtituloCabecera = crearElemento('p', [{type: 'class', name: 'subtitulo'}]);
    const pParrafoCabecera = crearElemento('p', [{type: 'class', name: 'parrafo'}]);

    pSubtituloCabecera.textContent = 'Río Jordán';
    pParrafoCabecera.textContent = 'Somos tu proveedor de agua purificada y bebida refrescante para tu hogar, oficina o negocio.';

    divInfoCabecera.appendChild(pSubtituloCabecera);
    divInfoCabecera.appendChild(pParrafoCabecera);

    articleCabecera.appendChild(divInfoCabecera);
    
    section.appendChild(articleCabecera);

    //Sección de 'Cómo pensamos'
    const articlePensamos = crearElemento('article', [{type: 'id', name: 'articlePensamos'}]);
    const divImagenesPensamos = crearElemento('div', [{type: 'class', name: 'imagenesPensamosContainer'}]);
    
    const divImg1 = crearElemento('div', [{type: 'class', name: 'divImagenes divImg1'}]);
    const divImg2 = crearElemento('div', [{type: 'class', name: 'divImagenes divImg2'}]);
    const divImg3 = crearElemento('div', [{type: 'class', name: 'divImagenes divImg3'}]);
    const divImg4 = crearElemento('div', [{type: 'class', name: 'divImagenes divImg4'}]);

    const img1 = crearElemento('img', [
        {type: 'class', name: 'imagenesPensamos imagenesPensamos1'},
        {type: 'src', name: '../source/assets/landinPage/agua-naturaleza.jpg'},
        {type: 'alt', name: 'agua naturaleza'}
    ]);
    const img2 = crearElemento('img', [
        {type: 'class', name: 'imagenesPensamos imagenesPensamos2'},
        {type: 'src', name: '../source/assets/landinPage/chico-bebiendo.jpg'},
        {type: 'alt', name: 'chico bebiendo'}
    ]);
    const img3 = crearElemento('img', [
        {type: 'class', name: 'imagenesPensamos imagenesPensamos3'},
        {type: 'src', name: '../source/assets/landinPage/repartidor-y-clienta.png'},
        {type: 'alt', name: 'repartidor y clienta'}
    ]);
    const img4 = crearElemento('img', [
        {type: 'class', name: 'imagenesPensamos imagenesPensamos4'},
        {type: 'src', name: '../source/assets/landinPage/botella-acostada.jpg'},
        {type: 'alt', name: 'botella acostada'}
    ]);

    divImg1.appendChild(img1);
    divImg2.appendChild(img2);
    divImg3.appendChild(img3);
    divImg4.appendChild(img4);

    const divInfoPensamos = crearElemento('div', [{type: 'class', name: 'infoPensamosContainer'}]);
    const pSubtituloPensamos = crearElemento('p', [{type: 'class', name: 'subtituloPensamos'}]);
    const pParrafoPensamos = crearElemento('p', [{type: 'class', name: 'parrafoPensamos'}]);

    pSubtituloPensamos.textContent = '¿Cómo pensamos?';
    pParrafoPensamos.textContent = "Estamos comprometidos con tu bienestar y el de los tuyos. Por eso amamos entregarte agua fresca, segura, limpia y de agradable sabor. Contamos con altos estándares de calidad y cada gota pasa a través de un riguroso proceso para asegurarnos de que recibirás productos saludables a bajos costos.";

    divInfoPensamos.appendChild(pSubtituloPensamos);
    divInfoPensamos.appendChild(pParrafoPensamos);

    divImagenesPensamos.appendChild(divImg1);
    divImagenesPensamos.appendChild(divImg2);
    divImagenesPensamos.appendChild(divImg3);
    divImagenesPensamos.appendChild(divImg4);

    articlePensamos.appendChild(divImagenesPensamos);
    articlePensamos.appendChild(divInfoPensamos);

    section.appendChild(articlePensamos);

    return section;
}

export function mostrarSeccionNosotros() {
    const main = document.querySelector('#main');

    //Borramos los nodos hijos del main
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //Anexamos la sección Nosotros al Main del index.html
    main.appendChild(crearSeccionNosotros());    
}