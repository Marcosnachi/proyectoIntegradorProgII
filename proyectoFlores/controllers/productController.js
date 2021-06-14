const db = require('../database/models');

const productController = {

    show: function(req, res){
        let id = req.params.id;

        db.Product.findByPk(id,{

            include: [

                {association : 'user'},
                {association : 'comments',
                include: [
                    {association : 'user'}
                ]}

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

                return res.redirect ('/login')

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
            image: req.file.filename,
            userId: user.id
        }

        db.Product.create(product)
        .then(function (product) {

            return res.render ('productCargado', {product});
            
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
        
    edit: function(req, res){
        //mostrar el form de edicion.
        let productId = req.params.productId;

        //Evitar que el usuario cambie el id en la url
        if(productId != req.session.product.id){
            //Redireccionar a la ruta del usuario logueado
            return res.redirect(`/product/edit/${req.session.product.id}`)
        } else {
            //Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(productId)
                .then( function(product){
                    return res.render('productEdit', { productEdit:product})
                })
                .catch( e => {console.log(e)})
        }
    },


    update: function(req, res){
        //Vamoa a actualizar un producto
        let product = {
            productName: req.body.productName,
            image: '',
            description: req.body.description,
        }

        //Tenemos que pensar como completar password y avatar.
        if(req.file == undefined){
            product.image = req.session.product.image;
        } else {
            user.image = req.file.filename;
        }

        db.Product.update(product, {
            where:{
                id: req.session.user.id
            }
        })
            .then(function(id){
                //Vemos... Actualizar los datos de session y redirecciona a la home.
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect('/');
                
            })
            .catch( e => {console.log(e)})

    }

}

module.exports = productController;