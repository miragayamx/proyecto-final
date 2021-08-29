const carritoDTO = ({ usuario, items, direccion, estado = 'generada', numero }) => ({
	usuario,
	items,
	direccion,
	estado,
	numero
});

module.exports = carritoDTO;
