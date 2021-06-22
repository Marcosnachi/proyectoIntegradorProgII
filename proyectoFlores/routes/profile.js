var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController')
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


router.get('/edit', profileController.edit);
router.get('/id/:id', profileController.index);
router.get('/edit/:userId', profileController.edit);
router.post('/edit', upload.single('image'), profileController.update);

module.exports = router;