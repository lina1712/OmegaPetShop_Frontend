import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductoServicios from "../../servicios/ProductoServicios";

const FormProductos = () => {

    const { id } = useParams();
    const navigateTo = useNavigate();

    const [ marca, setMarca ] = useState("");
    const [ nombre, setNombre ] = useState("");
    const [ descripcion, setDescripcion ] = useState("");
    const [ presentacion, setPresentacion ] = useState("");
    const [ precio, setPrecio ] = useState("");
    const [ categoria, setCategoria ] = useState("");
    const [ subcategoria, setSubcategoria ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const [ titulo, setTitulo ] = useState("");

    const guardarProducto = async (event) => {
        event.preventDefault();

        try {
            const producto = {
                marca: marca,
                nombre: nombre,
                descripcion: descripcion,
                presentacion: presentacion,
                precio: precio,
                categoria: categoria,
                subcategoria: subcategoria
            }
            console.log(producto);
            if (id == null) {
                await ProductoServicios.guardarProducto(producto);
                navigateTo("/administradores");
            } 
            else {
                await ProductoServicios.modificarProducto(id, producto);
                navigateTo("/productos");
            }
        } catch (error) {
            setMensaje("Ocurrió un error");
        }
    }

    const cargarProducto = async() => {
        try {
            if (id != null) {
                const respuesta = await ProductoServicios.buscarProducto(id);
                if (respuesta.data != null ) {
                    console.log(respuesta.data);
                    setMarca(respuesta.data.marca);
                    setNombre(respuesta.data.nombre);
                    setDescripcion(respuesta.data.descripcion);
                    setPresentacion(respuesta.data.presentacion);
                    setPrecio(respuesta.data.precio);
                    setCategoria(respuesta.data.categoria);
                    setSubcategoria(respuesta.data.subcategoria);
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
        if (id != null ) {
            navigateTo("/productos");
        } 
        else {
            navigateTo("/administradores");
        }
    }

    useEffect(()=> {
        cargarProducto();
    }, [])

    const cambiarMarca = (event) => {
        setMarca(event.target.value);
    }

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarDescripcion = (event) => {
        setDescripcion(event.target.value);
    }

    const cambiarPresentacion = (event) => {
        setPresentacion(event.target.value);
    }

    const cambiarPrecio = (event) => {
        setPrecio(event.target.value);
    }

    const cambiarCategoria = (event) => {
        setCategoria(event.target.value);
    }

    const cambiarSubcategoria = (event) => {
        setSubcategoria(event.target.value);
    }

    return (
        <div className="container mt-3" >
            <div>
                <h3>{titulo} de productos</h3>
                <form className="container" action="">
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="marca">Marca *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarMarca} value={marca} name="marca" id="marca" required></input>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="nombre">Nombre Producto *</label>
                            <input className= "form-control form-control-sm" type="text" onChange={cambiarNombre} value={nombre} name="nombre" id="nombre" required></input>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="descripcion">Descripcion Producto *</label>
                            <input className= "form-control form-control-sm" type="text" onChange={cambiarDescripcion} value={descripcion} name="descripcion" id="descripcion" required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-control-sm" htmlFor="presentacion">Presentación *</label>
                            <input className= "form-control form-control-sm" type="text" onChange={cambiarPresentacion} value={presentacion} name="presentacion" id="presentacion" required></input>
                        </div>
                        <div className="col-4">
                            <label className="form-control-sm" htmlFor="precio">Precio *</label>
                            <input className= "form-control form-control-sm" type="number" onChange={cambiarPrecio} value={precio} name="precio" id="precio" required></input>
                        </div>
                        <div className="col-4">
                            <label className="form-control-sm" htmlFor="categoria">Seleccione categoria *</label>
                            <select className= "form-control form-control-sm" type="text" onChange={cambiarCategoria} value={categoria} name="categoria" id="categoria" required>
                                <option value=""></option>
                                <option value="domesticos">Animales Domesticos</option>
                                <option value="agricolas">Animales Agricolas</option>
                                <option value="silvestres">Animales Silvestres</option>
                                <option value="acuaticos">Animales Acuaticos</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <label className="form-control-sm" htmlFor="subcategoria">Seleccione Subcategoria *</label>
                            <select className="form-control form-control-sm" type="text" onChange={cambiarSubcategoria} value={subcategoria} name="subcategoria" id="subcategoria" required>
                                <option value=""></option>
                                <option value="alimentos">Alimentos y concentrados</option>
                                <option value="aseo">Productos de aseo</option>
                                <option value="medicina">Medicina</option>
                                <option value="accesorios">Accesorios y juguetes</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={guardarProducto} className="btn btn-primary me-2">Guardar</button>
                        <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
                        <div id="mensaje">{mensaje}</div>
                    </div> 
                </form>
            </div>
        </div>
    )

}

export default FormProductos;