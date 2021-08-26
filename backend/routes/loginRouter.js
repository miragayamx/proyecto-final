const express = require('express');
const passport = require('passport');
const loginController = require('../controller/loginController');
const upload = require('../middleware/multer');

const router = express.Router();

const passportMiddleware = (req, res, next) => {
	req.body.username = req.body.email;
	next();
};

router
	.route('/login')
	.get(loginController.login)
	.post(
		passportMiddleware,
		passport.authenticate('login', { failureRedirect: '/faillogin' }),
		loginController.postLogin
	);
router.get('/faillogin', loginController.failLogin);

router
	.route('/signup')
	.get(loginController.signUp)
	.post(
		upload.single('avatar'),
		passportMiddleware,
		passport.authenticate('signup', { failureRedirect: '/failsignup' }),
		loginController.postLogin
	);
router.get('/failsignup', loginController.failSingUp);

router.get('/logout', loginController.logout);

module.exports = router;
