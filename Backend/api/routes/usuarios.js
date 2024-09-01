var express = require('express');
const {check, valitationResult} = require('express-validator');
var router = express.Router();

const passport = require('passport');
const usuarioController = require('../controllers/usuario.controller');

router.post('/new',[
    check('nombre').notEmpty().withMessage('El nombre es obrigatorio'),
    check('correo_electronico').isEmail().withMessage('Debe ser un correo elecronico'),
    check('contrasena').isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    check('rol').notEmpty().withMessage('El rol es obligatorio')
], usuarioController.create);

router.get('/protected', passport.authenticate('jwt', { session: false }), usuarioController.protected);

module.exports = router;
