import { Model, DataTypes } from "sequelize";
import sequelize from "../db.js";
import Materiales from "./materiales.js";

class Palos extends Model {}

Palos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "ID"
    },
    materialId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "MATERIAL_ID",
      references: {
        model: "MATERIALES",
        key: "ID"
      }
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "PRECIO",
      validate: {
        min: 0
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "STOCK"
    },
    ancho: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "ANCHO"
    },
    largo: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: "LARGO"
    },
    caratula: {
      type: DataTypes.TEXT,
      field: "CARATULA"
    }
  },
  {
    sequelize,
    modelName: "Palos",
    tableName: "PALOS",
    timestamps: false
  }
);

export default Palos;

// Relación belongsTo para la FK MATERIAL_ID
Palos.belongsTo(Materiales, {
  foreignKey: "materialId",
  targetKey: "id"
});