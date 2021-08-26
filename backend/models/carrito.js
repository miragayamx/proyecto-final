const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'producto',
        required: true
    },    
});

const Carrito = mongoose.model('carrito', carritoSchema);

module.exports = Carrito;