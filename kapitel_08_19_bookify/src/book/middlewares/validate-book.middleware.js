// src/book/middlewares/validate-book.middleware.js

import bookSchema from '../schemas/book.schema.js';

export async function validateBook(req, res, next) {
  try {
    const parsedData = {
      ...req.body,
      authorId: parseInt(req.body.authorId, 10),
      publishedYear: parseInt(req.body.publishedYear, 10),
    };

    await bookSchema.parseAsync(parsedData);

    next();
  } catch (error) {
    const errors = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);

    res.status(400).view('book:error.njk', { errors });
  }
}
