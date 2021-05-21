var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productRouter = require ('./routes/product');
let profileRouter = require ('./routes/profile');
let registerRouter = require ('./routes/register');
let loginRouter = require ('./routes/login');
const db = require('./database/models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  { secret:'proyectoFlores',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req, res, next){
  console.log('En session middleware');
  console.log(req.session.user);
  if(req.session.user != undefined){
    res.locals = req.session.user;
    console.log("entre en locals: ");
    console.log(res.locals);
    return next();
  } 
  return next(); //Clave para que el proceso siga adelante.  
})


//Gestionar la coockie.
app.use(function(req, res, next){

  //Solo quiero hacerlo si tengo una coockie
  if(req.cookies.userId != undefined && req.session.user == undefined){
    let cookieId = req.cookies.userId;
    
    db.User.findByPk(cookieId)
    .then(function (user) {

      req.session.user = user; 
      res.locals = user; 

      return next();

    })
    .catch(function (error) 
    
    {console.log(error)})

  } else {

    //Si no tengo cookie quiero que el programa continue
    return next();
  }

})
  
    

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
