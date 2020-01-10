const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect ("mongodb://localhost:27017/tienda", { useNewUrlParser: true } )
  .then( db   =>  console.log("Conexión a BD correcta")  )
  .catch( err  => console.log("Error al conectar a BD: " + err )  );


app.get("/", (req, res) => {
    res.send("Hola")
});

function urlRaiz (req, res) { 
    res.send("hola hola")
}

app.get("/hola", urlRaiz);


app.listen(3000, () => console.log("Servidor iniciado...") );
