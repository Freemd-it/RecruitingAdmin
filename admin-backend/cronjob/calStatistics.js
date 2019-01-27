const moment = require('moment');
const Statistics = require('../models/StatisticsModel');
const User = require('../models/UserModel');

console.log(moment().format('YYYY년 MM월 DD일 hh시 a'));

const indexOfUniv = (university) => {
    return 
}

const birthDate_age_convert = (date) => {
    const birthYear = moment(date).format('YYYY');
    return Number(moment().format('YYYY')) - Number(birthYear) + 1;
}

const univReducer = (accumulator, user, index, array) => {


    if (accumulator.hasOwnProperty(user.academiv_career.name)) {
        accumulator[user.academiv_career.name] = accumulator[user.academiv_career.name] + 1;
    } else {
        accumulator[user.academiv_career.name] = 1;
    }
    return accumulator;
}


const updateStatistics = async () => {
    try {
        const userList = await User
            .find()
            .select("basic_info academic_career")
            .sort({ _id: -1 })
            .exec();
        const UnivStats = [];
        const AgeMaleStats = [];
        const lastUpdated = moment().format('YYYY년 MM월 DD일 hh시 a');
        for (let i = 0; i < userList.length; i++) {
            let userAge = birthDate_age_convert(userList[i].basic_info.birth_date);
            let univIndex = UnivStats.findIndex(univ => {return univ.university === userList[i].academic_career.name});
            let ageMaleIndex = AgeMaleStats.findIndex(agemale => {return ((agemale.age == userAge) && (agemale.is_male == userList[i].basic_info.is_male))});
            console.log(userList[i].academic_career.name)
            if(univIndex < 0){
                UnivStats.push({
                    university: userList[i].academic_career.name,
                    count: 1
                });
            } else {
                UnivStats[univIndex].count = UnivStats[univIndex].count + 1;
            }

            if(ageMaleIndex < 0){
                AgeMaleStats.push({
                    age: userAge,
                    is_male: userList[i].basic_info.is_male,
                    count: 1
                });
            } else{
                AgeMaleStats[ageMaleIndex].count = AgeMaleStats[ageMaleIndex].count + 1;
            }
        }
        // const Statistics = new Statistics({
        //     lastUpdated: lastUpdated,
        //     UnivStats : UnivStats,
        //     AgeMaleStats: AgeMaleStats
        // });
        const updated = await Statistics.findOneAndUpdate({batch: 20}, {
            batch: 20,
            lastUpdated: lastUpdated,
            UnivStats : UnivStats,
            AgeMaleStats: AgeMaleStats
        }, {new: true, upsert: true});
        console.log(updated);
    } catch (e) {
        console.log(e);
    }
}

module.exports = updateStatistics;