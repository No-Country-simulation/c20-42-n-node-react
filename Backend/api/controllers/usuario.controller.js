const { validationResult } = require('express-validator');
const usuarioService = require('../services/usuario.service');

exports.create = async (req,res)=> {
    // #swagger.tags = ['Usuario']
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{nombre, correo_electronico,contrasena} = req.body
    data = {
        nombre: nombre,
        correo_electronico:correo_electronico,
        contrasena:contrasena,
        rol:'USER',
    }
    const usuarioCreado = usuarioService.createUsuario(data);
    res.status(201).json(usuarioCreado);
}

exports.edit = async (req, res)=>{
    // #swagger.tags = ['Usuario']
    res.status(200).json({message:'usuario editado'})
}

exports.list = async (req, res)=>{
    // #swagger.tags = ['Usuario']
    res.status(200).json({message: 'lista de usuarios'})
}

exports.delete = async (req, res)=>{
    // #swagger.tags = ['Usuario']
    res.status(200).json({message: 'usuario deletado'})
}

exports.protected = async (req, res)=>{
    // #swagger.tags = ['Usuario']
    res.status(200).json({message: 'resource protected'})
}