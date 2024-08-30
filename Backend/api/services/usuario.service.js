const bcrypt = require('bcryptjs');

const {Usuario} = require('../models');

exports.getUsuarioEmail = async (correo_electronico)=>{
    return await Usuario.findOne({
        where:{
            correo_electronico:correo_electronico
        }
    });
}

exports.createUsuario = async(dataUsuario)=>{
    const {contrasena} = dataUsuario;
    const bcryptPassword = await bcrypt.hash(contrasena,10);
    dataUsuario.contrasena = bcryptPassword;
    dataUsuario.fecha_registro = new Date();
    try {
        return await Usuario.create(dataUsuario);    
    } catch (error) {
        return {error:error.message}
    }
    
}