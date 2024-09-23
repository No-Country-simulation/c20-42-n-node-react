'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addConstraint('Adoptantes', {
      fields: ['id_usuario'],  // A coluna que se tornará chave estrangeira
      type: 'foreign key',
      name: 'fk_usuario_adoptante',  // Nome da restrição
      references: {
        table: 'Usuarios',  // Tabela de referência
        field: 'id'  // Coluna de referência
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('MascotaCentros', {
      fields: ['id_mascota'],
      type: 'foreign key',
      name: 'fk_mascotacentro_mascota',
      references: {
        table: 'Mascotas',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('MascotaCentros', {
      fields: ['id_centro'],
      type: 'foreign key',
      name: 'fk_mascotacentro_centroadopcion',
      references: {
        table: 'CentroAdopcions',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('Adopcions', {
      fields: ['id_adoptante'],
      type: 'foreign key',
      name: 'fk_adopcion_adoptante',
      references: {
        table: 'Adoptantes',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addConstraint('Adopcions', {
      fields: ['id_mascota'],
      type: 'foreign key',
      name: 'fk_adopcion_mascota',
      references: {
        table: 'Mascotas',
        field: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeConstraint('Adoptantes', 'fk_adoptante_usuario');
    await queryInterface.removeConstraint('MascotaCentros', 'fk_mascotacentro_mascota');
    await queryInterface.removeConstraint('MascotaCentros', 'fk_mascotacentro_centroadopcion');
    await queryInterface.removeConstraint('Mascotas', 'fk_mascota_centroadopcion');
    await queryInterface.removeConstraint('Adopcions', 'fk_adopcion_adoptante');
    await queryInterface.removeConstraint('Adopcions', 'fk_adopcion_mascota');
  }

};
