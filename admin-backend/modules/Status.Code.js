const { Map } = require('immutable');

const questionClassify = Map({
    common: 101,
    department: 102,
    team: 103,
})

const application = Map({
    proceeding: 200,
    evaluating: 201,
    pass: 202,
    fail: 203,
    holding: 204,
})

const permission = Map({
    FullAccess : 301,
    DepartmentAccess : 302,
    TeamAccess : 303,
});



module.exports = {
    Permission : permission,
    Application : application,
}