'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MascotaCentro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MascotaCentro.belongsTo(models.Mascota,{foreignKey:"id_mascota",constraints:true});
      MascotaCentro.belongsTo(models.CentroAdopcion,{foreignKey:"id_centro",constraints:true})
    }
  }
  MascotaCentro.init({
    id_mascota: DataTypes.INTEGER,
    id_centro: DataTypes.INTEGER,
    fecha_ingreso: DataTypes.DATE,
    fecha_egreso: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'MascotaCentro',
  });
  return MascotaCentro;
};