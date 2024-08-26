'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Adopcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Adopcion.belongsTo(models.Adoptante,{foreignKey:"id_adoptante", constraints:true});
      Adopcion.belongsTo(models.Mascota,{foreignKey:"id_mascota", constraints:true});
    }
  }
  Adopcion.init({
    id_adoptante: DataTypes.INTEGER,
    id_mascota: DataTypes.INTEGER,
    fecha_adopcion: DataTypes.DATE,
    estado_adopcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Adopcion',
  });
  return Adopcion;
};