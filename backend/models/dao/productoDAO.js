const Producto = require("../producto");
const productoDTO = require("../dto/productoDTO");
require("../mongoConnect");

const getAll = async (filter = {}) => {
  try {
    return await Producto.find(filter).lean();
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    return await Producto.findById(id);
  } catch (err) {
    throw err;
  }
};

const addOne = async (item) => {
  try {
    const newItem = new Producto(productoDTO(item));
    return await newItem.save();
  } catch (err) {
    throw err;
  }
};

const updateById = async (id, item) => {
  try {
    await Producto.findByIdAndUpdate(id, productoDTO(item));
  } catch (err) {
    throw err;
  }
};

const deleteById = async (id) => {
  try {
    const item = await Producto.findById(id);
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
