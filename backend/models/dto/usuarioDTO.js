const usuarioDTO = ({ nombre, emmail, edad, telefono, password, passwordConfirm }) => ({
	nombre,
	emmail,
	edad,
	telefono,
	password,
	passwordConfirm
});

module.exports = usuarioDTO;
