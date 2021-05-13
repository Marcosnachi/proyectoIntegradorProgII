const db = require('../database/models');

const indexController = {
    index: function(req, res){
        //Nuestro código.
        db.Product.findAll()
            .then( data => {
                return res.render('index', { flores: data })
            })
            .catch(error =>{
                console.log(error);
            })
    },

    carga: function (req, res) {
        
        db.Product.findAll()
        .then (function (){
            
            return res.render ('productCargado');
            
        })

        .catch(function (error){
            console.log(error);
        })


    },

    new: function (req, res) {
            
        db.User.findAll()
        .then (function (){
            
            return res.render ('newUser');
            
        })

        .catch(function (error){
            console.log(error);
        })


    }


}

module.exports = indexController