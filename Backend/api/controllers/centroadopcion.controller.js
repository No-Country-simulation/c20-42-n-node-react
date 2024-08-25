const centroAdopcionService = require('../services/centroadopcion.service');

exports.getAllCentroAdopcion = async(req,res)=>{
    const centrosAdopcion = await centroAdopcionService.getAllCentroAdopcion();
    res.json(centrosAdopcion);
}

exports.createCentroAdopcion = async (req, res)=>{
    const centroAdopcion = await centroAdopcionService.createCentroAdopcion(req.body);
    res.status(201).json(centroAdopcion);
}