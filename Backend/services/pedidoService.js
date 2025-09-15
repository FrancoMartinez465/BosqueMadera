import PedidoRepository from '../repositories/pedidoRepository.js';

const pedidoRepo = PedidoRepository;

async function crearPedido(data) {
    // Validación básica
    if (!data.usuarioId || !data.fechaInicio || !data.estado) {
        throw new Error('Faltan datos obligatorios para el pedido');
    }
    // Validar estado permitido
    const estadosPermitidos = ['pendiente', 'preparando', 'enviado', 'entregado', 'cancelado'];
    if (!estadosPermitidos.includes(data.estado)) {
        throw new Error('Estado de pedido inválido');
    }
    return await pedidoRepo.crear(data);
}

async function obtenerPedidoPorId(id) {
    return await pedidoRepo.obtenerPorId(id);
}

async function obtenerTodosPedidos() {
    return await pedidoRepo.obtenerTodos();
}

async function actualizarPedido(id, data) {
    return await pedidoRepo.actualizar(id, data);
}

async function eliminarPedido(id) {
    return await pedidoRepo.eliminar(id);
}

async function obtenerPorUsuario(usuarioId) {
    return await pedidoRepo.obtenerPorUsuario(usuarioId);
}

async function actualizarEstado(id, nuevoEstado) {
    const estadosPermitidos = ['pendiente', 'preparando', 'enviado', 'entregado', 'cancelado'];
    if (!estadosPermitidos.includes(nuevoEstado)) {
        throw new Error('Estado de pedido inválido');
    }
    return await pedidoRepo.actualizarEstado(id, nuevoEstado);
}

async function obtenerPorEstado(estado) {
    return await pedidoRepo.obtenerPorEstado(estado);
}

async function obtenerEntreFechas(fechaInicio, fechaFin) {
    return await pedidoRepo.obtenerEntreFechas(fechaInicio, fechaFin);
}

async function cancelarPedido(id) {
    return await pedidoRepo.cancelarPedido(id);
}

async function eliminarPorUsuario(usuarioId) {
    return await pedidoRepo.eliminarPorUsuario(usuarioId);
}

async function contarPorEstado(estado) {
    return await pedidoRepo.contarPorEstado(estado);
}

export default {
    crearPedido,
    obtenerPedidoPorId,
    obtenerTodosPedidos,
    actualizarPedido,
    eliminarPedido,
    obtenerPorUsuario,
    actualizarEstado,
    obtenerPorEstado,
    obtenerEntreFechas,
    cancelarPedido,
    eliminarPorUsuario,
    contarPorEstado
};
