var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const authController = require('../controllers/auth.controller');


router.post('/login', authController.login);

module.exports = router;
