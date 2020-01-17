const mongoose = require ('mongoose');

const Cliente = mongoose.model('Cliente', 
  { nombre: String, apellidos: String }
);

const Articulo = mongoose.model('Articulo',
    new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
    Cliente: Cliente,
    Articulo: Articulo
}

// module.exports = {
//     Cliente,
//     Articulo
// }
