const db = require('../database/models');

const productController = {

    show: function(req, res){
        let id = req.params.id;

        db.Product.findByPk(id,{

            include: [

                {association : 'user'}

            ]


        })
        .then(data =>{
            return res.render('product', { flores : data });
        })
        
        .catch(error =>{
            console.log(error);
        })
    },

    add: function (req,res) {
        
        //Control de acceso
        if (req.session.user == undefined) {

                return res.redirect ('/register')

        } else {

        return res.render ('productAdd')
        }
    },

    store: function (req, res) {
        
        let data = req.body
        let user = req.session.user
        
        let product = {

            productName: data.productName,
            description: data.description,
            image: data.image,
            userId: user.id
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
        let user = req.session.user
        let id = req.params.id
        
        let comment = {

            text: data.text,
            userId: user.id,
            productId: id
            
        }
        res.send(comment)
        db.Comment.create(comment)
        .then(function (comment) {

            return res.redirect (`/product/id/${comment.productId}`);
            
        })

        .catch(function (error) {
            
            console.log(error);

        })

    },
        
    

}

module.exports = productController;