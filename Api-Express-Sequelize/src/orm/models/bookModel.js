const bookSchema = (sequelize, DataTypes) => {
  const book = sequelize.define(
    'book',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      name: DataTypes.STRING,
      releaseYear: DataTypes.STRING,
      totalPages: DataTypes.INTEGER,
    },
    {
      tableName: 'books',
      timestamps: false,
      underscored: true,
    },
  );

  return book;
};

module.exports = bookSchema;