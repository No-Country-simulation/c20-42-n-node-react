var express = require('express');
var router = express.Router();

const passport = require('passport');
const usuarioController = require('../controllers/usuario.controller');

router.post('/new', usuarioController.create);

router.get('/protected', passport.authenticate('jwt', { session: false }), usuarioController.protected);

module.exports = router;
