const centroAdopcionService = require('../services/centroadopcion.service');

exports.getAll = async(req,res)=>{
    // #swagger.tags = ['Centro Adopcion']
    const centrosAdopcion = await centroAdopcionService.getAll();
    res.status(200).json(centrosAdopcion);
}

exports.create = async (req, res)=>{
    // #swagger.tags = ['Centro Adopcion']
    const data ={}
    const {nombre_centro, direccion, telefono, horario_atencion } = req.body;
 
    data.nombre_centro = nombre_centro;
    data.direccion = direccion;
    data.telefono =  telefono;
    data.horario_atencion = horario_atencion;

    const centroAdopcion = await centroAdopcionService.create(data);
    res.status(201).json(centroAdopcion);
}

exports.getById = async(req, res)=>{
    // #swagger.tags = ['Centro Adopcion']
    const {id} = req.params
    const centroAdopcion = await centroAdopcionService.getById(id)
    if(centroAdopcion){
    res.status(200).json(centroAdopcion);
    }else{
        res.status(404).json({success:false,message:'Centro de adopcion no encontrado'})
    }
}

exports.update = async(req, res)=>{
    // #swagger.tags = ['Centro Adopcion']
    const {id} = req.params;
    const data ={}
    const {nombre_centro, direccion, telefono, horario_atencion } = req.body;
    const msg = {
        success:true,
        message:'Centro de adopcion actualizado'
    }
    try {
        const centroAdopcion = await centroAdopcionService.getById(id);

        if(centroAdopcion){

            if(nombre_centro !== undefined){
                data.nombre_centro = nombre_centro;
            }
            if(direccion !== undefined){
                data.direccion = direccion;
            }
        
            if(telefono !== undefined){
                data.telefono = telefono;
            }
        
            if(horario_atencion !== undefined){
                data.horario_atencion = horario_atencion;
            }
            await centroAdopcionService.update(id,data);
            
        }else{
            msg.success = false
            msg.message = 'Centro Adopcion não encontrado'
        }
        

        
        res.status(200).json(msg);        
    } catch (error) {
        res.status(500).json({'error':'Erro ao actualizar el centro de adopcion'});
    }

}

