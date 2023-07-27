'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.worker,{as:"user",foreignKey:"userId"})
    }
  }
  User.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM('male','female','other'),
    phoneNo: DataTypes.STRING,
    userStatus: DataTypes.ENUM('worker','manager','owner')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};