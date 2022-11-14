import logo from "../../Imgs/1.jpg";
import corazon from "../../Imgs/Imagen1.jpg";
const Header = () => {
    return (
            <header className="px-3 py-3">
                <div className="container ">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <img src={logo} width="200" height="200" alt=""></img>
                        <ul className="nav col-4 col-lg-auto me-lg-auto mb-3 justify-content-center mb-md-0" style={{ background: "#538AF4", padding: "40px", margin: "0 auto", }}>
                            <h3>
                            <li><a style={{fontFamily: "McLaren" }} href="/bienvenidos" className="nav-link px-3 text-secondary">HOME</a></li>
                            </h3>
                            <h3>
                            <li><a style={{ fontFamily: "McLaren" }} href="/categorias" className="nav-link px-3 text-white">CATEGORIAS</a></li>
                            </h3>
                            <h3>
                            <li><a style={{ fontFamily: "McLaren" }} href="/contactos" className="nav-link px-3 text-white">CONTACTO</a></li>
                            </h3>
                        </ul>
                        <img src={corazon} width="200" height="200" alt=""></img>
                    
                    </div>
                </div>
            </header>
    );
}

export default Header;
