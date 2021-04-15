const productController = {

    show: function (req, res) {
        
        return res.render ('product')
    },

    add: function (req,res) {
        
        return res.render ('productAdd')
    }

}






module.exports = productController;