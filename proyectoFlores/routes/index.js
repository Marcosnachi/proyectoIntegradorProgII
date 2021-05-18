var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


router.get('/', indexController.index);
router.get('/productCargado', indexController.carga);
router.get('/commentCargado', indexController.newComment);
router.get('/newUser', indexController.new);
router.get('/search', indexController.search);

module.exports = router;