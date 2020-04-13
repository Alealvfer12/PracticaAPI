// Importar libreria express

const express = require("express");

// Inicializar librería

const app = express();

// poder ejecutar la api y hacer los respectivos llamados
var cors = require("cors");
app.use(cors());
app.use(express.json());
const router = express.Router();

// Endpoint
app.get("/", (req, res) => {
  res.send("Bienvenido a la API para guardar urls");
});

// IMPORTAR las rutas con los endpoints especificos

const rutasInfo = require("./routes/informacion");
app.use(rutasInfo);


// Creacion de puerto
const port = 3000;

// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
