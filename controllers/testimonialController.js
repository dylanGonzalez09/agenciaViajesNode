//Importar modelo de los testimoniales
import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
    //console.log(req.body); //Lo que el usuario coloque en el formulario

    //Validar formulario
    const { nombre, correo, mensaje } = req.body
    const errores = [];

    if(nombre.trim() === ""){
        errores.push({mensaje: "El nombre esta vacio"});
    }

    if(correo.trim() === ""){
        errores.push({mensaje: "El correo esta vacio"});
    }

    if(mensaje.trim() === ""){
        errores.push({mensaje: "El mensaje esta vacio"});
    }

    if(errores.length > 0){

        const testimoniales = await Testimonial.findAll();

        //Mostrar la misma vista con los errores
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }else{
        //Almacenar en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });

            //Redireccionar a testimoniales
            res.redirect("/testimoniales");
        } catch (error) {
            console.log(error);
        }
    }
}

export {
    guardarTestimonial
}