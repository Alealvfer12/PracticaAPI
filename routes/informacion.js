//Importar la libreria express
const express = require("express");


const router = express.Router();

//Se importa el controlador
//realiza las acciones de los registros

const _controlador = require("../controllers/informacion");

// Este metodo muestra el resultado del select de la bd


router.get("/informacion",async (req, res) => {

  let info_reg = await req.body;

  _controlador

    .consultar(info_reg)

    .then((informacionDB) => {

      let informacion = informacionDB.rows;

      res.send({ ok: true, info: informacion, mensaje: "los registros consultados" });

    })

    .catch((error) => {

      res.send(error);

    });

});

// Guardamos el registro

router.post("/informacion", async (req, res) => {

    // se captura la informacion del registro, 
    // valida la info,
    // guardar el registro en la bd

  try {  let info_reg = await req.body;
    _controlador.validar(info_reg);
    _controlador
      .guardar(info_reg)
      .then((informacionDB) => {
        res.send({ ok: true, mensaje: "Registro ingresado guardado", info: info_reg });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }

});

//Exportacion del router 
module.exports = router;