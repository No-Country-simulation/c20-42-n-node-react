var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuario.controller');

router.post('/new', usuarioController.create);

module.exports = router;
