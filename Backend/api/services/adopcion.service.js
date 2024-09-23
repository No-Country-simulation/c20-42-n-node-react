const {Adopcion, Mascota, Adoptante, Usuario} = require('../models');

exports.solicitarAdopcion= async (id_adoptante,id_mascota)=>{
    const adopcion = await Adopcion.create({
        id_adoptante,
        id_mascota,
        fecha_adopcion: new Date(),
        estado_adopcion:'Pendiente'
    });
    return adopcion;
}

exports.aprobarAdopcion = async (id_usuario, id_adopcion)=>{
    const adopcion = await Adopcion.findByPk(id_adopcion);

    const usuario = await Usuario.findByPk(id_usuario);

    if(usuario.rol !== 'ADMIN'){
        throw new Error('Solamente Administradores puedem aprobar adopciones');
    }

    if(!adopcion){
        throw new Error('Adocion no encontrada');
    }

    if(adopcion.estado_adopcion !== 'Pediente'){
        throw new Error('La adopcion no esta pendiente, no puede ser aprobada');
    }

    adopcion.estado_adopcion = 'Aprovada';
    
    return adopcion;
}