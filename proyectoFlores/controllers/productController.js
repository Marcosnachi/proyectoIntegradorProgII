const db = require('../database/models');

const productController = {

    show: function(req, res){
        let id = req.params.id;

        db.Product.findByPk(id)
            .then(data =>{
                return res.render('product', { flores : data });
            })
            .catch(error =>{
                console.log(error);
            })
        
    },

    add: function (req,res) {
        
        return res.render ('productAdd')
    },

    store: function (req, res) {
        
        let data = req.body
        
        let product = {

            productName: data.productName,
            description: data.description,
            image: data.image,
            userId: data.userId
        }

        db.Product.create(product)
        .then(function () {

            return res.redirect ('/productCargado');
            
        })

        .catch(function (error) {
            
            console.log(error);

        })

    },

    addComment: function (req, res) {

        let data = req.body
        
        let comment = {

            text: data.text,
            userId: data.userId,
            productId: data.productId
            
        }

        db.Comment.create(comment)
        .then(function () {

            return res.redirect ('/commentCargado');
            
        })

        .catch(function (error) {
            
            console.log(error);

        })

    },
        
    

}

module.exports = productController;