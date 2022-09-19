const useBookSchema = (sequelize, _DataTypes) => {
  const userBook = sequelize.define(
    'userBook',
    {},
    {
      timestamps: false,
      underscored: true,
      tableName: 'users_books',
    },
  );

  userBook.associate = (models) => {
    models.user.belongsToMany(models.book, {
      as: 'books',
      through: userBook,
      foreignKey: 'userId',
      otherKey: 'bookId',
    });

    models.book.belongsToMany(models.user, {
      as: 'users',
      through: userBook,
      foreignKey: 'bookId',
      otherKey: 'userId',
    });
  }

  return userBook;
};

module.exports = useBookSchema;
