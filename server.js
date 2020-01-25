require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;


// CONEXIÓN A BASE DE DATOS
mongoose.connect(DB_URI, { useNewUrlParser: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));


// MIDDLEWARE
app.use(cors());            // Soporte para CORS
app.use(express.json());    // IMPORTANTE: Poner esto antes de las rutas
app.use('/api', cors(), apiRoutes);


// SERVIDOR WEB
app.listen(PORT || 3000, () => console.log("Servidor iniciado..."));
