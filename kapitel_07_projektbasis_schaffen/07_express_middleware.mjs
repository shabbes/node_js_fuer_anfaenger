// app.mjs
import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Middleware wird ausgeführt');

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});