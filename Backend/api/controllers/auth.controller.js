const passport = require('../middleware/passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const conf = require('../config/conf');

const usuarioService = require('../services/usuario.service');


exports.login = async (req,res)=>{
    const {correo_electronico, contrasena} = req.body;
    try {
        const usuario = await usuarioService.getUsuarioEmail(correo_electronico);
        console.info("passou")
        if(!usuario){
            return res.status(404).json({
                message:'Usuario não encontrado'
            });
        }
        
        const isMath = await bcrypt.compare(contrasena,usuario.contrasena);
        console.info("passou",isMath)
        if(!isMath){
            return res.status(401).json({message: 'Senha incorreta'});
        }

        const token = jwt.sign({id:usuario.id },conf.jwtSecret,{expiresIn:'1h'});
        console.info("token",token);
        res.json({token:token});

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

