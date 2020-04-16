// importar el servicio de postgres

const ServicioPg = require("../services/postgres");


// se valida la informacion del registro 

let validar = informacion => {

    if (!informacion) {
        throw {
            ok: false,
            mensaje: "La información del registro ingresado es obligatorio."
        };

    } else if (!informacion.nombre) {
        throw {
            ok: false,
            mensaje: "El nombre del registro ingresado es obligatorio."
        };
        
    } else if (!informacion.url) {
        throw {
            ok: false,
            mensaje: "la url del registro ingresado es obligatorio."
        };
    }
};

// El metodo guardar la informacion mediante se van insetando los registros
// el cual es asíncrono, para poder que la respuesta no nos de undefined

let guardar = async informacion => {
    let _servicio = new ServicioPg();
    let sql = `INSERT INTO public.informacion
                 (nombre, url, descripcion)VALUES (
                    '${informacion.nombre}',
                    '${informacion.url}',
                    '${informacion.descripcion}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

// Se consultan cada uno de los registros ingrsados, lo cual 
// no se traen todos los objetos, si no que los tragio por el nombre
// el metodo debe ser asyncrono para que no devuelva un undefiend

let consultar = async (informacion) => {
    let _servicio = new ServicioPg();
    let sql = `SELECT * FROM informacion `;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

// Se eliminan cada uno de los registros ingresados 
// por url 

let eliminar = async (toDelete) => {
    let _servicio = new ServicioPg();
    let sql = `DELETE FROM public.informacion WHERE id = ${toDelete.id}`
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
}

// exportar los metodos para ser usados en otros archivos

module.exports = { validar, guardar, consultar, eliminar};

