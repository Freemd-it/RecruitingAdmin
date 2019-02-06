const { Map } = require('immutable');

const questionClassify = Map({
    common: 101,
    department: 102,
    team: 103,
})

const teamClassify = Map({
    ManagementSupport_HumanResources: 10101,
    ManagementSupport_financial: 10102,
    ManagementSupport_PlanSupport: 10103,
    BrandMarketing_Cooperation: 10201,
    BrandMarketing_Sponsorship: 10202,
    BrandMarketing_PRPlanning: 10203,
    Design_none: 10300,
    ITPlanning_none: 10400,
    FreeClinic_Operation: 20101,
    FreeClinic_MedicalRecord: 20102,
    FreeClinic_Medication: 20103,
    HealthEducation_Operation: 30101,
    HealthEducation_EducationResearch: 30102,
    GlobalMedical_none: 40100,
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