import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Identificacion.css"; // Asegúrate de tener este archivo

const Identificacion = () => {
  const navigate = useNavigate();

  return (
    <div className="identificacion-container">
      <div className="identificacion-card">
        <h1>🌲 ¡Bienvenido/a a Bosque Madera!</h1>
        <p>Para realizar pedidos necesitas tener una cuenta registrada.</p>
        <p>Si solo deseas explorar, puedes entrar como invitado.</p>

        <div className="identificacion-buttons">
          <button
            className="btn-identificacion btn-registro"
            onClick={() => navigate("/registro")}
          >
            Registrarme
          </button>

          <button
            className="btn-identificacion btn-login"
            onClick={() => navigate("/login")}
          >
            Ya tengo cuenta
          </button>

          <button
            className="btn-identificacion btn-invitado"
            onClick={() => navigate("/inicio")}
          >
            Entrar como invitado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identificacion;
