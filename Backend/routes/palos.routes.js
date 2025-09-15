import { Router } from "express";
import paloService from "../services/paloService.js";

const router = Router();

// Buscar por stock mínimo
router.get("/stock/:minStock", async (req, res) => {
	const minStock = Number(req.params.minStock);
	if (isNaN(minStock)) return res.status(400).json({ error: "Stock inválido" });
	try {
		const palos = await paloService.buscarPorStock(minStock);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Buscar por rango de precio
router.get("/precio/:min/:max", async (req, res) => {
	const min = Number(req.params.min);
	const max = Number(req.params.max);
	if (isNaN(min) || isNaN(max)) return res.status(400).json({ error: "Precio inválido" });
	try {
		const palos = await paloService.buscarPorPrecio(min, max);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Buscar disponibles (stock > 0)
router.get("/disponibles", async (req, res) => {
	try {
		const palos = await paloService.buscarDisponibles();
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Buscar por tipo de material
router.get("/material/:nombre", async (req, res) => {
	try {
		const palos = await paloService.buscarPorTipoMaterial(req.params.nombre);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Ordenar por precio
router.get("/ordenar/precio/:direccion", async (req, res) => {
	const direccion = req.params.direccion.toUpperCase();
	if (direccion !== "ASC" && direccion !== "DESC") return res.status(400).json({ error: "Dirección inválida" });
	try {
		const palos = await paloService.ordenarPorPrecio(direccion);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Buscar por nombre
router.get("/nombre/:nombre", async (req, res) => {
	try {
		const palos = await paloService.buscarPorNombre(req.params.nombre);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Palos con bajo stock
router.get("/bajo-stock/:limite", async (req, res) => {
	const limite = Number(req.params.limite);
	if (isNaN(limite)) return res.status(400).json({ error: "Límite inválido" });
	try {
		const palos = await paloService.palosConBajoStock(limite);
		res.json(palos);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Obtener todos los palos
router.get("/", async (req, res) => {
	try {
		const palos = await paloService.obtenerTodosPalos();
		res.setHeader("Content-Type", "application/json; charset=utf-8");
		res.send(JSON.stringify(palos, null, 2));
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Obtener palo por ID (debe ir al final)
router.get("/:id", async (req, res) => {
	const id = Number(req.params.id);
	if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
	try {
		const palo = await paloService.obtenerPaloPorId(id);
		if (!palo) return res.status(404).json({ error: "Palo no encontrado" });
		res.json(palo);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
