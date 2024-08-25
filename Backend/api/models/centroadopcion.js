'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CentroAdopcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CentroAdopcion.hasMany(models.MascotaCentro,{foreignKey:"id_centro"});
    }
  }
  CentroAdopcion.init({
    nombre_centro: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    horario_atencion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CentroAdopcion',
  });
  return CentroAdopcion;
};