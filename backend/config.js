const path = require('path');
const numCPUs = require('os').cpus().length;
const dotenv = require('dotenv');

dotenv.config({
	path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

const concurrency = process.env.NODE_ENV === 'production' ? proprocess.env.WEB_CONCURRENCY || 1 : numCPUs;

const env = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
	MONGODB_URL: process.env.MONGODB_URL,
	SESSION_EXPIRATION: process.env.SESSION_EXPIRATION,
	TOKEN_SECRET: process.env.TOKEN_SECRET,
	CLUSTER_MODE: process.env.CLUSTER_MODE,
	WEB_CONCURRENCY: concurrency
};

module.exports = env;