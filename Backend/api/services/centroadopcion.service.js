const {CentroAdopcion} = require('../models');

exports.getAllCentroAdopcion = async ()=>{
    return await CentroAdopcion.findAll();
}

exports.createCentroAdopcion = async (centroAdopcionData)=>{
    return await CentroAdopcion.create(centroAdopcionData);
}