import Usuario from '../models/usuarios.js';
import RepositorioBase from './repositorioBase.js';

const UsuarioRepository = new RepositorioBase(Usuario);

// Buscar usuario por nombre de usuario
UsuarioRepository.buscarPorNombreUsuario = async function(nombre_usuario) {
    return await Usuario.findOne({ where: { nombre_usuario } });
};

// Buscar usuario por correo
UsuarioRepository.buscarPorCorreo = async function(correo) {
    return await Usuario.findOne({ where: { correo } });
};

// Actualizar contraseña
UsuarioRepository.actualizarContrasena = async function(id, nuevaContrasena) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    usuario.contrasena = nuevaContrasena;
    await usuario.save();
    return usuario;
};

// Verificar si existe usuario por nombre_usuario o correo
UsuarioRepository.existeUsuario = async function(nombre_usuario, correo) {
    const usuario = await Usuario.findOne({
        where: {
            nombre_usuario,
            correo
        }
    });
    return !!usuario;
};

export default UsuarioRepository;
