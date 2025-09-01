import { Model, DataTypes } from 'sequelize';

export default class Review extends Model {
  static register(sequelize) {
    Review.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 5,
          },
        },
        comment: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Review',
        tableName: 'reviews',
        underscored: true,
        timestamps: true,
      },
    );
  }

  static associate(models) {
    Review.belongsTo(models.Book, {
      foreignKey: 'bookId',
      as: 'book',
    });
    Review.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
}
