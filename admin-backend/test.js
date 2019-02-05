const { Map } = require('immutable');

const permission = Map({
    FullAccess : 301,
    DepartmentAccess : 302,
    TeamAccess : 303,
});

const full = 'FullAccess';
const none = 'hi';

console.log(permission.get(full));
console.log(permission.get(none));