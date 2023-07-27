'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class worker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      worker.belongsTo(models.User,{as:"user",foreignKey:"userId"});
      worker.belongsTo(models.Fileupload,{as:"image",foreignKey:"imageId"});
    }
  }
  worker.init({
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'worker',
  });
  return worker;
};