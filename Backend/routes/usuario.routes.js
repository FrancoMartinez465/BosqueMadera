import express from 'express';
import usuarioService from '../services/usuarioService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const usuarios = await usuarioService.obtenerTodosUsuarios();
    res.json(usuarios);
});

router.get('/:id', async (req, res) => {
    const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
});

router.put('/:id', async (req, res) => {
    try {
        const usuario = await usuarioService.actualizarUsuario(req.params.id, req.body);
        res.json(usuario);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    await usuarioService.eliminarUsuario(req.params.id);
    res.status(204).end();
});

router.post('/login', async (req, res) => {
    const { nombre_usuario, contrasena } = req.body;
    const usuario = await usuarioService.validarCredenciales(nombre_usuario, contrasena);
    if (!usuario) return res.status(401).json({ error: 'Credenciales inválidas' });
    res.json(usuario);
});

export default router;
