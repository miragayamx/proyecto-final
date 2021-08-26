const nodemailer = require('nodemailer');
const logger = require('../winstonConfig');

const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: 'darrel.romaguera@ethereal.email',
		pass: 'jZ2tjRbvk16TsJyTtQ'
	},
	tls: {
		rejectUnauthorized: false
	}
});

const sendEmail = ({ from = 'servidor Node', to, subject, html }) => {
	const mailOptions = { from, to, subject, html };
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			logger.info(err);
			logger.error(err);
			return err;
		}
		logger.info(info);
	});
};

module.exports = sendEmail;