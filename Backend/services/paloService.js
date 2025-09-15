    import PaloRepository from "../repositories/paloRepository.js";

    const paloRepo = new PaloRepository();

    const obtenerPaloPorId = async (id) => {
        try {
            return await paloRepo.obtenerPorId(id);
        } catch (err) {
            console.error("Error en obtenerPaloPorId:", err);
            throw new Error("No se pudo obtener el palo");
        }
    };

    const obtenerTodosPalos = async () => {
        try {
            return await paloRepo.obtenerTodos();
        } catch (err) {
            console.error("Error en obtenerTodosPalos:", err);
            throw new Error("No se pudo obtener la lista de palos");
        }
    };

    const buscarPorStock = async (minStock = 1) => {
        try {
            return await paloRepo.buscarPorStock(minStock);
        } catch (err) {
            console.error("Error en buscarPorStock:", err);
            throw new Error("No se pudo buscar por stock");
        }
    };

    const buscarPorPrecio = async (min, max) => {
        try {
            return await paloRepo.buscarPorPrecio(min, max);
        } catch (err) {
            console.error("Error en buscarPorPrecio:", err);
            throw new Error("No se pudo buscar por precio");
        }
    };

    const buscarDisponibles = async () => {
        try {
            return await paloRepo.buscarDisponibles();
        } catch (err) {
            console.error("Error en buscarDisponibles:", err);
            throw new Error("No se pudo buscar palos disponibles");
        }
    };

    const actualizarStock = async (id, cantidad) => {
        try {
            return await paloRepo.actualizarStock(id, cantidad);
        } catch (err) {
            console.error("Error en actualizarStock:", err);
            throw new Error("No se pudo actualizar el stock");
        }
    };

    const buscarPorTipoMaterial = async (nombreMaterial) => {
        try {
            return await paloRepo.buscarPorTipoMaterial(nombreMaterial);
        } catch (err) {
            console.error("Error en buscarPorTipoMaterial:", err);
            throw new Error("No se pudo buscar por tipo de material");
        }
    };

    const ordenarPorPrecio = async (direccion = "ASC") => {
        try {
            return await paloRepo.ordenarPorPrecio(direccion);
        } catch (err) {
            console.error("Error en ordenarPorPrecio:", err);
            throw new Error("No se pudo ordenar por precio");
        }
    };

    // Solo se exponen métodos de consulta y pedido para el cliente
    export default {
        obtenerPaloPorId,
        obtenerTodosPalos,
        buscarPorStock,
        buscarPorPrecio,
        buscarDisponibles,
        buscarPorTipoMaterial,
        ordenarPorPrecio,
        actualizarStock,
    };
