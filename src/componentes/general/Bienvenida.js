import mascotas1 from "../../Imgs/todos1.jpg";
const Bienvenida = () => {
    return (
        <div>
            <div>
                <center>
                    <h1 className="py-3">
                        <text style={{ fontFamily: "McLaren" }} className="display-1">WELCOME</text>
                    </h1>
                </center>
            </div>
                <div className="col-md-3 text-end">
                    <button type="button" href="/clientes" className="btn btn-primary me-2">Cliente</button>
                    <a href="/administradores" className="btn btn-primary me-2" >Administrador</a>
                </div>
            <div>
                <center>
                    <img src={mascotas1} width="1000" height="800" alt=""></img>
                </center>
            </div>
        </div>
    );
}

export default Bienvenida;
