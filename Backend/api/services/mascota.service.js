const {Mascota} = require('../models');

exports.getAll = async ()=>{
    return await Mascota.findAll();
}

exports.create = async (dataMascota)=>{

    return await Mascota.create(dataMascota);
}

exports.getById = async (id)=>{
    try {
        const result = await Mascota.findByPk(id);
        return result;
    } catch (error) {
        return{error : error}
    }
}

exports.update = async (id, dataMascota)=>{

    return await Mascota.update(dataMascota,{where:{id:id}})
}