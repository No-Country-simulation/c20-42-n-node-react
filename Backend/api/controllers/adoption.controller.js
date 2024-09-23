const adopcionService = require('../services/adopcion.service');

exports.pedido = async(req,res)=>{
    // #swagger.tags = ['Adopcion']
    const {id_adoptante, id_mascota} = req.body;

    try {
        const adopcion = await adopcionService.solicitarAdopcion(id_adoptante,id_mascota);
        res.status(200).json(adopcion);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    
}

exports.aprobar = async(req, res)=>{
    // #swagger.tags = ['Adopcion']
    const {id_adopcion, id_usuario} = req.body;
    try {
        const adopcion = await adopcionService.aprobarAdopcion(id_usuario, id_adopcion);
        res.status(200).json(adopcion);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
