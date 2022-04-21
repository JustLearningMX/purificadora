function recibiendoCampos(e, telefono, password) {
    e.preventDefault();
    
    if(telefono.length !== 10)
        alert('El número de teléfono debe ser 10 dígitos');

    // Regex para validar el password. Validación de password cumpla
    // con: min 9 caract, letras y números y un caracter especial:
    // $ # % &. Ejemplo: #mipa$$word18
    const patronRgx = "/[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}+/i";
    if(password !== patronRgx)
        alert('El password debe tener mínimo 9 caracteres, compuesto de letras, números y mínimo un caracter especial: $ # % &');
    
}