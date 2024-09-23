var express = require('express');
const centroAdopcionController = require('../controllers/centroadopcion.controller');
var router = express.Router();
const passport = require('passport');
const {check} = require('express-validator');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/',passport.authenticate('jwt',{session:false}),roleMiddleware('ADMIN'), centroAdopcionController.getAll);

router.get('/:id',passport.authenticate('jwt',{session:false}), roleMiddleware('ADMIN') ,centroAdopcionController.getById);

router.post('/', passport.authenticate('jwt',{session:false}),[
    check('nombre_centro').notEmpty().withMessage('Nombre es obrigatorio'),
    check('direccion').notEmpty().withMessage('Direccion es obrigatorio'),
    check('telefono').notEmpty().withMessage('Telefono es obrigatorio'),
    check('horario_atencion').notEmpty().withMessage('Horario es obligatorio')

], roleMiddleware('ADMIN'), centroAdopcionController.create);

router.put('/:id', passport.authenticate('jwt',{session:false}),roleMiddleware('ADMIN'), centroAdopcionController.update);




module.exports = router;
