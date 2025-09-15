import UsuarioRepository from '../repositories/usuarioRepository.js';
import bcrypt from 'bcrypt';

const usuarioRepo = UsuarioRepository;

async function crearUsuario(data) {
    // Validaciones básicas
    if (!data.nombre_usuario || !data.correo || !data.contrasena) {
        throw new Error('Faltan datos obligatorios');
    }
    // Validar formato de correo
    const correoRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!correoRegex.test(data.correo)) {
        throw new Error('Correo inválido');
    }
    // Verificar si el usuario o correo ya existen
    const existe = await usuarioRepo.existeUsuario(data.nombre_usuario, data.correo);
    if (existe) {
        throw new Error('El usuario o correo ya existen');
    }
    // Encriptar contraseña
    const saltRounds = 10;
    data.contrasena = await bcrypt.hash(data.contrasena, saltRounds);
    return await usuarioRepo.crear(data);
}

async function obtenerUsuarioPorId(id) {
    return await usuarioRepo.obtenerPorId(id);
}

async function obtenerTodosUsuarios() {
    return await usuarioRepo.obtenerTodos();
}

async function actualizarUsuario(id, data) {
    return await usuarioRepo.actualizar(id, data);
}

async function eliminarUsuario(id) {
    return await usuarioRepo.eliminar(id);
}

async function buscarPorNombreUsuario(nombre_usuario) {
    return await usuarioRepo.buscarPorNombreUsuario(nombre_usuario);
}

async function buscarPorCorreo(correo) {
    return await usuarioRepo.buscarPorCorreo(correo);
}

async function actualizarContrasena(id, nuevaContrasena) {
    if (!nuevaContrasena || nuevaContrasena.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    const hash = await bcrypt.hash(nuevaContrasena, 10);
    return await usuarioRepo.actualizarContrasena(id, hash);
}

async function existeUsuario(nombre_usuario, correo) {
    return await usuarioRepo.existeUsuario(nombre_usuario, correo);
}

// Validar credenciales para login
async function validarCredenciales(nombre_usuario, contrasena) {
    const usuario = await usuarioRepo.buscarPorNombreUsuario(nombre_usuario);
    if (!usuario) return false;
    const esValida = await bcrypt.compare(contrasena, usuario.contrasena);
    return esValida ? usuario : false;
}

export default {
    crearUsuario,
    obtenerUsuarioPorId,
    obtenerTodosUsuarios,
    actualizarUsuario,
    eliminarUsuario,
    buscarPorNombreUsuario,
    buscarPorCorreo,
    actualizarContrasena,
    existeUsuario,
    validarCredenciales
};
