import { Model, DataTypes } from "sequelize";
import sequelize from "../db.js";
import Usuarios from "./usuarios.js";

class Pedidos extends Model {}

Pedidos.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "USUARIO_ID"
        },
        fechaInicio: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "FECHA_INICIO"
        },
        fechaFin: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: "FECHA_FIN"
        },
        estado: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "ESTADO",
            validate: {
                isIn: [['pendiente', 'preparando', 'enviado', 'entregado', 'cancelado']]
            }
        }
    },
    {
        sequelize,
        modelName: "Pedidos",
        tableName: "PEDIDOS",
        timestamps: false
    }
);

Pedidos.belongsTo(Usuarios, { 
    foreignKey: "usuarioId",
    targetKey: "id",
});

export default Pedidos;