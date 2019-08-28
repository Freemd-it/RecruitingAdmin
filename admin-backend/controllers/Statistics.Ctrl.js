const Statistics = require('../models/StatisticsModel');
const User = require('../models/UserModel2');
const DepartmemtMeta = require('../models/DepartmentMetaModel');


const getStat = async(req, res) => {
    try {
        const stat = await Statistics.findOne({batch: 20});
        res.status(200).json({message: "Successful get statistics", result: stat});
    } catch(e) {
        res.status(500).json({message : JSON.stringify(e), result: null, });
    }
}

const initApplierStat = (departmentMeta) => {
    let applierStat = {
        totalFirst: 0,
        totalSecond: 0,
        stats: []
    };
    for(let i=0; i<departmentMeta.length; i++) {
        const department = departmentMeta[i];
        // console.log(department.teams);
        if (department.departmentName==='공통') {
            continue;
        }

        let newDepartment = {
            departmentName: department.departmentName,
            first: 0,
            second: 0,
            teams: []
        }

        // console.log(department.teams);
        for(let j=0; j<department.teams.length; j++) {
            const team = department.teams[j];
            if (team.teamName==='공통' && department.departmentName!=='해외의료사업본부' && department.departmentName!=='보건교육사업본부') {
                continue;
            }
            let newTeam = {
                teamName: team.teamName,
                first: 0,
                second: 0
            }
            newDepartment.teams.push(newTeam);
        }
        applierStat.stats.push(newDepartment);
    }
    return applierStat
}

const countApplier = (departments, applierStat, index) => {
    const totalCount = index===0 ? 'totalFirst' : 'totalSecond';
    const applyCount = index===0 ? 'first' : 'second';
    const departName = departments[index].departmentName;
    const teamName = departments[index].teamName;
    if (departName==='') {
        return;
    }

    for(let i=0; i<applierStat.stats.length; i++) {
        if (applierStat.stats[i].departmentName!==departName) {
            continue
        }
        applierStat.stats[i][applyCount] += 1;
        applierStat[totalCount] += 1;
        for(let j=0; j<applierStat.stats[i].teams.length; j++) {
            if (applierStat.stats[i].teams[j].teamName===teamName) {
                applierStat.stats[i].teams[j][applyCount] += 1;
                break;
            }
        }
        break;
    }
}

const getApplierStat = async (req, res) => {
    const userFindOption = {
        batch: req.params.batch,
        supportStatus: 201,
    }

    const departmentFindOption = {
        batch: req.params.batch,
    }

    try {
        const departmentMeta = await DepartmemtMeta
        .find(departmentFindOption)
        .select("departmentName teams")
        .sort({ _id: -1 })
        .exec();
        
        let applierStat = initApplierStat(departmentMeta);

        const userList = await User
        .find(userFindOption)
        .select("batch basicInfo")
        .sort({ _id: -1 })
        .exec();

        userList.forEach(({basicInfo}) => {
            const { departments } = basicInfo;
            for (let i=0; i<2; i++) {
                countApplier(departments, applierStat, i);
            }
        })
        res.status(200).json({message: "Successful get applier statistics", result: applierStat});
    } catch(e) {
        console.log(e);
        res.status(500).json({message : JSON.stringify(e), result: null, });
    }
}

module.exports = {
    getStat: getStat,
    getApplierStat: getApplierStat
};
