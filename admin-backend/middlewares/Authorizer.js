const jwt = require('jsonwebtoken');
const key = require('../config/jwt.key.json').key;

const Authorizer = (req, res, next) => {
    console.log('123123123');
    const token = req.headers.jwt;
    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            res.status(401).json({
                err: err.message
            });
        } else {
            req.userdata = decoded;
            next();
        }
    });
}

module.exports = Authorizer;