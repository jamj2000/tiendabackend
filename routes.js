const { Cliente, Articulo } = require("./models.js");
const express = require("express");

const router = express.Router();

// --------------- API REST CRUD

// Read All
router.get("/clientes", (req, res) => {
  // A partir de aquí es el equivalente al Controller
  Cliente.find({}, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
});

// Read
router.get("/clientes/:categoria/:id", (req, res) => {
  Cliente.findOne({ _id: req.params.id }, (err, data) => {
    // La _ de _id se indica porque es un campo de MongoDB automático
    if (err) res.json({ error: err });
    else res.json(data);
  });
});

// Delete
router.delete("/clientes/:id", (req, res) => {
  Cliente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
    if (err) res.json({ error: err });
    else res.json(data);
  });
});

// Update
router.put("/clientes/:id", (req, res) => {
  Cliente.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { nombre: req.body.nombre, apellidos: req.body.apellidos } }, // Llama al campo nombre del formulario
    (err, data) => {
      if (err) res.json({ error: err });
      else res.json(data);
    }
  );
});

// Create
router.post("/clientes", (req, res) => {
    const cliente = new Cliente( {nombre: req.body.nombre, apellidos: req.body.apellidos} );
    cliente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
      });
});

module.exports = router;
