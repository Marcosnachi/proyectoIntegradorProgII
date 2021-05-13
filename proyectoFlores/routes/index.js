var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


router.get('/', indexController.index);
router.get('/productCargado', indexController.carga);
router.get('/newUser', indexController.new);

module.exports = router;