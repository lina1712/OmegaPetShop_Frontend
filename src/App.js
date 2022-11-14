import Header from "./componentes/general/Header";
import ListadoProductos from "./componentes/productos/ListadoProductos";
import ListadoCategoria from "./componentes/categorias/ListadoCategoria";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormProductos from "./componentes/productos/FormProductos";
import Bienvenida from "./componentes/general/Bienvenida";
import ZonaAdministrador from "./componentes/administradores/ZonaAdministrador";
import ListadoClientes from "./componentes/clientes/ListadoClientes";
import FormClientes from "./componentes/clientes/FormClientes";
import LoginAdmin from "./componentes/general/LoginAdmin";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/bienvenidos" element={<Bienvenida />} exact></Route>
          <Route path="/categorias" element={<ListadoCategoria />} exact></Route>
          <Route path="/productos" element={<ListadoProductos />} exact></Route>
          <Route path="/productos/form" element={<FormProductos />} exact></Route>
          <Route path="/productos/form/:id" element={<FormProductos />} exact></Route>
          <Route path="/clientes" element={<ListadoClientes />} exact></Route>
          <Route path="/clientes/form" element={<FormClientes />} exact></Route>
          <Route path="/clientes/form/:id" element={<FormClientes />} exact></Route>
          <Route path="/administradores" element={<ZonaAdministrador />} exact></Route>
          <Route path="/login/admin" element={<LoginAdmin />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
