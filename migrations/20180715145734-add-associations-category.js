'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Categories', // name of Source model
      'parentId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        allowNull: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Categories', // name of Source model
      'parentId' // key we want to remove
    );
  }
};
