import { Model, DataTypes } from "sequelize";
import sequelize from "../db.js";


class Usuario extends Model {}
Usuario.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "ID"
        },
        apellido: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "APELLIDO",
            collate: "NOCASE"
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "NOMBRE",
            collate: "NOCASE"
        },
        nombre_usuario: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "NOMBRE_USUARIO",
            unique: true,
            collate: "NOCASE"
        },
        correo: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "CORREO"
        },
        contrasena: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "CONTRASEÑA"
        }
    },
    {
        sequelize,
        modelName: "Usuario",
        tableName: "USUARIOS",
        timestamps: false
    }
);

export default Usuario;
