const mongoose = require('mongoose');

const carritoItemSchema = new mongoose.Schema({
	producto: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'producto',
		required: true
	},
	cantidad: {
		type: Number,
		required: true
	}
});

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
	items: [
		{
			type: carritoItemSchema
		}
	],
	direccion: {
		type: String,
		trim: true,
		required: true
	}
});

const Carrito = mongoose.model('carrito', carritoSchema);

module.exports = Carrito;
