import { useEffect, useState } from "react";
import Estados from "../../enums/Estados"
import ClienteServicios from "../../servicios/ClienteServicios";

const ListadoClientes = () => {

    const [listadoClientes, setListadoClientes] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");

    const cargarClientes = async () => {
        try {
            const respuesta = await ClienteServicios.listarCliente();
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado (Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }


    const buscarClientes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ClienteServicios.buscarClientes(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const confirmarBorrado = (id, nombre) => {
        setIdBorrar(id);
        setNombreBorrar(nombre);
    }

    const borrarCliente = async () => {
        try {
            await ClienteServicios.borrarCliente(idBorrar);
            cargarClientes();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        cargarClientes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="mt-3">Lista de clientes</h3>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio"></input>
                <button id="buscar" name="buscar" onClick={buscarClientes}>Buscar</button>
            </form>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Documento</th>
                        <th>Direccion</th>
                        <th>Telefono </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estado === Estados.CARGANDO ?
                        (<div>Cargando...</div>)
                        :
                        estado === Estados.ERROR ?
                            (<tr><td>Ocurrio un error, intente mas tarde</td></tr>)
                            :
                            estado === Estados.VACIO ?
                                (<div>No hay datos</div>)
                                :
                                listadoClientes.map((cliente) => (
                                    <tr key={cliente._id}>
                                        <td>{cliente.nombre + " " + cliente.apellidos}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.direccion}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>
                                            <a className="btn btn-sm btn-primary me-2" href={"/clientes/form/" + cliente._id}>Editar</a>
                                            <button onClick={() => {confirmarBorrado(cliente._id, cliente.nombre + " " + cliente.apellidos)}} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrado" >Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>
            </table>
            
            <div className="modal fade" id="modalBorrado" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar cliente</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Esta seguro de elimnar el cliente {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarCliente} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListadoClientes;