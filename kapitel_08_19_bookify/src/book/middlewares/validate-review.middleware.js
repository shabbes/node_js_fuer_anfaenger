// src/book/middlewares/validate-review.middleware.js

import reviewSchema from '../schemas/review.schema.js';

export async function validateReview(req, res, next) {
  try {
    await reviewSchema.parseAsync(req.body);

    next();
  } catch (error) {
    const errors = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);

    res.status(400).view('book:error.njk', { errors });
  }
}
