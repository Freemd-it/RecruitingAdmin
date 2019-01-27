require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const sign = require('./controllers/Sign.Ctrl');

const app = express();

const {
  PORT : port = 27017,
  MONGO_URI : mongoURI
} = process.env;

// Node 의 Promise 를 사용 하도록 설정
mongoose.Promise = global.Promise; 

// 몽고디비 연결
mongoose.connect(mongoURI, {
  useNewUrlParser: true
}).then(()=> {
  console.log(`connected to mongodb ${mongoURI}`)
}).catch((e) => {
  console.error(e);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/signin', sign.signin);
app.post('/api/signup', sign.signup);
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
