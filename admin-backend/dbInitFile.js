const mongoose = require('mongoose');
const mongoConfig = require('./config/mongoConfig');
const { schemeInit } = require('./service/schemeService');

const {
  PORT : port = 27017,
  MONGO_URI : mongoURI
} = mongoConfig;

mongoose.Promise = global.Promise; 

const close = async () => {
    await mongoose.connection.close(async () => {
        console.log("Mongoose Closed");
        await process.exit();
    });
}

// 몽고디비 연결
mongoose.connect(mongoURI, {
    useNewUrlParser: true
}).then(async ()=> {
    console.log(`Connected to mongodb ${mongoURI}`);
    if (await schemeInit()) {
        console.log(`DB Initialization succeeded`);
    } else {
        console.log(`DB Initialization failed`);
    }
    await close();
}).catch(async e => {
    console.error(`Connection Error: ${e}`);
    close();
});
