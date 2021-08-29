const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const sendEmail = require('../services/nodemailer');
const env = require('../config');

const tokenSecret = env.TOKEN_SECRET;
const tokenExpires = env.SESSION_EXPIRATION;
const generateToken = (user) => jwt.sign({ data: user }, tokenSecret, { expiresIn: tokenExpires });

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Usuario.findOne({ email: email });
		if (!user) throw new Error('El usuario no existe');
		if (!user.correctPassword(password, user.password)) throw new Error('La password ingresada es incorrecta');
		res.status(200).json({ token: generateToken(user) });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const postLogin = (req, res) => {
	try {
		res.status(200).json({ user: req.user });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const logout = (req, res) => {
	try {
		req.logout();
		res.redirect('/');
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const failLogin = (req, res) => {
	res.json({ message: 'USER ERROR LOGIN', url: '/login' });
};

const signUp = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Usuario.findOne({ email: email });
		if (user) throw new Error('El usuario ya existe');
		const newUser = new Usuario(req.body);
		await newUser.save();
		sendEmail({
			from: 'Servidor Node',
			to: env.ADMIN_EMAIL,
			subject: `Nuevo registro`,
			html: `
						<ul>
							<li>nombre: ${newUser.nombre}</li>
							<li>email: ${newUser.email}</li>
							<li>edad: ${newUser.edad}</li>
							<li>telefono: ${newUser.telefono}</li>
						</ul>`
		});
		res.status(200).json({ token: generateToken(user) });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const failSingUp = (req, res) => {
	res.json({ message: 'USER ERROR SIGNUP', url: '/signup' });
};

module.exports = {
	login,
	postLogin,
	logout,
	failLogin,
	signUp,
	failSingUp
};
