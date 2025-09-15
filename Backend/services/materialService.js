import MaterialRepository from "../repositories/materialRepository.js";

const materialRepo = new MaterialRepository();

const obtenerMaterialPorId = async (id) => {
	return await materialRepo.obtenerPorId(id);
};

const obtenerTodosMateriales = async () => {
	return await materialRepo.obtenerTodos();
};

// Solo se exponen métodos de consulta para el cliente
export default {
	obtenerMaterialPorId,
	obtenerTodosMateriales
};
