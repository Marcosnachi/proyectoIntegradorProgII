module.exports = function(sequelize, dataTypes){

    let alias = 'Comment';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        text:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        productId:{
            type: dataTypes.INTEGER,
        },
        
    }

    let config = {
        tableName: 'comments',
        timestamps: true,
        underscored: false,
    }

   const Comment = sequelize.define(alias, cols, config);

   Comment.associate = function (models) {
    Comment.belongsTo (models.User, {

        as:'user',
        foreignKey: 'userId'
        

    });
    Comment.belongsTo (models.Product, {

        as:'products',
        foreignKey: 'productId'
        

    })
}

   return Comment;
}