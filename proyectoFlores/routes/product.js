var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


router.get('/id/:id', productController.show);
router.get('/add', productController.add);
router.post('/store', productController.store);
router.post('/addComment', productController.addComment);

module.exports = router;