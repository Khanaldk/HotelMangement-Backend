'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hotel.init({
    hotelName: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    openingTime: DataTypes.STRING,
    clossingTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};