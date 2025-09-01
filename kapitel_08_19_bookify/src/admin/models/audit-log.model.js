// src/admin/models/audit-log.model.js
import { Model, DataTypes } from 'sequelize';

export default class AuditLog extends Model {
  static register(sequelize) {
    AuditLog.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        action: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        resource: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        method: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        url: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        body: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        timestamp: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        ipAddress: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'AuditLog',
        tableName: 'audit_logs',
        underscored: true,
        timestamps: false,
      },
    );
  }
}
