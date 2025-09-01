// secure-server.mjs
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
};

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Secure World!\n');
});

server.listen(3000, () => {
  console.log('Sicherer Server läuft unter https://localhost:3000/');
});