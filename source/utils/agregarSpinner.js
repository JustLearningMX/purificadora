import { spinner } from '../components/spinner.js';

export function agregarSpinner(elementoPadre) {
    
    //Creamos un componente Spinner
    const spinnerElement = spinner();

    //Adjuntamos el spinner al elemento padre
    elementoPadre.appendChild(spinnerElement);

    return spinnerElement;
}