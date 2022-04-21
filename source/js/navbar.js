usuarioLogueado = window.localStorage.getItem('usuarioLogueadoPurificadora');

function logout() {
    window.localStorage.removeItem('usuarioLogueadoPurificadora');
    window.location.href='./source/html/login.html';
}

document.write('<nav id="navbar">');
    // document.write("<script src='../js/colocarBaseHref.js'></script>");

    document.write('<ul class="menu">');
        document.write('<li id="menu-items" class="selected"><a href="#inicio" class="nav-link"> Nosotros </a></li>');
        document.write('<li id="menu-items"><a href="#" class="nav-link"> Servicios </a></li>');
        document.write('<li id="menu-items"><a href="#" class="nav-link"> Clientes </a></li>');
        document.write('<li id="menu-items"><a href="#contacto" class="nav-link"> Contacto </a></li>');
    document.write('</ul>');

        // Icono y menu para usuarios
        document.write('<div class="imgUserContainer">');
            document.write('<img class="navbar-icons navbar-icon-user" src="./source/assets/icon-user2.png" alt="icono-usuario">');
            document.write('<ul class=" subMenuUser">');
                if(!usuarioLogueado){
                    document.write('<li id="menu-items-user"><a href="./source/html/login.html" class="menu-link-user">Login</a></li>');
                    document.write('<li id="menu-items-user"><a href="./source/html/signup.html" class="menu-link-user">Registro</a></li>');                    
                } else {
                    document.write('<li id="menu-items-user"><a href="#" class="menu-link-user">Mis compras</a></li>');
                    document.write('<li id="menu-items-user"><a href="./source/html/dashboard.html" class="menu-link-user">Dashboard</a></li>');                    
                    document.write('<li id="menu-items-user"><span onclick="logout()" class="nav-link menuLink">Salir</span></li>');
                }
            document.write('</ul>');
        document.write('</div>');

document.write('</nav>');