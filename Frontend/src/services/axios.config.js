import axios from "axios";

// Se crea una instancia de Axios con una configuración base.
// Todas las peticiones que usen esta instancia heredarán esta configuración.
const http = axios.create({
  // URL base de nuestra API
  baseURL: "http://localhost:3000/api",
  
  // Encabezados por defecto para todas las peticiones
  headers: {
    "Content-Type": "application/json"
  }
});

// Exportamos la instancia configurada para ser utilizada en los servicios.
export default http;