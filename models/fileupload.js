'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fileupload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fileupload.hasMany(models.worker,{as:"image",foreignKey:"imageId"});
    }
  }
  Fileupload.init({
    filename: DataTypes.STRING,
    mimetype: DataTypes.STRING,
    filesize: DataTypes.BIGINT,
    extension: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fileupload',
  });
  return Fileupload;
};