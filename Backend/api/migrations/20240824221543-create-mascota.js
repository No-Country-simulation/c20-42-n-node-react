'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mascotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      especie: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.FLOAT
      },
      sexo: {
        type: Sequelize.STRING
      },
      estado_salud: {
        type: Sequelize.STRING
      },
      vacunada: {
        type: Sequelize.BOOLEAN
      },
      esterilizada: {
        type: Sequelize.BOOLEAN
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      foto: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mascotas');
  }
};