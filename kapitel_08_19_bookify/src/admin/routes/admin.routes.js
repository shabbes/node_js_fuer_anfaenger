import { ROLE } from '../../user/consts/role.const.js';
import { authMiddleware } from '../../user/middlewares/auth.middleware.js';
import { roleMiddleware } from '../../user/middlewares/role.middleware.js';
import { auditLogMiddleware } from '../middlewares/audit-log.middleware.js';

export default function (router, controllerMethod) {
  router.get(
    '/',
    authMiddleware,
    roleMiddleware(ROLE.ADMIN),
    auditLogMiddleware('view', 'dashboard'),
    controllerMethod('dashboard'),
  );
  router.get('/system', authMiddleware, roleMiddleware(ROLE.ADMIN), controllerMethod('system'));
}
