'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mascota.hasMany(models.Adopcion,{foreignKey:"id_mascota",constraints:true});
      Mascota.belongsToMany(models.CentroAdopcion,{through:models.MascotaCentro,foreignKey:"id_mascota", constraints:true});
    }
  }
  Mascota.init({
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.FLOAT,
    sexo: DataTypes.STRING,
    estado_salud: DataTypes.STRING,
    vacunada: DataTypes.BOOLEAN,
    esterilizada: DataTypes.BOOLEAN,
    descripcion: DataTypes.TEXT,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mascota',
    freezeTableName:true
  });
  return Mascota;
};