import axios from "axios";

const loginServicios = {}
const URL = "http://localhost:3080/api/login/admin";

loginServicios.loginAdmin = (credenciales) => {
    return axios.post(URL, credenciales);
}

export default loginServicios;