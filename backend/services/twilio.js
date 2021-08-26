const accountSid = 'AC061442e23b3e330a2d9e935999b94ff9';
const authToken = '8ecee29846348617ebc3b584c46555cd';
const logger = require('../winstonConfig');

const client = require('twilio')(accountSid, authToken);

const sendSMS = ({ message = 'Hola soy un SMS', phone }) => {
	client.messages
		.create({
			body: message,
			from: '+1 571 789 1332',
			to: phone
		})
		.then((message) => logger.info(message.sid))
		.catch((err) => {
			logger.info(err);
			logger.error(err);
		});
};

const sendWhatsapp = ({ message = 'Hola soy un SMS', phone }) => {
	client.messages
		.create({
			body: message,
			from: 'whatsapp:+14155238886',
			to: `whatsapp:${phone}`
		})
		.then((message) => logger.info(message.sid))
		.catch((err) => {
			logger.info(err);
			logger.error(err);
		});
};

module.exports = { sendSMS, sendWhatsapp };
