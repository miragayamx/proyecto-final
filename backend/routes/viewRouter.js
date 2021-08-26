const express = require('express');
const viewcontroller = require('../controller/viewController')
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/home', viewcontroller.home);
router.get('/login', viewcontroller.login);
router.get('/signup', viewcontroller.signup);
router.get('/logout', viewcontroller.logout);
router.get('/carrito', auth, viewcontroller.carritoDetalle);
router.get('/registrar', viewcontroller.registroProducto);
router.get('/productos/:id', viewcontroller.productoDetalle);

module.exports = router;
