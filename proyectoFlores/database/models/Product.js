module.exports = function(sequelize, dataTypes){

    let alias = 'Product';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        productName:{
            type: dataTypes.STRING,
        },
        image:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'products',
        timestamps: true,
        underscored: false,      
    }

   const Product = sequelize.define(alias, cols, config);


    Product.associate = function (models) {
        Product.belongsTo (models.User, {

            as:'user',
            foreignKey: 'userId'
            

        });
        Product.hasMany (models.Comment, {

            as:'comments',
            foreignKey: 'productId'
            

        })

    }

   return Product;
}