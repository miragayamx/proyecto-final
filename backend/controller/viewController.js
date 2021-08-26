const { productos, carrito } = require('../models/dao');

const home = async (req, res) => {
	try {
		const lista = await productos.find();
		res.status(200).render('home', { user: !!req.user ? req.user : null, lista: lista, existe: true });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const login = async (req, res) => {
	try {
		res.status(200).render('login', { user: !!req.user ? req.user : null });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const signup = async (req, res) => {
	try {
		res.status(200).render('signup', { user: !!req.user ? req.user : null });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const logout = async (req, res) => {
	try {
		const user = req.user;
		req.logout();
		res.status(200).render('logout', { user: user });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const carritoDetalle = async (req, res) => {
	try {
		const lista = await carrito.find();
		const existe = !!lista.length;
		res.status(200).render('carrito', { user: !!req.user ? req.user : null, lista: lista, existe: existe });
	} catch (err) {
		res.status(404).json({ error: err.message });
	}
};

const registroProducto = (req, res) => {
	res.status(200).render('ingreso-producto', { user: !!req.user ? req.user : null });
};

const productoDetalle = async (req, res) => {
	try {
		const producto = await productos.findById(req.params.id);
		res.status(200).render('detalle-producto', { user: !!req.user ? req.user : null, producto: producto });
	} catch (err) {
		res.status(200).render('detalle-producto', { user: !!req.user ? req.user : null, producto: null });
	}
};

module.exports = {
	home,
	login,
	signup,
	logout,
	carritoDetalle,
	registroProducto,
	productoDetalle
};
