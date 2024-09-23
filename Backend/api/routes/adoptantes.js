var express = require('express');
const adoptanteController = require('../controllers/adoptante.controller');
var router = express.Router();
const passport = require('passport');
const {check} = require('express-validator');

router.get('',passport.authenticate('jwt',{session:false}), adoptanteController.getAll);

router.get('/:id',passport.authenticate('jwt',{session:false}), adoptanteController.getById);

router.post('/', passport.authenticate('jwt',{session:false}),[
    check('direccion').notEmpty().withMessage('Direccion es obrigatorio'),
    check('telefono').notEmpty().withMessage('Telefono es obrigatorio'),
    check('preferencias_adopcion').notEmpty().withMessage('Preferencias son obligatorio')

], adoptanteController.create);

router.put('/:id', passport.authenticate('jwt',{session:false}), adoptanteController.update);




module.exports = router;