// server-routing.mjs
import http from 'http';

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Willkommen auf der Homepage!\n');
  } else if (url === '/about' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Über mich Seite\n');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Seite nicht gefunden\n');
  }
});

server.listen(3000, () => {
  console.log('Server läuft unter http://localhost:3000/');
});