
import logo from "../img/Logo.png";

function Sidebar({ cambiarModulo, moduloActual }) {

    const menu = [
        { nombre: "Dashboard", icono: "fas fa-chart-line" },
        { nombre: "Gestión Empresarial", icono: "fas fa-building" },
        { nombre: "Conductores y Vehículos", icono: "fas fa-users" },
        { nombre: "Dispositivos", icono: "fas fa-microchip" },
        { nombre: "Pruebas de Alcoholemia", icono: "fas fa-wind" },
        { nombre: "Monitoreo y Alertas", icono: "fas fa-triangle-exclamation" },
        { nombre: "Analítica y Reportes", icono: "fas fa-chart-pie" },
        { nombre: "Usuarios y Roles", icono: "fas fa-user-shield" },
        { nombre: "Configuración", icono: "fas fa-gear" }
    ];

    return (
        <aside className="sidebar" aria-label="Menú principal">

            <div className="logo">

                <img
                    src={logo}
                    alt="Logo de ALCOBLOCK"
                    width="100"
                />

                <p className="mt-2">
                    Seguridad Vial Inteligente
                </p>

            </div>

            <nav>

                {menu.map((item) => (

                    <a
                        href="#"
                        key={item.nombre}
                        className={`menu-item ${
                            moduloActual === item.nombre ? "active" : ""
                        }`}
                        onClick={(e) => {
                            e.preventDefault();
                            cambiarModulo(item.nombre);
                        }}
                    >

                        <i className={item.icono}></i>

                        {item.nombre}

                    </a>

                ))}

                <a
                    href="login.html"
                    className="menu-item text-danger"
                >
                    <i className="fas fa-sign-out-alt"></i>
                    Cerrar Sesión
                </a>

            </nav>

        </aside>
    );
}

export default Sidebar;
