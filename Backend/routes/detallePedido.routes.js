import express from 'express';
import detallePedidoService from '../services/detallePedidoService.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const detalle = await detallePedidoService.crearDetallePedido(req.body);
        res.status(201).json(detalle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const detalles = await detallePedidoService.obtenerTodosDetalles();
    res.json(detalles);
});

router.get('/:id', async (req, res) => {
    const detalle = await detallePedidoService.obtenerDetallePorId(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle no encontrado' });
    res.json(detalle);
});

router.put('/:id', async (req, res) => {
    try {
        const detalle = await detallePedidoService.actualizarDetalle(req.params.id, req.body);
        res.json(detalle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    await detallePedidoService.eliminarDetalle(req.params.id);
    res.status(204).end();
});

router.get('/pedido/:pedidoId', async (req, res) => {
    const detalles = await detallePedidoService.obtenerPorPedido(req.params.pedidoId);
    res.json(detalles);
});

router.get('/palo/:paloId', async (req, res) => {
    const detalles = await detallePedidoService.obtenerPorPalo(req.params.paloId);
    res.json(detalles);
});

router.put('/:id/cantidad', async (req, res) => {
    try {
        const detalle = await detallePedidoService.actualizarCantidad(req.params.id, req.body.cantidad);
        res.json(detalle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/pedido/:pedidoId', async (req, res) => {
    await detallePedidoService.eliminarPorPedido(req.params.pedidoId);
    res.status(204).end();
});

router.delete('/palo/:paloId', async (req, res) => {
    await detallePedidoService.eliminarPorPalo(req.params.paloId);
    res.status(204).end();
});

router.get('/contar/pedido/:pedidoId', async (req, res) => {
    const cantidad = await detallePedidoService.contarPorPedido(req.params.pedidoId);
    res.json({ cantidad });
});

router.get('/contar/palo/:paloId', async (req, res) => {
    const cantidad = await detallePedidoService.contarPorPalo(req.params.paloId);
    res.json({ cantidad });
});

export default router;
