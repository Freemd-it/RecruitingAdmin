const { Map } = require('immutable');

const permission = Map({
    FullAccess : 301,
    DepartmentAccess : 302,
    TeamAccess : 303
});


module.exports = {
    Permission : permission,

}