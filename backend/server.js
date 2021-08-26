const cluster = require('cluster');
const fServerOn = require('./fServerOn');
const env = require('./config');

const clusterMode = env.CLUSTER_MODE === 'true';

if (clusterMode) {
	if (cluster.isMaster) {
		for (let i = 0; i < env.WEB_CONCURRENCY; i++) {
			cluster.fork();
		}
		cluster.on('exit', (worker, code, signal) => {
			console.log(`Worker ${worker.process.pid} died`);
		});
	} else {
		console.log('Running server cluster!!!');
		fServerOn();
	}
} else {
	fServerOn();
}
