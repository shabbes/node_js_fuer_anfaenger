import bookRoutes from './routes/book.routes.js';
import BookController from './controllers/book.controller.js';
import BookService from './services/book.service.js';
import { SCOPE } from '../core/consts/dependency-injection.const.js';
import BookModel from './models/book.model.js';
import ReviewModel from './models/review.model.js';
import ReviewController from './controllers/review.controller.js';
import reviewRoutes from './routes/review.routes.js';

export default class BookModule {
  static register() {
    return {
      name: 'book',
      controllers: [
        {
          controller: BookController,
          path: '/books',
          router: bookRoutes,
          injects: ['core:LoggingService', 'request:user'],
        },
        {
          controller: ReviewController,
          path: '/reviews',
          router: reviewRoutes,
        },
      ],
      services: [
        {
          service: BookService,
          scope: SCOPE.REQUEST,
          injects: ['request:user'],
        },
      ],
      models: [BookModel, ReviewModel],
    };
  }
}
