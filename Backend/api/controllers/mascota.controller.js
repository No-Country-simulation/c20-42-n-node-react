const mascotaService = require('../services/mascota.service');

exports.getAll = async (req,res)=>{
    // #swagger.tags = ['Mascota']
    const listMascota = await mascotaService.getAll();
    res.status(200).json(listMascota);
}

exports.create = async (req, res)=>{
    // #swagger.tags = ['Mascota']
    const msg={
        success:false,
        message:'No registrado!'
    }
    const data = {}
    const {nombre, raza, edad,peso, sexo,estado_salud,vacuna,esterelizada,descripcion,foto} = req.body;
    data.nombre = nombre;
    data.raza = raza;
    data.edad = edad;
    data.peso = peso;
    data.sexo = sexo;
    data.estado_salud = estado_salud;
    data.vacunada = vacuna;
    data.esterilizada = esterelizada;
    data.descripcion = descripcion
    data.foto = req.file? req.file.filename:null;

    const createdMascota = await mascotaService.create(data);
    if (createdMascota){
        msg.success = true;
        msg.message = 'Registro efectivado!' 
    }
    res.status(201).json(msg);
}

exports.getById = async (req, res)=>{
    // #swagger.tags = ['Mascota']
    const {id} = req.params;
    const mascota = await mascotaService.getById(id);

    if(mascota){
        res.status(200).json(mascota);
    }else{
        res.status(404).json({
            success:false,
            message: 'Mascota no encontrado'
        })
    }
}

exports.update = async (req, res)=>{
    // #swagger.tags = ['Mascota']
    const {id} = req.params;
    const data = {};
    const {
        nombre,
        raza,
        edad,
        peso,
        sexo,
        vacuna,
        esterelizada,
        description,
        foto
    } = req.body;

    const msg = {
        success:true,
        message:'Actualizado exitosamente'
    };

    try {
        const mascota = await mascotaService.getById(id);

        if(mascota){
            
            if(nombre !== undefined){
             data.nombre = nombre;   
            }
            
            if(raza !== undefined){
                data.raza = raza;   
            }

            if(edad !== undefined){
                data.edad = edad;   
            }

            if(peso !== undefined){
                data.peso = peso;   
            }

            if(sexo !== undefined){
                data.sexo = sexo;   
            }

            if(vacuna !== undefined){
                data.vacuna = vacuna;   
            }

            if(esterelizada !== undefined){
                data.esterelizada = esterelizada;   
            }

            if(description !== undefined){
                data.description = description;   
            }

            if(foto !== undefined){
                data.foto = foto;   
            }

            await mascotaService.update(id,data);

        }else{
            msg.success = false;
            msg.message = 'Mascota no encontrado'

        }

        res.status(200).json(msg);

    } catch (error) {
        res.status(500).json({'error': 'Erro ao actualizar datos de mascota.'})
    }

}



