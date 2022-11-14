import axios from "axios";

const ProductoServicios = {};

ProductoServicios.listarProducto = () => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/productos");
}

ProductoServicios.buscarProductos = (criterio) => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/productos?q="+criterio);
}

ProductoServicios.buscarProducto = (id) => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/productos/"+id);
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post("https://lomegapetshopapi.herokuapp.com/api/productos", producto);
}

ProductoServicios.modificarProducto = (id, producto) => {
    return axios.put("https://lomegapetshopapi.herokuapp.com/api/productos/"+id, producto);
}

ProductoServicios.borrarProducto = (id) => {
    return axios.delete("https://lomegapetshopapi.herokuapp.com/api/productos/"+id);
}

export default ProductoServicios;