//Configuracion de la base de datos
import Sequelize from "sequelize";

import dotenv from "dotenv/config"; //importar variables de entorno
//console.log(process.env.DB_HOST); //leer la variable de entorno

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: "3306",
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;