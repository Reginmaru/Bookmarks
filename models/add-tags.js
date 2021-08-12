'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  addtags.init({
    bookmarksId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'addtags',
  });
  return addtags;
};