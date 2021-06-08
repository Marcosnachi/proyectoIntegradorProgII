const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;

const loginController = {

    index: function (req, res) {
        
        if (req.session.user != undefined) {
            return res.redirect ('/')
        } else{

        return res.render ('login')
        }
    },
    
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {

            let errors = {};
            //Chequeamos si existe el mail en la base

            if (user == null) {
                
                //Mensaje de error
                errors.message = "El email ingresado no existe"

                //Pasamos el mensaje a la vista
                res.locals.errors = errors;

                //Renderizamos la vista
                return res.render ('login');

            } else if (bcrypt.compareSync(req.body.password, user.password) == false) {

                //Mensaje de error
                errors.message = "La contraseña ingresada es incorrecta"

                //Pasamos el mensaje a la vista
                res.locals.errors = errors;

                //Renderizamos la vista
                return res.render ('login');
                
            } else {

            req.session.user = user;
            console.log('en login controller');
            console.log(req.session.user);

            // Al clickear en recordame, creamos la cookie

           if (req.body.rememberme != undefined){
               
                res.cookie('userId', user.id),{
                    maxAge: 1000 * 60 * 5
                }
           }

            return res.redirect('/');

          }
        })
        .catch( e => {console.log(e)})

    

    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie
        res.clearCookie('userId');
        
        //redireccionar a home
        return res.redirect('/')
    }

}

module.exports = loginController;