const mongoose = require('mongoose');

const OrdenItemSchema = new mongoose.Schema({
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

const ordenSchema = new mongoose.Schema({
	timestamp: {
		type: Date,
		required: true
	},
	usuario: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'usuario',
		required: true
	},
	numero: {
		type: Number,
		required: true
	},
	estado: {
		type: String,
		trim: true,
		required: true
	},
	items: [
		{
			type: OrdenItemSchema
		}
	],
	direccion: {
		type: String,
		trim: true,
		required: true
	}
});

const Orden = mongoose.model('orden', ordenSchema);

module.exports = Orden;
