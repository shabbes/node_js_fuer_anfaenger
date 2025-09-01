// middleware-server.mjs
import http from 'http';

const requestLogger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};

const server = http.createServer((req, res) => {
  requestLogger(req, res, () => {
    if (req.url === '/' && req.method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Willkommen auf der Homepage!\n');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Seite nicht gefunden\n');
    }
  });
});

server.listen(3000, () => {
  console.log('Server läuft unter http://localhost:3000/');
});