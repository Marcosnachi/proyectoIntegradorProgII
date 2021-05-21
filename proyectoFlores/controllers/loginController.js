const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;

const loginController = {

    index: function (req, res) {
        
        return res.render ('login')
    },

    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( user => {
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