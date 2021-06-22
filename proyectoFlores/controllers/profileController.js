const bcrypt = require('bcryptjs');
const db = require('../database/models');

const profileController = {

    index: function (req, res) {
        let id = req.params.id;

        db.User.findByPk(id,{

            include: [

                {association : 'products'},
                {association : 'comments'}

            ]
            
        })
            .then(data =>{
                return res.render('profile', { flores : data , id});
            })
            .catch(error =>{
                console.log(error);
            })
    },

    edit: function(req, res){
        //mostrar el form de edicion.
        let userId = req.params.userId;

        //Evitar que el usuario cambie el id en la url
        if(userId != req.session.user.id){
            //Redireccionar a la ruta del usuario logueado
            return res.redirect(`/profile/edit/${req.session.user.id}`)
        } else {
            //Recuperar los datos del usuario y pasarlo al form de edición
            db.User.findByPk(userId)
                .then( function(user){
                    return res.render('profileEdit', { userEdit:user})
                })
                .catch( e => {console.log(e)})
        }
    },
    update: function(req, res){
        //Vamoa a actualizar un usuario
        let user = {
            nombre: req.body.nombre,
            birthDate: req.body.birthDate,
            apellido: req.body.apellido,
            dni: req.body.dni,
            email: req.body.email,
            password: '',
            image: ''
        }

        //Tenemos que pensar como completar password y avatar.
        if(req.body.password == ''){
            user.password = req.session.user.password;
        } else {
            user.password = bcrypt.hashSync(req.body.password, 10);
        }
        if(req.file == undefined){
            user.image = req.session.user.image;
        } else {
            user.image = req.file.filename;
        }

        db.User.update(user, {
            where:{
                id: req.session.user.id
            }
        })
            .then(function(){
                //Vemos... Actualizar los datos de session y redirecciona a la home.
                user.id = req.session.user.id;
                req.session.user = user;
                return res.redirect(`/profile/id/${user.id}`);
                
            })
            .catch( e => {console.log(e)})



    }
}

module.exports = profileController;