const mongoose = require('mongoose');

const mensajeSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true
	},
	tipo: {
		type: String,
		required: true,
		trim: true
	},
	message: {
		type: String,
		required: true,
		trim: true
	},
	date: {
		type: Date,
		required: true
	}
});

const Mensaje = mongoose.model('mensaje', mensajeSchema);

module.exports = Mensaje;