const usuarioService = require('../services/usuario.service');

exports.create = async (req,res)=> {
    const usuarioCreado = usuarioService.createUsuario(req.body);
    res.status(200).json(usuarioCreado);
}

exports.edit = async ()=>{
    res.status(200).json({message:'usuario editado'})
}

exports.list = async ()=>{
    res.status(200).json({message: 'lista de usuarios'})
}

exports.delete = async ()=>{
    res.status(200).json({message: 'usuario deletado'})
}