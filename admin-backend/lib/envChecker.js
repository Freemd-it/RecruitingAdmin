const DEV_MONGODB_URI = require('../config/develop/mongoConfig.json');
const PROD_MONGODB_URI = require('../config/prod/mongoConfig.json');

const getConfig = (nodeEnv) => {
  console.log("Server run at env :", nodeEnv);
  if(nodeEnv === 'development'){
    return DEV_MONGODB_URI
  }
  if(nodeEnv === 'production'){
    return PROD_MONGODB_URI
  }
}

module.exports = {
  getConfig,
}