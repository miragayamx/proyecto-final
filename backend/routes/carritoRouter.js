const express = require("express");
const carritoController = require("../controller/carritoController");
const auth = require('../middleware/auth');

const router = express.Router();


router.get("/listar", carritoController.getList);

router.post("/agregar/:id_producto", carritoController.addItem);
router.post('/comprar', auth, carritoController.buy);

router.delete("/borrar/:id", carritoController.deleteItem);

module.exports = router;
