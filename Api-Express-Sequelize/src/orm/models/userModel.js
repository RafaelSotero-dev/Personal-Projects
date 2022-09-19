const userSchema = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  return user
};

module.exports = userSchema;