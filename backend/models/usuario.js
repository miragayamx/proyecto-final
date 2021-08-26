const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	nombre: {
		type: String,
    trim: true,
		required: [ true, 'Por favor  ingrese su nombre' ]
	},
	email: {
		type: String,
		required: [ true, 'Por favor ingrese su email' ],
		unique: true,
		lowercase: true,
		validate: [ validator.isEmail, 'El email ingresado no es valido' ]
	},
	edad: {
		type: Number,
		required: [ true, 'Por favor  ingrese su edad' ]
	},
  telefono: {
    type: String,
    required: [true, 'Por favot ingrese su número de celular']
  },
	direccion: {
		type: String
	},
	avatar: {
		type: String,
    required: true
	},
	password: {
		type: String,
		required: [ true, 'Por favor ingrese su password' ],
		minlength: 8
	},
	passwordConfirm: {
		type: String,
		required: [ true, 'Por favor confirme su password' ],
		validate: {
			validator: function(el) {
				return el === this.password;
			},
			message: 'El password ingresado no coincide'
		}
	}
});

userSchema.pre('save', async function(next) {
	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.correctPassword = async function(password, userPassword) {
	return await bcrypt.compare(password, userPassword);
};

const Usuario = mongoose.model('usuario', userSchema);

module.exports = Usuario;
