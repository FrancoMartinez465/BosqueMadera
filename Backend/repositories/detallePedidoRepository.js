import DetallePedido from '../models/detallePedido.js';
import RepositorioBase from './repositorioBase.js';

const DetallePedidoRepository = new RepositorioBase(DetallePedido);

// Obtener todos los detalles por pedido
DetallePedidoRepository.obtenerPorPedido = async function(pedidoId) {
    return await DetallePedido.findAll({ where: { pedidoId } });
};

// Obtener todos los detalles por palo
DetallePedidoRepository.obtenerPorPalo = async function(paloId) {
    return await DetallePedido.findAll({ where: { paloId } });
};

// Actualizar cantidad de un detalle
DetallePedidoRepository.actualizarCantidad = async function(id, nuevaCantidad) {
    const detalle = await DetallePedido.findByPk(id);
    if (!detalle) return null;
    detalle.cantidad = nuevaCantidad;
    await detalle.save();
    return detalle;
};

// Eliminar todos los detalles por pedido
DetallePedidoRepository.eliminarPorPedido = async function(pedidoId) {
    const detalles = await DetallePedido.findAll({ where: { pedidoId } });
    for (const detalle of detalles) {
        await detalle.destroy();
    }
    return true;
};

// Eliminar todos los detalles por palo
DetallePedidoRepository.eliminarPorPalo = async function(paloId) {
    const detalles = await DetallePedido.findAll({ where: { paloId } });
    for (const detalle of detalles) {
        await detalle.destroy();
    }
    return true;
};

// Contar detalles por pedido
DetallePedidoRepository.contarPorPedido = async function(pedidoId) {
    return await DetallePedido.count({ where: { pedidoId } });
};

// Contar detalles por palo
DetallePedidoRepository.contarPorPalo = async function(paloId) {
    return await DetallePedido.count({ where: { paloId } });
};

export default DetallePedidoRepository;
