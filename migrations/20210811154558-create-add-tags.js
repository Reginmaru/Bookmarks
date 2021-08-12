'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('add-tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookmarksId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:"bookmarks"
          },
          key: "id"
        },
        onDelete:"CASCADE", 
        allowNull: false

      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:"tags"
          },
          key: "id"
        },
        onDelete:"CASCADE", 
        allowNull: false

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('add-tags');
  }
};