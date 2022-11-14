import axios from "axios";

const loginServicios = {}
const URL = "https://lomegapetshopapi.herokuapp.com/api/login/admin";

loginServicios.loginAdmin = (credenciales) => {
    return axios.post(URL, credenciales);
}

export default loginServicios;