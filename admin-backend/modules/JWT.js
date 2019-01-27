const jwt = require('jsonwebtoken');
const key = require('../config/jwt.key.json').key;

const getAdminInfo = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, decoded) => {
            if(err) {
                reject(new Error(err));
            }
            resolve(decoded);
        });
    });
}

module.exports = {
    getAdminInfo : getAdminInfo,
}