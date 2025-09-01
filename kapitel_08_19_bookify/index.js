// index.js
import dotenv from 'dotenv';
import Kernel from './src/core/kernel.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();

const port = process.env.APP_PORT ?? 3000;
const kernel = new Kernel();
const app = await kernel.boot();

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
