require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const indexRouter = require('./routes/index');
const sign = require('./controllers/Sign.Ctrl');


const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
      info: {
          description: '프리메드 Recruiting Admin 서버 API',
          title: 'Freemed Recruiting Admin',
          version: '1.0.0',
      },
      host: 'localhost:3001',
      basePath: '/admin',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http', 'https'],
  // securityDefinitions: {
  //         JWT: {
  //             type: 'apiKey',
  //             in: 'header',
  //             name: 'Authorization',
  //             description: "",
  //         }
  //     }
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/*.js'] //Path to the API handle folder
};

const {
  PORT : port = 27017,
  MONGO_URI : mongoURI
} = process.env && require('./config/mongoConfig');

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

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

expressSwagger(options)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions))

app.post('/admin/signin', sign.signin);
app.post('/admin/signup', sign.signup);
app.use('/admin', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  console.log('===============================================')
  console.log(err)
  console.log('===============================================')
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({})
});

module.exports = app;
