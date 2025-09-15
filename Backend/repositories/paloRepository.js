import RepositorioBase from "./repositorioBase.js";
import Palos from "../models/palos.js";
import Materiales from "../models/materiales.js";
import { Op } from "sequelize";

class PaloRepository extends RepositorioBase {
  constructor() {
    super(Palos);
  }

  // Buscar palos con stock mayor o igual a un valor
  async buscarPorStock(minStock = 1) {
    return await Palos.findAll({
      where: { stock: { [Op.gte]: minStock } },
      include: [{ model: Materiales, as: "material" }]
    });
  }

  // Buscar palos dentro de un rango de precios
  async buscarPorPrecio(min, max) {
    return await Palos.findAll({
      where: { precio: { [Op.between]: [min, max] } },
      include: [{ model: Materiales, as: "material" }]
    });
  }

  // Buscar todos los palos que tengan stock > 0
  async buscarDisponibles() {
    return await Palos.findAll({
      where: { stock: { [Op.gt]: 0 } },
      include: [{ model: Materiales, as: "material" }]
    });
  }

  // Actualizar stock (ejemplo: restar stock al hacer un pedido)
  async actualizarStock(id, cantidad) {
    const palo = await Palos.findByPk(id);
    if (!palo) return null;

    palo.stock = Math.max(0, palo.stock - cantidad);
    await palo.save();

    return palo;
  }

  // Buscar palos por tipo de material (nombre exacto)
  async buscarPorTipoMaterial(nombreMaterial) {
    return await Palos.findAll({
      include: [{
        model: Materiales,
        as: "material",
        where: { nombre: nombreMaterial }
      }]
    });
  }
  
  // Ordenar palos por precio (ascendente)
  async ordenarPorPrecio(direccion = "ASC") {
    return await Palos.findAll({
      order: [["precio", direccion]],
      include: [{ model: Materiales, as: "material" }]
    });
  }


}

export default PaloRepository;
