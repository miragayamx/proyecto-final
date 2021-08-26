const Producto = require('./producto');
const Carrito = require('./carrito');

const productos = {
	async find(filter = {}) {
		return await Producto.find(filter).lean();
	},
	async findById(id) {
		return await Producto.findById(id).lean();
	},
	async insert(item) {
		const producto = new Producto(item);
		await producto.save();
	},
	async update(id, data) {
		return await Producto.findByIdAndUpdate(id, data);
	},
	async delete(id) {
		return await Producto.findByIdAndDelete(id);
	}
};

const carrito = {
	async find(filter = {}) {
		return await Carrito.find(filter).populate('producto').lean();
	},
	async findById(id) {
		return await Carrito.findById(id).populate('producto').lean();
	},
	async insert(item) {
		const carrito = new Carrito(item);
		await carrito.save();
	},
	async update(id, data) {
		return await Carrito.findByIdAndUpdate(id, data);
	},
	async delete(id) {
		return await Carrito.findByIdAndDelete(id);
	},
	async deleteAll(id) {
		return await Carrito.deleteMany({ usuario: id });
	}
};

module.exports = { productos, carrito };
