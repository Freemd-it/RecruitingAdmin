const { Map } = require('immutable');

const permission = Map({
    FullAccess : 301,
    DepartmentAccess : 302,
    TeamAccess : 303,
});

const application = Map({
    proceeding: 200,
    evaluating: 201,
    pass: 202,
    fail: 203,
    holding: 204,
})


module.exports = {
    Permission : permission,
    Application : application,
}