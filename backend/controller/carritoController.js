const carritoDao = require('../models/dao/carritoDAO');
const productoDao = require('../models/dao/productoDAO');
const sendEmail = require('../services/nodemailer');

const getList = async (req, res) => {
	let response;
	const id = req.query.id;
	if (!!id) {
		response = await carritoDao.getById(id);
	} else {
		response = await carritoDao.getAll();
	}
	res.status(200).json(response);
};

const addItem = async (req, res) => {
	try {
		const producto = await productoDao.getById(req.params.id_producto);
		const item = {
			timestamp: Date.now(),
			producto: producto._id,
			usuario: req.user._id
		};
		await carritoDao.addOne(item);
		res.status(201).json({ notificacion: 'Producto agregado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const buy = async (req, res) => {
	try {
		const pedido = await carritoDao.getAll();
		const html = pedido.map((el) => {
			return `
				<p>Producto:${el.producto.nombre} / codigo: ${el.producto.codigo} / precio: ${el.producto.precio}</p>
			`;
		});
		sendEmail({
			form: 'Servidor Node',
			to: process.env.ADMIN_EMAIL,
			subject: `Nuevo pedido de ${req.user.nombre} email: ${req.user.email}`,
			html: `<p>${html.join('')}</p>`
		});
		await carritoDao.deleteById(req.user._id);
		res.status(201).json({ notificacion: 'Pedido realizado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const deleteItem = async (req, res) => {
	try {
		await carritoDao.deleteById(req.params.id);
		res.status(200).json({ notificacion: 'Producto eliminado con exito!' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getList,
	addItem,
	buy,
	deleteItem
};
