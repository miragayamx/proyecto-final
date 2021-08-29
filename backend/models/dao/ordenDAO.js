const Orden = require("../orden");
const ordenDTO = require("../dto/ordenDTO");
require("../mongoConnect");

const getAll = async (filter = {}) => {
  try {
    return await Orden.find(filter).lean();
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    return await Orden.findById(id);
  } catch (err) {
    throw err;
  }
};

const addOne = async (item) => {
  try {
    const newItem = new Orden(ordenDTO(item));
    return await newItem.save();
  } catch (err) {
    throw err;
  }
};

const updateById = async (id, item) => {
  try {
    await Orden.findByIdAndUpdate(id, ordenDTO(item));
  } catch (err) {
    throw err;
  }
};

const deleteById = async (id) => {
  try {
    const item = await Orden.findById(id);
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