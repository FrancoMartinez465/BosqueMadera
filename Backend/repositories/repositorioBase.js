class RepositorioBase {
	constructor(modelo) {
		this.modelo = modelo;
	}

	async crear(data) {
		return await this.modelo.create(data);
	}

	async obtenerPorId(id) {
		return await this.modelo.findByPk(id);
	}

	async obtenerTodos() {
		return await this.modelo.findAll();
	}

	async actualizar(id, data) {
		const instancia = await this.modelo.findByPk(id);
		if (!instancia) return null;
		return await instancia.update(data);
	}

	async eliminar(id) {
		const instancia = await this.modelo.findByPk(id);
		if (!instancia) return null;
		await instancia.destroy();
		return true;
	}
}

export default RepositorioBase;
