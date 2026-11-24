// BOTÓN NOTIFICACIONES

document.getElementById("btnNotificaciones")
.addEventListener("click", () => {

    alert(
        "Notificaciones\n\n" +
        "• 2 dispositivos desconectados\n" +
        "• 5 pruebas pendientes\n" +
        "• 1 mantenimiento programado"
    );

});

// BOTÓN ALERTAS

document.getElementById("btnAlertas")
.addEventListener("click", () => {

    alert(
        "Alertas críticas\n\n" +
        "• Alcohol positivo detectado\n" +
        "• Sensor desconectado\n" +
        "• Falla de relay"
    );

});

// VER TODAS LAS ALERTAS

document.addEventListener("click", (e) => {

    if(e.target.id === "verAlertas"){

        document.getElementById("tituloModulo").textContent =
        "Monitoreo y Alertas";

        document.getElementById("contenidoModulo").innerHTML = `
            <h2>Alertas en Tiempo Real</h2>

            <ul>
                <li>🔴 Alcohol positivo detectado</li>
                <li>🟡 Mantenimiento próximo</li>
                <li>🔴 Sensor desconectado</li>
                <li>🟠 Relay con falla</li>
            </ul>
        `;
    }

});

// MENÚ LATERAL
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", (e) => {
        
        // SI EL ENLACE ES PARA LOGOUT, NO LO BLOQUEES Y DEJA QUE PHP HAGA SU TRABAJO
        if (item.getAttribute('href') === 'logout.php') {
            return; 
        }

        e.preventDefault();

        menuItems.forEach(i =>
            i.classList.remove("active")
        );

        item.classList.add("active");

        const modulo = item.getAttribute("data-module");

        document.getElementById("tituloModulo").textContent = modulo;

        document.getElementById("contenidoModulo").innerHTML = `
            <h2>${modulo}</h2>
            <p>Bienvenido al módulo de ${modulo}.</p>
            <p>Aquí se gestionará la información correspondiente dentro de ALCOLOCK.</p>
        `;
    });

});


// CAMBIAR ENTRE LOGIN Y REGISTRO

function toggleForm() {

    document.getElementById('loginForm').classList.toggle('d-none');

    document.getElementById('registerForm').classList.toggle('d-none');

    hideMessage();
}


// MOSTRAR MENSAJE

function showMessage(message) {

    const box = document.getElementById('message');

    box.textContent = message;

    box.className = 'alert alert-danger';

}


// OCULTAR MENSAJE

function hideMessage() {

    const box = document.getElementById('message');

    box.textContent = '';

    box.className = 'alert alert-danger d-none';

}


// INICIO DE SESIÓN

document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    showMessage('El inicio de sesión requiere conectar un backend y una base de datos.');

});


// REGISTRO

document.getElementById('registerForm').addEventListener('submit', function(event) {

    event.preventDefault();

    showMessage('El registro requiere conectar un backend y una base de datos.');

});


// REDIRIGIR AL LOGIN DESPUÉS DE CERRAR SESIÓN

window.addEventListener('load', function() {

    setTimeout(function() {

        window.location.replace('login.html');

    }, 1500);

});
