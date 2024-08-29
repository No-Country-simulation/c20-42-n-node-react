var express = require('express');
var router = express.Router();

// const passport = require('../middleware/passport');
// const {Usuario} = require('../models/usuario');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/auth.controller');


router.post('/login', authController.login);

module.exports = router;
