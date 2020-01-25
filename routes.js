const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

// --------------- API REST CRUD

router.get("/clientes", controller.readClientes);            // Read All
router.get("/clientes/:id", controller.readCliente);         // Read
router.delete("/clientes/:id", controller.deleteCliente);    // Delete
router.put("/clientes/:id", controller.updateCliente);       // Update
router.post("/clientes", controller.createCliente);          // Create

router.get("/articulos", controller.readArticulos);          // Read All
router.get("/articulos/:id", controller.readArticulo);       // Read
router.delete("/articulos/:id", controller.deleteArticulo);  // Delete
router.put("/articulos/:id", controller.updateArticulo);     // Update
router.post("/articulos", controller.createArticulo);        // Create


module.exports = router;
