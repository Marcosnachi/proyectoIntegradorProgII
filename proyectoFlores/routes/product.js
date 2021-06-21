var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');
let multer = require('multer');
let path = require('path');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/id/:id', productController.show);
router.get('/add', productController.add);
router.post('/store', upload.single('image'), productController.store);
router.post('/addComment/:id', productController.addComment);
router.get('/edit/:productId', productController.edit);
router.post('/edit/:productId', upload.single('image'), productController.update);
router.post('/delete/:id', productController.destroy);

module.exports = router;