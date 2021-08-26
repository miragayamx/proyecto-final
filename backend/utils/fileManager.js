const fs = require('fs');

exports.createUploadsFolder = () => {
	fs.promises.mkdir('./public/uploads').then(() => console.log('Directorio uploads creado!')).catch((err) => {
		if (err.code === 'EEXIST') return console.log('Directorio uploads creado!');
		console.log(err);
	});
};

exports.createFolder = async (path) => {
	fs.promises.mkdir(path).then(() => 'Directorio creado con exito!').catch((err) => {
		if (err.code === 'EEXIST') return;
		console.log(err);
	});
};

exports.readFile = async (file) => {
	try {
		return await fs.promises.readFile(file, 'utf-8');
	} catch (err) {
		throw err;
	}
};

exports.saveFile = async (file, data) => {
	try {
		await fs.promises.writeFile(file, data);
	} catch (err) {
		throw err;
	}
};

exports.appendFile = async (file, data = '') => {
	try {
		await fs.promises.appendFile(file, data);
	} catch (err) {
		throw err;
	}
};

exports.deleteFile = async (file) => {
	try {
		await fs.promises.unlink(file);
	} catch (err) {
		throw err;
	}
};
