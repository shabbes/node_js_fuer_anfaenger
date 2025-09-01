// cluster-server.mjs
import cluster from 'cluster';
import os from 'os';
import http from 'http';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} hat sich verabschiedet!`);
    cluster.fork(); // Ersetzt den gestorbenen Worker
  });
} else {
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hallo vom Worker\n');
  });

  server.listen(3000, () => {
    console.log(`Worker ${process.pid} wurde gestartet`);
  });
}