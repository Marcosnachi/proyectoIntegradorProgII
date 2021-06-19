module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Comment'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
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
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
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