import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";


const paginaInicio = async (req, res) => { //Peticion get a la pagina principal (req envio, res express envia)
    
    const promiseDB = [];

    promiseDB.push( Viaje.findAll({limit: 3}) );
    promiseDB.push( Testimonial.findAll({limit: 3}) );
    
    //Consultar bd para mostrar 3 viajes
    try {
        const resultado = await Promise.all( promiseDB );
        
        res.render("inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0],
            testimoniales: resultado[1]
        });  //Crear respuesta propia
        
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros = (req, res) => {
    res.render("nosotros", {
        pagina: "Nosotros" 
    });
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
    
        res.render("testimoniales", {
            pagina: "Testimoniales",
            testimoniales
        }); 
    } catch (error) {
        console.log(error);
    }

}

const paginaViajes = async (req, res) => {

    //Consultar base de datos antes del renderizado de la vista
    const viajes = await Viaje.findAll(); //Trae todos los resultados que hay en la tabla

    res.render("viajes", {
        pagina: "Próximos Viajes",
        viajes //Pasar los resultados a la vista
    }); 
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    const { slug } = req.params;
    try{
        const resultado = await Viaje.findOne({ where : { slug }});
        
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}