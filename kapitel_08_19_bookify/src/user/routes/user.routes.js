// src/user/routes/user.routes.js

import { ROLE } from '../consts/role.const.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { roleMiddleware } from '..//middlewares/role.middleware.js';
import { validateRegister } from '../middlewares/validate-register.middleware.js';
import { auditLogMiddleware } from '../../admin/middlewares/audit-log.middleware.js';

export default function (router, controllerMethod) {
  router.get('/register', controllerMethod('registerForm'));
  router.post('/register', validateRegister, controllerMethod('register'));
  router.get('/login', controllerMethod('loginForm'));
  router.post('/login', auditLogMiddleware('login', 'auth'), controllerMethod('login'));
  router.get(
    '/dashboard',
    authMiddleware,
    roleMiddleware(ROLE.USER),
    controllerMethod('dashboard'),
  );
}
