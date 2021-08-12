'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.bookmarks = this.belongsTo(models.bookmarks)
      // define association here
    }
  };
  Comments.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return Comments;
};