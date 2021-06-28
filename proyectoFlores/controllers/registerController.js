const bcrypt = require('bcryptjs');
const db = require('../database/models');
const op = db.Sequelize.Op;

const registerController = {

    index: function (req, res){
        
        if (req.session.user != undefined) {
                return res.redirect ('/')
        } else {
             
         return res.render ('register')
    
    }
       
    },

    store: function (req, res){

        let data = req.body;
        let errors = {};


        //Vamos a chequear que el mail no este vacio
        if (data.nombre == "") {
            
            errors.message = "El nombre es obligatorio";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else if (data.apellido == "") {
            
            errors.message = "El apellido es obligatorio";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else if (data.email == "") {
            
            errors.message = "El email es obligatorio";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else if (data.password == "") {
            
            errors.message = "La contraseña es obligatoria";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else if (data.password.length < 3) {

            errors.message = "La contraseña debe tener al menos 3 caracteres";
            res.locals.errors = errors;

            return res.render ('register')

        } else if (data.dni == "") {
            
            errors.message = "El dni es obligatorio";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else if (data.birthDate == "") {
            
            errors.message = "La fecha de nacimiento es obligatoria";
            res.locals.errors = errors;
            
            return res.render ('register')

        } else {

            db.User.findOne({

                where : [{email : req.body.email}]
        })

        .then (function (user) {

            //Si el find encontro un usuario, significa que el email ingresado, ya esta siendo usado por otro usuario.
            if (user != null){
            errors.message = "El email ya esta registrado, por favor elija uno nuevo.";
            res.locals.errors = errors;
            
            return res.render ('register')

            } else {

                let user = {

                    nombre: data.nombre, 
                    apellido: data.apellido, 
                    birthDate: data.birthDate, 
                    dni: data.dni, 
                    email: data.email,
                    image: '',
                    password: bcrypt.hashSync(data.password, 10),

                }

            if (req.file == undefined) {
                user.image = 'perfil_generico.png'
            } else {
                user.image = req.file.filename
            }
        
                db.User.create(user)
                .then (function (){
        
                return res.redirect ('/newUser')
        
                })

            }
        })

        .catch(function (error){
            console.log(error);
        })


            .catch(function (error){
                console.log(error);
            })
   
        }    
        },
    
}

    module.exports = registerController;