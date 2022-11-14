import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClienteServicios from "../../servicios/ClienteServicios";

const FormClientes = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();

    const [ nombre, setNombre ] = useState("");
    const [ apellidos, setApellidos ] = useState("");
    const [ tipo, setTipo ] = useState("");
    const [ documento, setDocumento ] = useState("");
    const [ direccion, setDireccion ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ correo, setCorreo ] = useState("");
    const [ passw, setPassw ] = useState("");
    const [ confirm, setConfirm ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const [ titulo, setTitulo ] = useState("");

    const guardarCliente = async (event) => {
        event.preventDefault();

        if (passw === confirm) {
            try {
                const cliente = {
                    nombre: nombre,
                    apellidos: apellidos,
                    tipo: tipo,
                    documento: documento,
                    direccion: direccion,
                    telefono: telefono,
                    correo: correo,
                    passw: passw
                }
                console.log(cliente);
                if (id == null) {
                    await ClienteServicios.guardarCliente(cliente);
                    navigateTo("/");
                } 
                else {
                    await ClienteServicios.modificarCliente(id, cliente);
                    navigateTo("/clientes");
                } 
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        } 
        else {
            setMensaje("Las constraseñas no coinciden");
        }
        
    }

    const cargarCliente = async() => {
        try {
            if (id != null) {
                const respuesta = await ClienteServicios.buscarCliente(id);
                if (respuesta.data != null ) {
                    console.log(respuesta.data);  
                    setNombre(respuesta.data.nombre);
                    setApellidos(respuesta.data.apellidos);
                    setTipo(respuesta.data.tipo);
                    setDocumento(respuesta.data.documento);
                    setDireccion(respuesta.data.direccion);
                    setTelefono(respuesta.data.telefono);
                    setCorreo(respuesta.data.correo);
                    setPassw(respuesta.data.passw);
                    setConfirm(respuesta.data.passw);
                }   
                setTitulo("Edición");
            }    
            else {
                setTitulo("Registro");
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }
    
    const cancelar = () => {
        if (id != null) {
            navigateTo("/clientes");
        } 
        else {
            navigateTo("/");
        }
    }
    

    useEffect(()=> {
        cargarCliente();
    }, [])


    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);
    }

    const cambiarTipo = (event) => {
        setTipo(event.target.value);
    }

    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);
    }

    const cambiarDireccion = (event) => {
        setDireccion(event.target.value);
    }

    const cambiarTelefono = (event) => {
        setTelefono(event.target.value);
    }

    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
    }

    const cambiarPassw = (event) => {
        setPassw(event.target.value);
    }

    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);
    }

    return(
        <div className="container mt-3">
            <div>
                <h3>{titulo} de clientes</h3>
                <form className=" container" action="">
                    <div className="row">
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="nombre">Nombres *</label>
                            <input className="form-control form control-sm" type="text" onChange={cambiarNombre} value={nombre} name="nombre" id="nombre" required></input>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="apellidos">Apellidos *</label>
                            <input className="form-control form control-sm" type="text" onChange={cambiarApellidos} value={apellidos} name="apellidos" id="apellidos" required></input>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="tipo">Seleccione documento *</label>
                            <select className="form-select" type="text" onChange={cambiarTipo} value={tipo} name="tipo" id="tipo" required>
                                <option value=""></option>
                                <option value="Cedula">Cedula</option>
                                <option value="Cedula extranjeria">Cedula extranjería</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="documento">Documento *</label>
                            <input className="form-control form control-sm" type="text" onChange={cambiarDocumento} value={documento} name="documento" id="documento" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="direccion">Direccion</label>
                            <input className="form-control form control-sm" type="text" onChange={cambiarDireccion} value={direccion} name="direccion" id="direccion" required></input>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="telefono">Telefono *</label>
                            <input className="form-control form control-sm" type="number" onChange={cambiarTelefono} value={telefono} name="telefono" id="telefono" required></input>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="correo">Email *</label>
                            <input className="form-control form control-sm" type="email" onChange={cambiarCorreo} value={correo} name="correo" id="correo" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="passw">Password *</label>
                            <input className="form-control form control-sm" type="password" onChange={cambiarPassw} value={passw} name="password" id="password" required></input>
                        </div>
                        <div className="col-3">
                            <label className= "form-control-sm" htmlFor="confirm">Confirme Contraseña *</label>
                            <input className="form-control form control-sm" type="password" onChange={cambiarConfirm} value={confirm} name="confirm" id="confirm" required></input>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={guardarCliente} className="btn btn-primary me-2">Guardar</button>
                        <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
                        <div id="mensaje">{mensaje}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormClientes;