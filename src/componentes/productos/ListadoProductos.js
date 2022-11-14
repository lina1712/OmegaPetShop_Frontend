import { useEffect, useState } from "react";
import Estados from "../../enums/Estados";
import ProductoServicios from "../../servicios/ProductoServicios";

const ListadoProductos = () => {

    const [listadoProductos, setListadoProductos] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
    const [idBorrar, setIdBorrar] = useState("");
    const [nombreBorrar, setNombreBorrar] = useState("");


    const cargarProductos = async () => {
        try {
            const respuesta = await ProductoServicios.listarProducto();
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoProductos(respuesta.data)
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }

        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const buscarProductos = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ProductoServicios.buscarProductos(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoProductos(respuesta.data);
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

    const borrarProducto = async () => {
        try {
            await ProductoServicios.borrarProducto(idBorrar);
            cargarProductos();
        } catch (error) {
            
        }
    }

    useEffect(() => {
        cargarProductos();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="mt-3">Lista de productos</h3>
            <form>
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio"></input>
                <button id="buscar" name="buscar" onClick={buscarProductos}> Buscar</button>
            </form>
            <div>
                <a className="btn btn-primary me-2" href="/productos/form/" type="button">Crear producto</a>
            </div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Nombre </th>
                        <th>Marca </th>
                        <th>Presentacion</th>
                        <th>Precio </th>
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
                                listadoProductos.map((producto) => (
                                    <tr key={producto._id}>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.presentacion}</td>
                                        <td>{producto.precio}</td>
                                        <td>
                                            <a className="btn btn-sm btn-primary me-2" href={"/productos/form/" + producto._id} >Editar</a>
                                            <button onClick={() => {confirmarBorrado(producto._id, producto.nombre)}} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrado">Eliminar</button>
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
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Eliminar Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Esta seguro de eliminar el producto llamado {nombreBorrar}?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" onClick={borrarProducto} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListadoProductos;