const mongoose = require('mongoose');
const env = require('../config');

mongoose.connect(env.MONGODB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});