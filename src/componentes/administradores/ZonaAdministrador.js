import logo from "../../Imgs/1.jpg";

const ZonaAdministrador = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-5 text-bg-dark" style={{width: "280px"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi pe-none me-2" width="40" height="32"></svg>
                    <span className="fs-4">Indice</span>
                </a>
                <div>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="/bienvenidos" className="nav-link active" aria-current="page">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/productos" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Productos
                            </a>
                        </li>
                        <li>
                            <a href="/clientes" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Clientes
                            </a>
                        </li>
                        <li>
                            <a href="/pedidos" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Pedidos
                            </a>
                        </li>
                        <li>
                            <a href="/ventas" className="nav-link text-white">
                                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                                Ventas
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="dropdown">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={logo} alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="/">New project...</a></li>
                            <li><a className="dropdown-item" href="/">Settings</a></li>
                            <li><a className="dropdown-item" href="/">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZonaAdministrador;