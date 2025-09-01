import { z } from 'zod';

const envSchema = z.object({
  API_KEY: z.string(),
  PORT: z.string().regex(/^\d+$/).transform(Number),
});

const env = envSchema.parse(process.env);

console.log(`Server läuft auf Port ${env.PORT}`);