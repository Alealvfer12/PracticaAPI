// Importar libreria express

const express = require("express");

// Inicializar librería
const app = express();
app.use(express.json());

// Endpoint
app.get("/", (req, res) => {
  res.send("Bienvenido a la API para guardar urls");
});

// IMPORTAR las rutas con los endpoints especificos

const rutas_personas = require("./routes/personas");
app.use(rutas_personas);

const rutas_viviendas = require("./routes/viviendas");
app.use(rutas_viviendas);

// Creacion de puerto
const port = 3000;

// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
