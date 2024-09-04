const {CentroAdopcion} = require('../models');

exports.getAll= async ()=>{
    return await CentroAdopcion.findAll();
}

exports.create = async (centroAdopcionData)=>{
    return await CentroAdopcion.create(centroAdopcionData);
}

exports.getById = async (id)=>{
    try {
     const result = await CentroAdopcion.findByPk(id);
     return result;
    } catch (error) {
     return {error:error};    
    }
    
}

exports.update = async (id, dataCentroAdopcion)=>{
    console.info("service",dataCentroAdopcion);
    return await CentroAdopcion.update(dataCentroAdopcion,{where:{id:id}})
}





