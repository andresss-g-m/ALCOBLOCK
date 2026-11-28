import header from "../components/header"
import footer from "../components/Footer"
import nav from "../components/Nav"

function Inicio(){
    return(
        <>
            <header/>
            <sidebar/>

            <section class="row g-3" aria-label="Estadísticas generales">

                <div class="col-12 col-sm-6 col-xl">
                    <div class="card stat-card">
                        <i class="fas fa-building" aria-hidden="true"></i>
                        <h2 class="h3">245</h2>
                        <p>Empresas activas</p>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-xl">
                    <div class="card stat-card">
                        <i class="fas fa-car" aria-hidden="true"></i>
                        <h2 class="h3">1842</h2>
                        <p>Vehículos monitoreados</p>
                    </div>
              </div>

              <div class="col-12 col-sm-6 col-xl">
                    <div class="card stat-card">
                        <i class="fas fa-user" aria-hidden="true"></i>
                        <h2 class="h3">3521</h2>
                        <p>Conductores activos</p>
                 </div>
              </div>

                <div class="col-12 col-sm-6 col-xl">
                    <div class="card stat-card">
                        <i class="fas fa-microchip" aria-hidden="true"></i>
                        <h2 class="h3">1798</h2>
                        <p>Dispositivos conectados</p>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-xl">
                    <div class="card stat-card danger">
                        <i class="fas fa-circle-exclamation" aria-hidden="true"></i>
                        <h2 class="h3">18</h2>
                        <p>Alertas críticas</p>
                   </div>
               </div>

            </section>

            <section class="module" id="contenidoModulo">

                <h2 class="h4">Bienvenido a ALCOBLOCK</h2>

                <p class="text-muted">
                    Sistema integral para prevenir la conducción bajo efectos del alcohol
                    mediante monitoreo inteligente.
                </p>

                <button type="button" id="verAlertas" class="btn btn-danger">
                    Ver todas las alertas
                </button>

            </section>
        </>
    )
}