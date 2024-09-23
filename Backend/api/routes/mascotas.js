var express = require('express');
const mascotaController = require('../controllers/mascota.controller');
var router = express.Router();
const passport = require('passport');
const {check } = require('express-validator');
const upload = require('../config/multer');
const roleMiddleware = require('../middleware/roleMiddleware');



router.get('/',passport.authenticate('jwt',{session:false}),mascotaController.getAll);

router.get('/:id',passport.authenticate('jwt',{session:false}) ,mascotaController.getById);

router.post('/', passport.authenticate('jwt',{session:false}),upload.single('foto'),[
    check('nombre').notEmpty().withMessage('Nombre es obrigatorio'),
    check('raza').notEmpty().withMessage(' Raza es obrigatorio'),
    check('edad').notEmpty().withMessage(' Edad es obrigatorio'),
    check('peso').notEmpty().withMessage(' Peso es obrigatorio'),
    check('sexo').notEmpty().withMessage(' Sexo es obrigatorio'),
    check('vacuna').notEmpty().withMessage(' Vacuna es obrigatorio'),
    check('estado_salud').notEmpty().withMessage(' Vacuna es obrigatorio'),
    check('esterelizada').notEmpty().withMessage(' Esterizada es obrigatorio'),
    check('descripcion').notEmpty().withMessage(' Descripcion es obrigatorio'),
    check('foto').notEmpty().withMessage('Foto es obrigatorio'),
],mascotaController.create);

router.put('/:id',passport.authenticate('jwt',{session:false}), roleMiddleware('USER'),mascotaController.update);



module.exports = router;