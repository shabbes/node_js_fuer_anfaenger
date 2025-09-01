// async-server.mjs
import http from 'http';
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    try {
      const data = await fs.readFile('data.json', 'utf8');

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    } catch (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error\n');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Seite nicht gefunden\n');
  }
});

server.listen(3000, () => {
  console.log('Server läuft unter http://localhost:3000/');
});