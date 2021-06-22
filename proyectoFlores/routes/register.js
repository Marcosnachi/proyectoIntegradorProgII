var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')
let multer = require('multer');
let path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/users')) //Usamos path.join para evitar problemas de rutas. __dirname da la posición exacta de la carpeta en la que está el archivo. Luego desde ahí nos movemos hasta la carpeta public.
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/', registerController.index);
router.post('/store', upload.single('image'), registerController.store);

module.exports = router;