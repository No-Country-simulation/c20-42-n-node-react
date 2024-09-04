var express = require('express');
const centroAdopcionController = require('../controllers/centroadopcion.controller');
var router = express.Router();
const passport = require('passport');
const {check, valitaionResult} = require('express-validator');

router.get('',passport.authenticate('jwt',{session:false}), centroAdopcionController.getAll);

router.get('/:id',passport.authenticate('jwt',{session:false}), centroAdopcionController.getById);

router.post('/', passport.authenticate('jwt',{session:false}),[
    check('nombre_centro').notEmpty().withMessage('Nombre es obrigatorio'),
    check('direccion').notEmpty().withMessage('Direccion es obrigatorio'),
    check('telefono').notEmpty().withMessage('Telefono es obrigatorio'),
    check('horario_atencion').notEmpty().withMessage('El rol es obligatorio')

], centroAdopcionController.create);

router.put('/:id', passport.authenticate('jwt',{session:false}), centroAdopcionController.update);




module.exports = router;
