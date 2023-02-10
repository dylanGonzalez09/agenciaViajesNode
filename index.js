//Archivo para configurar express

//Importar express
//const express = require("express"); //Sintaxis de Common JS (Vieja)
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"; 

const app = express(); //Asignarlo a una funcion para ejecutarlo

//Conectar a la base de datos
db.authenticate()
    .then(()=> console.log("Base de datos conectada"))
    .catch(error => console.log(error))

const port = process.env.PORT || 4000; //Definir el puerto

//Habilitar Pug
app.set("view engine", "pug");

//Crear middelware propio para obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear(); //Asigna año actual a una variable para ser comunicada con una vista
    res.locals.nombreSitio = "Agencia de Viajes";

    return next(); //Pasa al siguiente middelware
});

//Agregar body parser para leer datos por metodo POST
app.use(express.urlencoded({extended: true}));

//Definir la carpeta publica
app.use(express.static("public"));

//Agregar router
app.use("/", router); //Soporta todos los verbos

app.listen( port, () =>{ //Arranca el server 
    console.log(`El server esta funcionando en el puerto ${port}`);
});