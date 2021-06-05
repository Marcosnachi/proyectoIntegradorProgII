module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'User'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
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
        password:{
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: 'users', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const User = sequelize.define(alias, cols, config);

   User.associate = function (models) {
       User.hasMany (models.Product, {

        as: 'products',
        foreignKey: 'userId'


       })
   }

   return User;
}