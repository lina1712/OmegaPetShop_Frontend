import axios from "axios";

const ClienteServicios = {};

ClienteServicios.listarCliente = () => {
    return axios.get("http://localhost:3080/api/clientes");
}

ClienteServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:3080/api/clientes?q="+criterio);
}

ClienteServicios.buscarCliente = (id) => {
    return axios.get("http://localhost:3080/api/clientes/"+id);
}

ClienteServicios.guardarCliente = (cliente) => {
    return axios.post("http://localhost:3080/api/clientes", cliente);
}

ClienteServicios.modificarCliente = (id, cliente) => {
    return axios.put("http://localhost:3080/api/clientes"+id, cliente);
}

ClienteServicios.borrarCliente = (id) => {
    return axios.delete("http://localhost:3080/api/clientes/"+id);
}

export default ClienteServicios;