const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true
	},
    descripcion: {
		type: String,
		required: true,
		trim: true
	},
    foto: {
		type: String,
        required: true,
		trim: true
	},
	precio: {
		type: Number,
		required: true
	},
    categoria: {
		type: String,
		required: true
	},
});

const Producto = mongoose.model('producto', productoSchema);

module.exports = Producto;