
import { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import "../App.css";

function Admin() {

    const [moduloActual, setModuloActual] = useState("Dashboard");

    function mostrarNotificaciones() {
        alert(
            "Notificaciones\n\n" +
            "• 2 dispositivos desconectados\n" +
            "• 5 pruebas pendientes\n" +
            "• 1 mantenimiento programado"
        );
    }

    function mostrarAlertas() {
        alert(
            "Alertas críticas\n\n" +
            "• Alcohol positivo detectado\n" +
            "• Sensor desconectado\n" +
            "• Falla de relay"
        );
    }

    function verTodasLasAlertas() {
        setModuloActual("Monitoreo y Alertas");
    }

    return (
        <div className="app-container">

            <Sidebar
                cambiarModulo={setModuloActual}
                moduloActual={moduloActual}
            />

            <main className="main-content">

                <Header
                    onNotificaciones={mostrarNotificaciones}
                    onAlertas={mostrarAlertas}
                />

                <h1 id="tituloModulo">
                    {moduloActual}
                </h1>

                {moduloActual === "Dashboard" ? (

                    <>

                        <section
                            className="row g-3"
                            aria-label="Estadísticas generales"
                        >

                            <div className="col-12 col-sm-6 col-xl">
                                <div className="card stat-card">
                                    <i className="fas fa-building"></i>
                                    <h2 className="h3">245</h2>
                                    <p>Empresas activas</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl">
                                <div className="card stat-card">
                                    <i className="fas fa-car"></i>
                                    <h2 className="h3">1842</h2>
                                    <p>Vehículos monitoreados</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl">
                                <div className="card stat-card">
                                    <i className="fas fa-user"></i>
                                    <h2 className="h3">3521</h2>
                                    <p>Conductores activos</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl">
                                <div className="card stat-card">
                                    <i className="fas fa-microchip"></i>
                                    <h2 className="h3">1798</h2>
                                    <p>Dispositivos conectados</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl">
                                <div className="card stat-card danger">
                                    <i className="fas fa-circle-exclamation"></i>
                                    <h2 className="h3">18</h2>
                                    <p>Alertas críticas</p>
                                </div>
                            </div>

                        </section>

                        <section className="module" id="contenidoModulo">

                            <h2 className="h4">
                                Bienvenido a ALCOBLOCK
                            </h2>

                            <p className="text-muted">
                                Sistema integral para prevenir la conducción
                                bajo efectos del alcohol mediante
                                monitoreo inteligente.
                            </p>

                            <button
                                type="button"
                                id="verAlertas"
                                className="btn btn-danger"
                                onClick={verTodasLasAlertas}
                            >
                                Ver todas las alertas
                            </button>

                        </section>

                    </>

                ) : moduloActual === "Monitoreo y Alertas" ? (


                    <section className="module">

                        <h2 id="tituloModulo">Alertas en Tiempo Real</h2>

                        <ul>
                            <li>🔴 Alcohol positivo detectado</li>
                            <li>🟡 Mantenimiento próximo</li>
                            <li>🔴 Sensor desconectado</li>
                            <li>🟠 Relay con falla</li>
                        </ul>

                    </section>

                ) : (


                    <section className="module" id="contenidoModulo">


                        <p>
                            Bienvenido al módulo de {moduloActual}.
                        </p>

                        <p>
                            Aquí se gestionará la información
                            correspondiente dentro de ALCOBLOCK.
                        </p>

                    </section>

                )}

            </main>

        </div>
    );
}

export default Admin;
