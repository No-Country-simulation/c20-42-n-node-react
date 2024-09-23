const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const conf = require('../config/jwt');

const usuarioService = require('../services/usuario.service');


exports.login = async (req,res)=>{
    // #swagger.tags = ['Auth']
    const {email, password} = req.body;
    try {
        const usuario = await usuarioService.getUsuarioEmail(email);
        if(!usuario){
            return res.status(404).json({
                success:false,
                message:'Credencial Inválida'
            });
        }
        
        const isMath = await bcrypt.compare(password,usuario.contrasena);
        if(!isMath){
            return res.status(401).json({
                success:false,
                message: 'Credencial Inválida'
            });
        }

        const token = jwt.sign({id:usuario.id,role:usuario.rol },conf.jwtSecret,{expiresIn:'1h'});
        res.json({token:token});

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

