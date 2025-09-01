import User from './models/user.model.js';
import UserService from './services/user.service.js';
import UserController from './controllers/user.controller.js';
import userRoutes from './routes/user.routes.js';
import userAdminRoutes from './routes/user.admin.routes.js';
import UserAdminController from './controllers/user.admin.controller.js';

export default class UserModule {
  static register() {
    return {
      name: 'user',
      controllers: [
        {
          controller: UserController,
          path: '/users',
          router: userRoutes,
          injects: ['core:LoggingService', 'user:UserService', 'request:user'],
        },
        {
          controller: UserAdminController,
          path: '/admin/users',
          router: userAdminRoutes,
          injects: ['user:UserService', 'request:user'],
        },
      ],
      services: [UserService],
      models: [User],
    };
  }
}
