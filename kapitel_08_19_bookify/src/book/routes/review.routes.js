// src/book/routes/review.routes.js
import { authMiddleware } from '../../user/middlewares/auth.middleware.js';
import { validateReview } from '../middlewares/validate-review.middleware.js';

export default function (router, controllerMethod) {
  router.post('/:bookId', authMiddleware, validateReview, controllerMethod('create'));
}
