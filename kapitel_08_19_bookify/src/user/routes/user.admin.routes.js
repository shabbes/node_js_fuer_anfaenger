// src/user/routes/user.admin.routes.js

import { authMiddleware } from '../middlewares/auth.middleware.js';
import { roleMiddleware } from '../middlewares/role.middleware.js';
import { ROLE } from '../consts/role.const.js';
import { validateUser } from '../middlewares/validate-user.middleware.js';

export default function (router, controllerMethod) {
  router.get('/', authMiddleware, roleMiddleware(ROLE.ADMIN), controllerMethod('table'));
  router.get('/create', authMiddleware, roleMiddleware(ROLE.ADMIN), controllerMethod('createForm'));
  router.post(
    '/',
    authMiddleware,
    roleMiddleware(ROLE.ADMIN),
    validateUser,
    controllerMethod('create'),
  );
  router.get('/:id', authMiddleware, roleMiddleware(ROLE.ADMIN), controllerMethod('editForm'));
  router.put(
    '/:id',
    authMiddleware,
    roleMiddleware(ROLE.ADMIN),
    validateUser,
    controllerMethod('update'),
  );
  router.delete('/:id', authMiddleware, roleMiddleware(ROLE.ADMIN), controllerMethod('remove'));
}
