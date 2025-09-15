import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import logger from "./middlewares/logger.js";

// Importar rutas reales del proyecto
import materialRoutes from "./routes/material.routes.js";
import palosRoutes from "./routes/palos.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import pedidoRoutes from "./routes/pedido.routes.js";
import detallePedidoRoutes from "./routes/detallePedido.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(logger);

// Ruta visual principal
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Bosque Madera API</title>
                <style>
                    body { background-color: #fbe9e7; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
                    .container { background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 0 12px rgba(0,0,0,0.1); text-align: center; }
                    h1 { color: #3e2723; }
                    small { display: block; margin-top: 1em; font-size: 1em; color: #000000ff; background: #ffffffff; padding: 0.3em 1em; border-radius: 6px; }
                </style>
                <script>
                    function actualizarReloj() {
                        const ahora = new Date();
                        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
                        document.getElementById('reloj').innerText = ahora.toLocaleString('es-AR', opciones);
                    }
                    window.onload = function() {
                        actualizarReloj();
                        setInterval(actualizarReloj, 1000);
                    };
                </script>
            </head>
            <body>
                <div class="container">
                    <h1>🌲🌳 BOSQUE MADERA API 🌳🌲</h1>
                    <p>API corriendo en <strong>http://localhost:${PORT}</strong></p>
                    <p>Endpoints disponibles:</p>
                    <ul style="list-style:none; padding:0;">
                        <li>• <b>/api/materiales</b></li>
                        <li>• <b>/api/palos</b></li>
                        <li>• <b>/api/usuarios</b></li>
                        <li>• <b>/api/pedidos</b></li>
                        <li>• <b>/api/detalle-pedido</b></li>
                    </ul>
                    <small id="reloj"></small>
                </div>
            </body>
        </html>
    `);
});

// Rutas de la API
app.use("/api/materiales", materialRoutes);
app.use("/api/palos", palosRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/detalle-pedido", detallePedidoRoutes);

// Manejo de errores 404 decorado
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>Ruta no encontrada</title>
                <style>
                    body { background-color: #ffebee; font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; }
                    .container { background: #fff; padding: 2rem; border-radius: 12px; box-shadow: 0 0 12px rgba(0,0,0,0.1); text-align: center; }
                    h2 { color: #b71c1c; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h2>❌ Ruta no encontrada</h2>
                    <p>¿Seguro que existe ese árbol?</p>
                </div>
            </body>
        </html>
    `);
});

// Iniciar servidor y conectar DB

(async function start() {
    try {
        await sequelize.authenticate();
        console.log('==============================================');
        console.log('🚀 Conexión a la base de datos establecida correctamente.');
        console.log('==============================================');
    } catch (error) {
        console.error("❌ No se pudo conectar a la base de datos:", error.message);
    }
})();

app.listen(PORT, () => {
    console.log('==============================================');
    console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
    console.log('==============================================');
    console.log('📦 Rutas disponibles:');
    console.log('🪵 Materiales API   → /api/materiales');
    console.log('🌲 Palos API        → /api/palos');
    console.log('👤 Usuarios API     → /api/usuarios');
    console.log('📋 Pedidos API      → /api/pedidos');
    console.log('🧾 Detalle Pedido   → /api/detalle-pedido');
    console.log('==============================================');
});

export default app;
