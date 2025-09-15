import DetallePedidoRepository from '../repositories/detallePedidoRepository.js';

const detalleRepo = DetallePedidoRepository;

async function crearDetallePedido(data) {
    if (!data.pedidoId || !data.paloId || !data.cantidad) {
        throw new Error('Faltan datos obligatorios para el detalle de pedido');
    }
    if (data.cantidad < 1) {
        throw new Error('La cantidad debe ser mayor a cero');
    }
    return await detalleRepo.crear(data);
}

async function obtenerDetallePorId(id) {
    return await detalleRepo.obtenerPorId(id);
}

async function obtenerTodosDetalles() {
    return await detalleRepo.obtenerTodos();
}

async function actualizarDetalle(id, data) {
    if (data.cantidad !== undefined && data.cantidad < 1) {
        throw new Error('La cantidad debe ser mayor a cero');
    }
    return await detalleRepo.actualizar(id, data);
}

async function eliminarDetalle(id) {
    return await detalleRepo.eliminar(id);
}

async function obtenerPorPedido(pedidoId) {
    return await detalleRepo.obtenerPorPedido(pedidoId);
}

async function obtenerPorPalo(paloId) {
    return await detalleRepo.obtenerPorPalo(paloId);
}

async function actualizarCantidad(id, nuevaCantidad) {
    if (nuevaCantidad < 1) {
        throw new Error('La cantidad debe ser mayor a cero');
    }
    return await detalleRepo.actualizarCantidad(id, nuevaCantidad);
}

async function eliminarPorPedido(pedidoId) {
    return await detalleRepo.eliminarPorPedido(pedidoId);
}

async function eliminarPorPalo(paloId) {
    return await detalleRepo.eliminarPorPalo(paloId);
}

async function contarPorPedido(pedidoId) {
    return await detalleRepo.contarPorPedido(pedidoId);
}

async function contarPorPalo(paloId) {
    return await detalleRepo.contarPorPalo(paloId);
}

export default {
    crearDetallePedido,
    obtenerDetallePorId,
    obtenerTodosDetalles,
    actualizarDetalle,
    eliminarDetalle,
    obtenerPorPedido,
    obtenerPorPalo,
    actualizarCantidad,
    eliminarPorPedido,
    eliminarPorPalo,
    contarPorPedido,
    contarPorPalo
};
