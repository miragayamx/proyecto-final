const express = require('express');
const auth = require('../middleware/auth');
const productoController = require('../controller/productoController');

const router = express.Router();

router.get('/listar', productoController.getList);

//DESDE AQUI TODAS LAS RUTAS REQUIEREN PERMISO
router.use(auth);

router.post('/agregar', productoController.addItem);

router.put('/actualizar/:id', productoController.updateItem);

router.delete('/borrar/:id', productoController.deleteItem);

module.exports = router;
