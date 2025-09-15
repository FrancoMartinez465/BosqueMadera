import express from 'express';
import pedidoService from '../services/pedidoService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const pedido = await pedidoService.crearPedido(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const pedidos = await pedidoService.obtenerTodosPedidos();
    res.json(pedidos);
});

router.get('/:id', async (req, res) => {
    const pedido = await pedidoService.obtenerPedidoPorId(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json(pedido);
});

router.put('/:id', async (req, res) => {
    try {
        const pedido = await pedidoService.actualizarPedido(req.params.id, req.body);
        res.json(pedido);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    await pedidoService.eliminarPedido(req.params.id);
    res.status(204).end();
});

router.put('/:id/estado', async (req, res) => {
    try {
        const pedido = await pedidoService.actualizarEstado(req.params.id, req.body.estado);
        res.json(pedido);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/:id/cancelar', async (req, res) => {
    const pedido = await pedidoService.cancelarPedido(req.params.id);
    res.json(pedido);
});

router.get('/usuario/:usuarioId', async (req, res) => {
    const pedidos = await pedidoService.obtenerPorUsuario(req.params.usuarioId);
    res.json(pedidos);
});

router.get('/estado/:estado', async (req, res) => {
    const pedidos = await pedidoService.obtenerPorEstado(req.params.estado);
    res.json(pedidos);
});

router.get('/contar/:estado', async (req, res) => {
    const cantidad = await pedidoService.contarPorEstado(req.params.estado);
    res.json({ cantidad });
});

export default router;
