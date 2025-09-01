import { Model, DataTypes } from 'sequelize';

export default class Author extends Model {
  static register(sequelize) {
    Author.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        biography: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        modelName: 'Author',
        tableName: 'authors',
        underscored: true,
        timestamps: true,
      },
    );
  }

  static associate(models) {
    Author.hasMany(models.Book, {
      foreignKey: 'authorId',
      as: 'books',
    });
  }
}
