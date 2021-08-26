const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/usuario');
const sendEmail = require('../services/nodemailer');


passport.use(
	'login',
	new LocalStrategy(
		{
			passReqToCallback: true
		},
		async function(req, username, password, done) {
			try {
				const user = await Usuario.findOne({ email: username });
				if (!user) return done(null, false);
				if (!user.correctPassword(password, user.password)) return done(null, false);
				return done(null, user);
			} catch (err) {
				throw err;
			}
		}
	)
);

passport.use(
	'signup',
	new LocalStrategy(
		{
			passReqToCallback: true
		},
		function(req, username, password, done) {
			findOrCreateUser = async function() {
				try {
					const userExists = await Usuario.findOne({ email: username });
					if (userExists) return done(null, false);
					const newUser = new Usuario({ ...req.body, avatar: '/uploads/' + req.file.filename });
					await newUser.save();
					sendEmail({
						from: 'Servidor Node',
						to: process.env.ADMIN_EMAIL,
						subject: `Nuevo registro`,
						html: `
						<ul>
							<li>nombre: ${newUser.nombre}</li>
							<li>email: ${newUser.email}</li>
							<li>edad: ${newUser.edad}</li>
							<li>telefono: ${newUser.telefono}</li>
							<li>direccion: ${newUser.direccion}</li>
						</ul>`
					});
					return done(null, newUser);
				} catch (err) {
					throw err;
				}
			};
			process.nextTick(findOrCreateUser);
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
	try {
		const user = await Usuario.findById(id);
		done(null, user);
	} catch (err) {
		throw err;
	}
});
