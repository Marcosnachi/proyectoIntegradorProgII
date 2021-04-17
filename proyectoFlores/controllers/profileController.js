const profileController = {

    index: function (req, res) {
        
        return res.render ('profile')
    },

    edit : function (req, res) {
        
        return res.render ('profileEdit')
    }

}

module.exports = profileController;