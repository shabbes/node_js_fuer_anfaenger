import { Model, DataTypes } from 'sequelize';

export default class Book extends Model {
  static register(sequelize) {
    Book.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isbn: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.TEXT,
        },
        coverImage: {
          type: DataTypes.STRING,
        },
        publishedYear: {
          type: DataTypes.INTEGER,
        },
      },
      {
        sequelize,
        modelName: 'Book',
        tableName: 'books',
        underscored: true,
        timestamps: true,
      },
    );
  }

  static associate(models) {
    Book.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
    });
    Book.hasMany(models.Review, {
      foreignKey: 'bookId',
      as: 'reviews',
    });
  }
}
