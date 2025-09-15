// db.js
import { Sequelize } from "sequelize";


const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./data/maderas.db"
});

export default sequelize;
