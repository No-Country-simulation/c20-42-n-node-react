var express = require('express');
const centroAdopcionController = require('../controllers/centroadopcion.controller');
var router = express.Router();
/**
 * @swagger
 * /centroadopcion/list:
 * get:
 *  sumary: lista de centros de adopcion
 */ 
router.get('/list', centroAdopcionController.getAllCentroAdopcion);

module.exports = router;
