import Pedidos from '../models/pedidos.js';
import RepositorioBase from './repositorioBase.js';

const PedidoRepository = new RepositorioBase(Pedidos);

// Métodos personalizados
PedidoRepository.obtenerPorUsuario = async function(usuarioId) {
    return await Pedidos.findAll({ where: { usuarioId } });
};

PedidoRepository.actualizarEstado = async function(id, nuevoEstado) {
    const pedido = await Pedidos.findByPk(id);
    if (!pedido) return null;
    pedido.estado = nuevoEstado;
    await pedido.save();
    return pedido;
};

PedidoRepository.obtenerPorEstado = async function(estado) {
    return await Pedidos.findAll({ where: { estado } });
};

PedidoRepository.obtenerEntreFechas = async function(fechaInicio, fechaFin) {
    return await Pedidos.findAll({
        where: {
            fechaInicio: { $gte: fechaInicio },
            fechaFin: { $lte: fechaFin }
        }
    });
};

// Cancelar pedido
PedidoRepository.cancelarPedido = async function(id) {
    const pedido = await Pedidos.findByPk(id);
    if (!pedido) return null;
    pedido.estado = 'cancelado';
    pedido.fechaFin = new Date().toISOString();
    await pedido.save();
    return pedido;
};

// Eliminar todos los pedidos de un usuario
PedidoRepository.eliminarPorUsuario = async function(usuarioId) {
    const pedidos = await Pedidos.findAll({ where: { usuarioId } });
    for (const pedido of pedidos) {
        await pedido.destroy();
    }
    return true;
};

// Contar pedidos por estado
PedidoRepository.contarPorEstado = async function(estado) {
    return await Pedidos.count({ where: { estado } });
};

export default PedidoRepository;
