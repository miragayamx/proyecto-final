const Mensaje = require("../mensaje");
const mensajeDTO = require("../dto/mensajeDTO");
require("../mongoConnect");

const getAll = async (filter = {}) => {
  try {
    return await Mensaje.find(filter).lean();
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    return await Mensaje.findById(id);
  } catch (err) {
    throw err;
  }
};

const addOne = async (item) => {
  try {
    const newItem = new Mensaje(mensajeDTO(item));
    return await newItem.save();
  } catch (err) {
    throw err;
  }
};

const updateById = async (id, item) => {
  try {
    await Mensaje.findByIdAndUpdate(id, mensajeDTO(item));
  } catch (err) {
    throw err;
  }
};

const deleteById = async (id) => {
  try {
    const item = await Mensaje.findById(id);
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
