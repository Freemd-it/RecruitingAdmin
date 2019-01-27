const bcrypt = require('bcrypt');
const saltRounds = 12;

const hash = (password) =>  {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) {
                reject(new Error(err));
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) reject(new Error(err));
                resolve(hash);
            });
        });
    });
}

const compare = (password, hash) =>  {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, result) {
            if(err) reject(new Error(err));
            resolve(result);
        });
    });
}

module.exports = {
    hash : hash,
    compare: compare,
}