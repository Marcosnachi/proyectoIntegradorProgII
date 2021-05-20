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

            return res.redirect('/');

        })
        .catch( e => {console.log(e)})

    },
    logout: function(req,res){
        //Destruir la sessión
        req.session.destroy();

        //Destruir la coockie

        
        //redireccionar a hone
        return res.redirect('/')
    }

}

module.exports = loginController;