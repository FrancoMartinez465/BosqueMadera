import { Model, DataTypes } from "sequelize";
import sequelize from "../db.js";

class Materiales extends Model {}

Materiales.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			field: "ID"
		},
		nombre: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			field: "NOMBRE"
		}
	},
	{
		sequelize,
		modelName: "Materiales",
		tableName: "MATERIALES",
		timestamps: false
	}
);

export default Materiales;
