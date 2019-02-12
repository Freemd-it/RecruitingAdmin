const { Map } = require('immutable');

const permission = Map({
    FullAccess : 301,
    DepartmentAccess : 302,
    TeamAccess : 303,
});

const full = 'FullAccess';
const none = 'hi';



const bcrypt = require('bcrypt');
const saltRounds = 12;

const hash = (password) =>  {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) {
              console.log(err)
                reject(new Error(err));
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) {
                  console.log(err)
                  reject(new Error(err));
                }
                console.log(hash)
                resolve(hash);
            });
        });
    });
}



console.log(hash('freemed2019!'))