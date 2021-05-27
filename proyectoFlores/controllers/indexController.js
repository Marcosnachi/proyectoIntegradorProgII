const db = require('../database/models');
const op = db.Sequelize.Op

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

     newComment : function (req, res) {
        
        db.Product.findAll()
        .then (function (){
            
            return res.render ('commentCargado');
            
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


    },


    search: function(req, res){
        let infoABuscar = req.query.search; //obtengo la info de la querystring.

        db.Product.findAll({
            //SELECT * FROM movies
            //WHERE title LIKE "%potter%"

            where: [
                {
                [op.or]:[
                    { 
                        productName : {
                            [op.like]: '%'+infoABuscar+'%'
                        }
                    },
                    { 
                        description : {
                            [op.like]: '%'+infoABuscar+'%'
                        }
                    }
                ]
            }]
            })
            .then( data => {
                return res.render('searchResults',{flores : data});
            })
            .catch( error => {
                console.log(error);
            })
    },


}

module.exports = indexController