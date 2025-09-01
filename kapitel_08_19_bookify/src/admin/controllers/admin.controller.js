// src/admin/controllers/admin.controller.js

import { Op } from 'sequelize';
import os from 'os';
import AuditLog from '../models/audit-log.model.js';

export default class AdminController {
  constructor(statisticService) {
    this.statisticService = statisticService;
  }

  async dashboard(req, res) {
    const stats = await this.statisticService.getCounts();

    res.view('admin:dashboard.njk', { stats });
  }

  async system(req, res) {
    const { q, method } = req.query;
    const where = {};

    if (q) {
      const conditions = [
        { url: { [Op.iLike]: `%${q}%` } },
        { ipAddress: { [Op.iLike]: `%${q}%` } },
        { action: { [Op.iLike]: `%${q}%` } },
        { resource: { [Op.iLike]: `%${q}%` } },
      ];

      if (!isNaN(q)) {
        conditions.unshift({ userId: parseInt(q, 10) });
      }

      where[Op.or] = conditions;
    }

    if (method) {
      where.method = method;
    }

    const [auditLogs, stats] = await Promise.all([
      AuditLog.findAll({
        where,
        order: [['timestamp', 'DESC']],
        limit: 100,
      }),
      this.statisticService.getCounts(),
    ]);

    const systemInfo = {
      cpuLoad: os.loadavg(),
      freeMemory: os.freemem(),
      totalMemory: os.totalmem(),
      uptime: os.uptime(),
    };

    res.view('admin:audit-log.njk', {
      auditLogs,
      searchQuery: q ?? '',
      selectedMethod: method ?? '',
      systemInfo,
      stats,
    });
  }
}
