'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     */
    
    await queryInterface.createTable('passengers', { 
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      lastName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      identificationNumber: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.NOW
      },
      category: {
        type: Sequelize.DataTypes.ENUM('regular', 'retired', 'student'),
        defaultValue: 'regular'
      }
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here*/

     await queryInterface.dropTable('passengers');
  }
};
