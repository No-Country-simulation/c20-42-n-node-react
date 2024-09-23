const adoptanteService = require('../services/adoptante.service');

exports.getAll = async(req,res)=>{
    // #swagger.tags = ['Adoptante']
    const listAdoptante = await adoptanteService.getAllCentroAdopcion();
    res.status(200).json(listAdoptante);
}

exports.create = async (req, res)=>{
    // #swagger.tags = ['Adoptante']
    const adoptante = await adoptanteService.create(req.body);
    res.status(201).json(adoptante);
}

exports.getById = async(req, res)=>{
    // #swagger.tags = ['Adoptante']
    const {id} = req.params
    const adoptante = await adoptanteService.getById(id)
    if(adoptante){
    res.status(200).json(adoptante);
    }else{
        res.status(404).json({success:false,message:'Centro de adopcion no encontrado'})
    }
}


exports.update = async(req, res)=>{
    // #swagger.tags = ['Adoptante']
    const {id} = req.params;
    const data ={}
    const {direccion, telefono, preferencias_adopcion } = req.body;
    const msg = {
        success:true,
        message:'Adoptante actualizado'
    }
    try {
        const adoptante = await adoptanteService.getById(id);

        if(adoptante){

            if(direccion !== undefined){
                data.direccion = direccion;
            }
        
            if(telefono !== undefined){
                data.telefono = telefono;
            }
        
            if(preferencias_adopcion !== undefined){
                data.preferencias_adopcion = preferencias_adopcion;
            }
            await adoptanteService.update(id,data);
            
        }else{
            msg.success = false
            msg.message = 'Adoptante não encontrado'
        }
        

        
        res.status(200).json(msg);        
    } catch (error) {
        res.status(500).json({'error':'Erro ao actualizar datos de Adoptante'});
    }

}
