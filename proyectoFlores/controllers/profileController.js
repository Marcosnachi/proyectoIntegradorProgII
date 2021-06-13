const db = require('../database/models');

const profileController = {

    index: function (req, res) {
        let id = req.params.id;

        db.Product.findByPk(id,{

            include: [

                {association : 'user'},

            ]
            
        })
            .then(data =>{
                return res.render('profile', { flores : data });
            })
            .catch(error =>{
                console.log(error);
            })
    },

    edit : function (req, res) {
        
        return res.render ('profileEdit')
    }

}

module.exports = profileController;