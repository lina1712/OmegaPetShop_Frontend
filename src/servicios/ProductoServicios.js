import axios from "axios";

const ProductoServicios = {};

ProductoServicios.listarProducto = () => {
    return axios.get("http://localhost:3080/api/productos");
}

ProductoServicios.buscarProductos = (criterio) => {
    return axios.get("http://localhost:3080/api/productos?q="+criterio);
}

ProductoServicios.buscarProducto = (id) => {
    return axios.get("http://localhost:3080/api/productos/"+id);
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post("http://localhost:3080/api/productos", producto);
}

ProductoServicios.modificarProducto = (id, producto) => {
    return axios.put("http://localhost:3080/api/productos/"+id, producto);
}

ProductoServicios.borrarProducto = (id) => {
    return axios.delete("http://localhost:3080/api/productos/"+id);
}

export default ProductoServicios;