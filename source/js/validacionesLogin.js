
function recibiendoCampos(e, telefono, password) {
    document.write('<script type="text/javascript" src="../utils/httpClient.js"></script>');

    // e.preventDefault();
    
    const patronRgx = /[\w+(\$)*(\#)*(\%)*(\&)*(\-)*]{9}/i;

    if(telefono.value.length !== 10 || !password.value.match(patronRgx)){
        alert('Teléfono o Contraseña mal escritos')
    } else {
        const body = { "telefono": telefono.value, "password": password.value };
        requestApi('/usuarios/login', 'POST', body)
            .then((data) => {
                //Se recibe el JSON con los datos de la petición

                if(data.error) { //Si hubo un error
                    console.log(data.error);                    
                    alert("Error en el email o contraseña");

                } else { //Si todo salió bien                    
                    console.log(data);
                    //Guardamos al USUARIO y su TOKEN en el localStorage
                    window.localStorage.setItem(
                        "usuarioLogueadoPurificadora", JSON.stringify(data.user)
                    );
                    console.log(`Bienvenido ${data.user.email}`);
                    window.location.href='./dashboard.html';
                }
            
            })
            .catch((error)=>{
                console.log('Hubo un error: ', error);
            });
    }   
};