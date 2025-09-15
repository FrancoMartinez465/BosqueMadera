import { Model, DataTypes } from "sequelize";
import sequelize from "../db.js";
import Palos from "./palos.js";
import Pedidos from "./pedidos.js";

class DetallePedido extends Model {}
DetallePedido.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        pedidoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "PEDIDO_ID",
            references: {
                model: "PEDIDOS",
                key: "ID"
            }
        },  
        paloId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "PALO_ID",
            references: {
                model: "PALOS",
                key: "ID"
            }
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "CANTIDAD",
            validate: {
                min: 1
            }
        }
    },
    {
        sequelize,
        modelName: "DetallePedido",
        tableName: "DETALLE_PEDIDOS",
        timestamps: false
    }
);

DetallePedido.belongsTo(Palos, { foreignKey: "paloId" });
DetallePedido.belongsTo(Pedidos, { foreignKey: "pedidoId" });

export default DetallePedido;