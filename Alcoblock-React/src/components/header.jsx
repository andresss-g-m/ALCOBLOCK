import { Bell, TriangleAlert } from "lucide-react";

function Header({ onNotificaciones, onAlertas }){
    return(
        <header className="topbar">

            <h1 className="h3 mb-0" id="tituloModulo">Dashboard</h1>

            <div className="topbar-actions d-flex flex-wrap gap-2 align-items-center">

                <input
                    type="search"
                    className="form-control"
                    placeholder="Buscar empresa, conductor o vehículo"
                    aria-label="Buscar empresa, conductor o vehículo"
                    style={{ maxWidth: "280px" }}
                />

                <button type="button" 
                    id="btnNotificaciones" 
                    className="icon-btn" 
                    aria-label="Notificaciones"
                    onClick={onNotificaciones}>
                    <i className="fas fa-bell" aria-hidden="true"></i>
                    <Bell size={20} color="#111827" />
                </button>

                <button type="button" 
                    id="btnAlertas" 
                    className="icon-btn text-danger" 
                    aria-label="Alertas críticas"
                    onClick={onAlertas}>
                    <i className="fas fa-triangle-exclamation" aria-hidden="true"></i>
                    <TriangleAlert size={20} color="#EF3340" />
                </button>

                <div className="user">
                    <i className="fas fa-user-circle fa-lg" aria-hidden="true"></i>
                    <span>Usuario</span>
                </div>

            </div>
        </header>
    );
}

export default Header;