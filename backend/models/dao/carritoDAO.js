const Carrito = require("../carrito");
const carritoDTO = require("../dto/carritoDTO");
require("../mongoConnect");

const getAll = async (filter = {}) => {
  try {
    return await Carrito.find(filter).lean();
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    return await Carrito.findById(id);
  } catch (err) {
    throw err;
  }
};

const addOne = async (item) => {
  try {
    const newItem = new Carrito(carritoDTO(item));
    return await newItem.save();
  } catch (err) {
    throw err;
  }
};

const updateById = async (id, item) => {
  try {
    await Carrito.findByIdAndUpdate(id, carritoDTO(item));
  } catch (err) {
    throw err;
  }
};

const deleteById = async (id) => {
  try {
    const item = await Carrito.findById(id);
    await item.remove();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAll,
  getById,
  addOne,
  updateById,
  deleteById,
};