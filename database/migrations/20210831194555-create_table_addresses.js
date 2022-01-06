'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
    },
    CEP: {
      type: Sequelize.STRING,
      allowNull: false
    },
    logradouro: {
      type: Sequelize.STRING,
      allowNull: false
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: false
    },
    complemento: {
      type: Sequelize.STRING,
      allowNull: true
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false
    },
    estado: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatetAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }    

    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  
  }
};
