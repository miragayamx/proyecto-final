const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const logger = require('./winstonConfig');
const productoRouter = require('./routes/productoRouter');
const carritoRouter = require('./routes/carritoRouter');
const loginRouter = require('./routes/loginRouter');
const viewRouter = require('./routes/viewRouter');
const { createUploadsFolder } = require('./utils/fileManager');
const env = require('./config');

const app = express();

app.engine(
	'hbs',
	handlebars({
		extname: 'hbs',
		defaultLayout: 'index',
		layoutsDir: path.join(__dirname, '/views/layouts'),
		partialsDir: path.join(__dirname, '/views/partials')
	})
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', viewRouter);
app.use('/api/', loginRouter);
app.use('/api/productos', productoRouter);
app.use('/api/carrito', carritoRouter);

app.all('*', (req, res) => {
	res.status(404).json({
		error: -2,
		descripcion: `ruta ${req.url} método ${req.method} no implementada`
	});
});

const fServerOn = () => {
	const server = app.listen(env.PORT, async () => {
		logger.info(`El servidor esta corriendo en el puerto: ${server.address().port}`);
		await createUploadsFolder();
	});

	server.on('error', (err) => {
		logger.info(`Error de servidor: ${err}`);
		logger.error(`Error de servidor: ${err}`);
	});
};

module.exports = fServerOn;
