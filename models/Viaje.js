import Sequelize from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define("viajes", {
    //configuracion de las tablas
    titulo: {
        //que tipo de datos tendra y cuantos caracteres tendra
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.DATE
    },
    disponibles: {
        type: Sequelize.DATE
    },
    slug: {
        type: Sequelize.STRING
    }

}); //nombre de la tabla en la base de datos