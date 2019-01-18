var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var index = require('./routes/index');
var config = require('./config/secretKey');
var app = express();
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('jwt-secret', config.secret);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
var skipOption  = function(req, res)
  {
    console.log(res.statusCode);
    return res.statusCode < 400
  }
// setup the logger
app.use(logger(':method :status :url [:date[clf]] :user-agent',
  {
    skip : skipOption,
    stream : accessLogStream
  }));

app.use(logger('dev', {stream: accessLogStream}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit:'10mb' }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/swagger.json', function(req, res) {
  res.json(require('./swagger.json'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
