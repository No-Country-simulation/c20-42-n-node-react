'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adoptante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Adoptante.belongsTo(models.Usuario,{foreignKey:"id_usuario",constraints:true});
      Adoptante.hasMany(models.Adopcion,{foreignKey:"id_adoptante",constraints:true});
    }
  }
  Adoptante.init({
    id_usuario: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    preferencias_adopcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Adoptante',
  });
  return Adoptante;
};