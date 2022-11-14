import axios from "axios";

const ClienteServicios = {};

ClienteServicios.listarCliente = () => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/clientes");
}

ClienteServicios.buscarClientes = (criterio) => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/clientes?q="+criterio);
}

ClienteServicios.buscarCliente = (id) => {
    return axios.get("https://lomegapetshopapi.herokuapp.com/api/clientes/"+id);
}

ClienteServicios.guardarCliente = (cliente) => {
    return axios.post("https://lomegapetshopapi.herokuapp.com/api/clientes", cliente);
}

ClienteServicios.modificarCliente = (id, cliente) => {
    return axios.put("https://lomegapetshopapi.herokuapp.com/api/clientes"+id, cliente);
}

ClienteServicios.borrarCliente = (id) => {
    return axios.delete("https://lomegapetshopapi.herokuapp.com/api/clientes/"+id);
}

export default ClienteServicios;