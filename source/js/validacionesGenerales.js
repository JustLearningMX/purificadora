/**
 * FUNCIÓN QUE IMPLEMENTA VALIDACIONES A LOS CAMPOS
 * INPUT EN LOS FORMULARIOS, DEVUELVEN TRUE O FALSE
 */

//Retorna false si la cadena no viene vacía
export const cadenaVacia = (string) => {
    return string.length > 0 ? false : true;
};

//Retorna true si el teléfono tiene 10 dígitos
export const telefonoDiezDigitos = (telefono) => {
    return telefono.length !== 10 ? false : true;
};

//Retorna false si el RFC no cumple con el regex: CALH809010G90
export const rfcConHomoclave = (rfc) => {
    const rfcRgx = /^[A-Z&Ñ]{3,4}[0-9]{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[0-9A]$/;
    return !rfc.match(rfcRgx) ? false : true;
};

//Retorna false si el EMAIL no cumple con el regex: correo@correo.com
export const emailValido = (email) => {
    const emailRgx = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return !email.match(emailRgx) ? false : true;
};

//Retorna false si el PASSOWRD no cumple con el regex
export const passwordValido = (password) => {
    const passwordRgx = /[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}/i;
    return !password.match(passwordRgx) ? false : true;
};

//Retorna false si dos passwords no son iguales
export const compararDosPass = (password, password2) => {
    return password !== password2 ? false : true;
};

//Retorna false si el código postal no tiene 5 dígitos (MX)
export const cpValido = (cp) => {
    return cp.length !== 5 ? false : true;
};