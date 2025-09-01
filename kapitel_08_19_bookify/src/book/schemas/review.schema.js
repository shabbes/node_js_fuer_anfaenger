// src/book/schemas/review.schema.js

import * as z from 'zod/v4';
import de from 'zod/v4/locales/de.js';

z.config(de());

const reviewSchema = z.object({
  rating: z
    .string()
    .transform((val) => parseInt(val, 10))
    .pipe(z.number().int().min(1).max(5)),
  comment: z.string().max(2000, 'Ein Kommentar darf maximal 2000 Zeichen lang sein.').optional(),
});

export default reviewSchema;
