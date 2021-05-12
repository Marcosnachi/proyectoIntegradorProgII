const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.
const op = db.Sequelize.Op; 

const registerController = {




    index: function (req, res){

             
        db.User.findAll()
        .then (function (){
          
            return res.render ('register')
            
        })

        .catch(function (error){
            console.log(error);
        })
       
       
    },


    store: function (req, res){

        let data = req.body;
        
        let user = {

            title: data.title,
            nombre: data.nombre, 
            apellido: data.apellido, 
            birthDate: data.birthDate, 
            dni: data.dni, 
            email: data.email, 
            password: data.password, 
            
        }

        db.User.create(user)
        .then (function (){

        res.redirect ('/')

        })
            .catch(function (error){
                console.log(error);
            })
   
        },

}

    module.exports = registerController;