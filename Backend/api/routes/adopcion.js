var express = require('express');
const adopcionService = require('../controllers/adoption.controller');

var router = express.Router();
const passport = require('passport');
const {check} = require('express-validator');

router.post('/pedido',passport.authenticate('jwt',{session:false}),[
    check('id_adoptante').notEmpty().withMessage('Adoptante es obrigatorio'),
    check('id_mascota').notEmpty().withMessage('Mascota es obrigatorio'),
], adopcionService.pedido);

router.post('/aprobar',passport.authenticate('jwt',{session:false}),[
    check('id_adopcion').notEmpty().withMessage('Pedido de adopcion es obrigatorio'),
    check('id_usuario').notEmpty().withMessage('Usuario es obrigatorio'),
], adopcionService.aprobar);



module.exports = router;
