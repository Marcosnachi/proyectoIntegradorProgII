var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController')


router.get('/edit', profileController.edit);
router.get('/id/:id', profileController.index);

module.exports = router;