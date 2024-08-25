var express = require('express');
const centroAdopcionController = require('../controllers/centroadopcion.controller');
var router = express.Router();

router.get('/list', centroAdopcionController.getAllCentroAdopcion);

module.exports = router;
