import adminRoutes from './routes/admin.routes.js';
import AdminController from './controllers/admin.controller.js';
import StatisticService from './services/statistic.service.js';
import AuditLog from './models/audit-log.model.js';

export default class AdminModule {
  static register() {
    return {
      name: 'admin',
      controllers: [
        {
          controller: AdminController,
          path: '/admin',
          router: adminRoutes,
          injects: ['admin:StatisticService'],
        },
      ],
      services: [StatisticService],
      models: [AuditLog],
    };
  }
}
