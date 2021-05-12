var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')


router.get('/', registerController.index);
router.post('/store', registerController.store);


module.exports = router;