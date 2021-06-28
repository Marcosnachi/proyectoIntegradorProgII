module.exports = function(sequelize, dataTypes){

    let alias = 'User';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        birthDate:{
            type: dataTypes.DATE,
        },
        apellido:{
            type: dataTypes.STRING,
        },
        dni:{
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.STRING,
        },
        image:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: 'users', 
        timestamps: true,
        underscored: false, 
    }

   const User = sequelize.define(alias, cols, config);

   User.associate = function (models) {
       User.hasMany (models.Product, {

        as: 'products',
        foreignKey: 'userId'


       }); 
        User.hasMany (models.Comment, {
 
        as: 'comments',
        foreignKey: 'userId'
 
 
        })

    }

   return User;
}