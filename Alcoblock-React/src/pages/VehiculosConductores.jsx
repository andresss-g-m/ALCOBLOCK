import "./VehiculosConductores.css";

export default function VehiculosConductores() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="layout">
      <nav className="module-nav" aria-label="Secciones del módulo">
        <span className="module-nav__title">Vehículo y Conductores</span>
        <ul className="module-nav__links">
          <li><a href="#bloque-conductores">1. Conductores</a></li>
          <li><a href="#bloque-vehiculos">2. Vehículos</a></li>
          <li><a href="#bloque-asignacion">3. Asignación</a></li>
        </ul>
      </nav>

      {/* BLOQUE 1: CONDUCTORES */}
      <section id="bloque-conductores" className="module-group">
        <h2 className="module-group__header">Bloque 1 Conductores</h2>

        {/*Registrar Conductor */}
        <article className="panel panel--form">
          <h3 className="panel__title">Registrar Conductor</h3>
          <form onSubmit={handleSubmit}>
            <div className="field-pair">
              <input type="text" name="documento" className="control" placeholder="Documento" />
              <input type="text" name="nombre" className="control" placeholder="Nombre completo" />
            </div>
            <div className="field-pair">
              <input type="text" name="licencia" className="control" placeholder="Licencia" />
              <input type="date" name="vencimiento" className="control" />
            </div>
            <div className="field-pair">
              <input type="tel" name="telefono" className="control" placeholder="Teléfono" />
              <input type="email" name="correo" className="control" placeholder="Correo" />
            </div>
            <div className="field-single">
              <select name="estado" className="control" defaultValue="Activo">
                <option value="Activo">ACTIVADO</option>
                <option value="Inactivo">INACTIVO</option>
              </select>
            </div>
            <button type="submit" className="btn btn--primary">Guardar</button>
          </form>
        </article>

        {/* Detalle Conductor */}
        <article className="panel panel--detail">
          <h3 className="panel__title">Detalle Conductor</h3>
          <dl className="detail-list">
            <div className="detail-row"><dt>Documento:</dt> <dd>1012456789</dd></div>
            <div className="detail-row"><dt>Nombre:</dt> <dd>Juan Pérez</dd></div>
            <div className="detail-row"><dt>Licencia:</dt> <dd>C2-88921</dd></div>
            <div className="detail-row"><dt>Vencimiento:</dt> <dd>2028-03-10</dd></div>
            <div className="detail-row"><dt>Teléfono:</dt> <dd>3009876543</dd></div>
            <div className="detail-row"><dt>Estado:</dt> <dd>Activo</dd></div>
          </dl>
        </article>

        {/* Editar Conductor (pendiente) */}
        <article className="panel panel--form">
          <h3 className="panel__title">Editar Conductor</h3>
          <div className="pending-slot">
            Pendiente Editar datos de conductor.
          </div>
        </article>
      </section>

      {/* BLOQUE 2: VEHÍCULOS */}
      <section id="bloque-vehiculos" className="module-group">
        <h2 className="module-group__header">Bloque 2 Vehículos</h2>

        {/* Lista de Vehículos */}
        <article className="panel panel--table">
          <h3 className="panel__title">Vehículos</h3>
          <button type="button" className="btn btn--primary">Registrar vehículo</button>
          <table className="data-table">
            <thead>
              <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC-123</td>
                <td>2024</td>
                <td>Toyota</td>
                <td>Activo</td>
              </tr>
              <tr>
                <td>XYZ-987</td>
                <td>2023</td>
                <td>Chevrolet</td>
                <td>Mantenimiento</td>
              </tr>
            </tbody>
          </table>
        </article>

        {/* Resto de vistas de Vehículos */}
            <article className="panel panel--form">
                <h3 className="panel__title">Registrar Vehículo</h3>
                <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                    <div className="field-pair">
                    <input type="text" name="placa" className="control" placeholder="Placa" />
                    <input type="text" name="marca" className="control" placeholder="Marca" />
                    </div>
                    <div className="field-pair">
                    <input type="text" name="modelo" className="control" placeholder="Modelo" />
                    <input type="text" name="anio" className="control" placeholder="Año" />
                    </div>
                    <div className="field-pair">
                    <input type="text" name="chasis" className="control" placeholder="Número chasis" />
                    <input type="text" name="motor" className="control" placeholder="Número motor" />
                    </div>
                    <div className="field-single">
                    <select name="estado" className="control" defaultValue="Activo">
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                    </div>
                    <button type="submit" className="btn btn--primary">Guardar</button>
                </form>
            </article>
      </section>

      {/* BLOQUE 3: ASIGNACIÓN */}
       <section id="bloque-asignacion" className="module-group">
      <h2 className="module-group__header">Bloque 3 — Asignación Operativa</h2>

      <article className="panel panel--compact">
        <h3 className="panel__title">Asignar Vehículo</h3>
        <form action="#" method="post" onsubmit="return false;">
          <div className="field-stack">
            <select name="conductor_id" className="control">
              <option value="">Seleccionar conductor</option>
              <option value="1012456789">Juan Pérez</option>
            </select>
          </div>
          <div className="field-stack">
            <select name="vehiculo_placa" className="control">
              <option value="">Seleccionar vehículo</option>
              <option value="XYZ-987">XYZ-987</option>
            </select>
          </div>
          <button type="submit" className="btn btn--primary btn--full">Asignar</button>
        </form>
      </article>
    </section>
    </div>
  );
}
