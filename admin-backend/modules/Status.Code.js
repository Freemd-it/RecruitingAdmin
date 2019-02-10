const { Map } = require('immutable');

const questionClassify = Map({
    common: 101,
    department: 102,
    team: 103,
})

const codetoDepartment = Map({
    10100: '경영지원본부',
    10101: '인사조직팀',
    10102: '재무관리팀',
    10103: '기획지원팀',
    10200: '브랜드마케팅본부',
    10201: '대외협력팀',
    10202: '후원전략팀',
    10203: '홍보기획팀',
    10300: '디자인본부',
    10400: 'IT기획본부',
    20100: '무료진료소사업본부',
    20101: '진료소운영팀',
    20102: '의무기록팀',
    20103: '약무팀',
    20200: '보건교육사업본부',
    20201: '보건교육운영팀',
    20202: '교육연구팀',
    20300: '해외의료사업본부',
    90000: '공통',
});

const getDepartmentCode = (string) => {
    const keys = codetoDepartment.keySeq().toArray();
    for(let i = 0 ; i < keys.length ; i++){
        if(codetoDepartment.get(keys[i]).includes(string)){
            return String(keys[i]).substring(0,3);
        }
    }
}

const getDepartmentName = (code) => {
    const departmentCode = parseInt(Number(code) / 100) * 100;
    return codetoDepartment.get(String(departmentCode));
}

const getTeamName = (code) => {
    if(!(Number(code)%10)) return '';
    return codetoDepartment.get(String(code));
}

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
    HealthEducation_Operation: 20201,
    HealthEducation_EducationResearch: 20202,
    GlobalMedical_none: 20300,
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
    getDepartmentName : getDepartmentName,
    getTeamName : getTeamName,
    getDepartmentCode : getDepartmentCode,
}