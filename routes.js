const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");

const corsOptions = {
  origin: 'https://tiendafrontend.now.sh'
}

const router = express.Router();


// --------------- API REST CRUD

router.get("/clientes", cors(corsOptions), controller.readClientes);            // Read All
router.get("/clientes/:id", cors(corsOptions), controller.readCliente);         // Read
router.delete("/clientes/:id", cors(corsOptions), controller.deleteCliente);    // Delete
router.put("/clientes/:id", cors(corsOptions), controller.updateCliente);       // Update
router.post("/clientes", cors(corsOptions), controller.createCliente);          // Create

router.get("/articulos", cors(corsOptions), controller.readArticulos);          // Read All
router.get("/articulos/:id", cors(corsOptions), controller.readArticulo);       // Read
router.delete("/articulos/:id", cors(corsOptions), controller.deleteArticulo);  // Delete
router.put("/articulos/:id", cors(corsOptions), controller.updateArticulo);     // Update
router.post("/articulos", cors(corsOptions), controller.createArticulo);        // Create


module.exports = router;
