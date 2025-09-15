import { Router } from "express";
import materialService from "../services/materialService.js";

const router = Router();

// Obtener todos los materiales
router.get("/", async (req, res) => {
	try {
		const materiales = await materialService.obtenerTodosMateriales();
		res.json(materiales);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Obtener material por ID
router.get("/:id", async (req, res) => {
	try {
		const material = await materialService.obtenerMaterialPorId(req.params.id);
		if (!material) return res.status(404).json({ error: "Material no encontrado" });
		res.json(material);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default router;
