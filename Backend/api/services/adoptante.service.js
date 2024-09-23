const {Adoptante} = require('../models');

exports.getAll= async ()=>{
    return await Adoptante.findAll();
}

exports.create = async (data)=>{
    return await Adoptante.create(data);
}

exports.getById = async (id)=>{
    try {
     const result = await Adoptante.findByPk(id);
     return result;
    } catch (error) {
     return {error:error};    
    }
    
}

exports.update = async (id, data)=>{
    return await Adoptante.update(data,{where:{id:id}})
}
