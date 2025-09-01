import * as z from 'zod/v4';
import de from 'zod/v4/locales/de.js';

z.config(de());

const registerSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich'),
  email: z.email('Ungültige E-Mail-Adresse'),
  password: z.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein'),
});

export default registerSchema;
