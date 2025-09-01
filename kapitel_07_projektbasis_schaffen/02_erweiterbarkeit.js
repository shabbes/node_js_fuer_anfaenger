import express from 'express';
import { authenticate } from './middleware/authenticate.js';

const app = express();

app.use(authenticate);

app.get('/protected', (req, res) => {
  res.send('Geschützte Ressource');
});