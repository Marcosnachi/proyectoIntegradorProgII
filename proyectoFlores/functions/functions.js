module.exports = {
getFloresOrdenadas: (arrayFlores, cantidad, parametro) =>{
    return arrayFlores.sort(function(a,b){
    return b[parametro].length - a[parametro].length}).slice(0,cantidad)
},
}