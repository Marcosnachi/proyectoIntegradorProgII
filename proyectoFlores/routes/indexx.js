var express = require('express');
var router = express.Router();
const indexxController = require('../controllers/indexxController')


router.get('/', indexxController.index);


module.exports = router;