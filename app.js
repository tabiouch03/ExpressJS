// Fonction pour renvoyer vers une page 404
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// App.js requiert ces 3 routes pour etre lancé 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var addbookRouter = require('./routes/addbook');
var allbookRouter = require('./routes/allbook');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// importation des routes dans app.js
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addbook', addbookRouter);
app.use('/allbook', allbookRouter);

// capture lerreur 404
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
