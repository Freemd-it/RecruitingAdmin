const mongoose = require('mongoose');
const { schemeInit } = require('./service/schemeService');

const {
  PORT : port = 27017,
  MONGO_URI : mongoURI
} = process.env;

// const mongoURI = "MONGO_URI=mongodb://localhost/freemedRecruting"; // 환경변수 못읽어올경우 사용

mongoose.Promise = global.Promise; 

const close = async () => {
    await mongoose.connection.close(() => {
        console.log("Mongoose Closed");
    });
    await process.exit();
}

// 몽고디비 연결
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(async ()=> {
    console.log(`Connected to mongodb ${mongoURI}`);
    await schemeInit();
    await close();
}).catch(async e => {
    console.error(`Connection Error: ${e}`);
    close();
});