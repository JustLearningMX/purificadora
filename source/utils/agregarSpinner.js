import { spinner } from '../components/spinner.js';

export function agregarSpinner(elementoPadre, ancho) {    
    
    //Creamos un componente Spinner
    const spinnerElement = spinner();

    if(ancho){
        spinnerElement.style = `--size-spinner: ${ancho}` ;
    }        

    //Adjuntamos el spinner al elemento padre
    elementoPadre.appendChild(spinnerElement);

    return spinnerElement;
}