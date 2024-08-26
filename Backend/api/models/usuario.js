'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Adoptante,{foreignKey:"id_usuario",constraints:true});
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo_electronico: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: DataTypes.STRING,
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuario;
};