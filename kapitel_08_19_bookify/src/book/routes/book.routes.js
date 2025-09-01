// src/book/routes/book.routes.js
import { validateBook } from '../middlewares/validate-book.middleware.js';
import { coverImageUpload } from '../middlewares/cover-image-upload.middleware.js';

export default function (router, controllerMethod) {
  router.get('/', controllerMethod('list'));
  router.get('/create', controllerMethod('createForm'));
  router.get('/:id/edit', controllerMethod('editForm'));
  router.get('/:id', controllerMethod('detail'));
  router.post('/', coverImageUpload.single('coverImage'), validateBook, controllerMethod('create'));
  router.put('/:id', validateBook, controllerMethod('update'));
  router.delete('/:id', controllerMethod('remove'));
}
