import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Identificacion from "./pages/Identificacion.jsx";
// Importa los componentes de Registro, Login, Inicio, Materiales, Palos, Pedidos, etc. según los tengas
// import Registro from "./pages/bienvenida/Registro.jsx";
// import Login from "./pages/bienvenida/Login.jsx";
// import Inicio from "./pages/bienvenida/Inicio.jsx";
// import Materiales from "./pages/Materiales.jsx";
// import Palos from "./pages/Palos.jsx";
// import Pedidos from "./pages/Pedidos.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">🌲 Bosque Madera</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/inicio">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/materiales">Materiales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/palos">Palos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pedidos">Pedidos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Identificacion />} />
        {/* <Route path="/registro" element={<Registro />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/inicio" element={<Inicio />} /> */}
        {/* <Route path="/materiales" element={<Materiales />} /> */}
        {/* <Route path="/palos" element={<Palos />} /> */}
        {/* <Route path="/pedidos" element={<Pedidos />} /> */}
        {/* Puedes agregar más rutas según tu estructura */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>

      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <p>© 2025 Bosque Madera. Todos los derechos reservados.</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
