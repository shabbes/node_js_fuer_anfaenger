// src/book/schemas/book.schema.js

import * as z from 'zod/v4';
import de from 'zod/v4/locales/de.js';

z.config(de());

const bookSchema = z.object({
  title: z.string().min(1, 'Titel ist erforderlich'),
  authorId: z.number().int().positive('Gültige Autor-ID erforderlich'),
  isbn: z.string().min(10, 'ISBN muss mindestens 10 Zeichen lang sein'),
  description: z.string().optional(),
  publishedYear: z
    .number()
    .int()
    .min(1000, 'Ungültiges Jahr')
    .max(new Date().getFullYear(), 'Jahr darf nicht in der Zukunft liegen'),
});

export default bookSchema;
