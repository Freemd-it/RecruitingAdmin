const User = require('../models/UserModel');
const Code = require('../modules/Status.Code');
const moment = require('moment');


const userScheduleInfo = (userObj) => {
    console.log(userObj)
    if (!userObj.interview_info) return;
    const interviewTime = [
      "10:00 ~ 12:00",
      "11:00 ~ 13:00",
      "13:00 ~ 15:00",
      "14:00 ~ 16:00",
      "15:00 ~ 17:00",
      "16:00 ~ 18:00",
      "17:00 ~ 19:00",
    ];

    const first_department = Code.getDepartmentName(Number(userObj.basic_info.department + '00')) + ' ' + Code.getTeamName(Number(userObj.basic_info.department + userObj.basic_info.team));
    let second_department = Code.getDepartmentName(Number(userObj.basic_info.secondary_department + '00')) + ' ' + Code.getTeamName(Number(userObj.basic_info.secondary_department + userObj.basic_info.secondary_team));
    if(!second_department){
        second_department = '';
    }
    const saturday = [];
    const sunday = [];

    for (let i = 2; i < 4; i++) {
        let interview_data = {
            interview_time: interviewTime[i],
            interview_available: userObj.interview_info[0].interview_time.includes(interviewTime[i]),
        }
        saturday.push(interview_data);
    }
    for (let i = 0; i < 4; i++) {
        let interview_data = {
            interview_time: interviewTime[i],
            interview_available: userObj.interview_info[1].interview_time.includes(interviewTime[i]),
        }
        sunday.push(interview_data);
    }

    return {
        _id: userObj._id,
        name: userObj.basic_info.user_name,
        phone_number: userObj.basic_info.phone_number.slice(-4, userObj.basic_info.phone_number.length),
        first_department,
        second_department,
        other_assign_ngo: userObj.basic_info.other_assign_ngo,
        other_assign_medical: userObj.basic_info.other_assign_medical,
        schedule: {
            saturday: saturday,
            sunday: sunday,
        },
    }
}

const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
    if (searchIndex === 'name') {
        return {
            $and: [
                {
                    "support_status": {$gte: 201}
                },
                {
                    "basic_info.user_name": new RegExp(searchKeyword),
                }
            ]
        };
    }
    if (searchIndex === 'department') {
        return {
            $and: [
                {
                    "support_status": {$gte: 201}
                },
                {
                    $or: [
                        {
                            "basic_info.department": Code.getDepartmentCode(searchKeyword),
                        },
                        {
                            "basic_info.secondary_department": Code.getDepartmentCode(searchKeyword),
                        }
                    ]
                }
            ]
            
        };
    }
    if (searchIndex === 'age') {
        const birthYear = age_birthDate_convert(searchKeyword);
        return {
            $and: [
                {
                    "support_status": {$gte: 201}
                },
                {
                    "basic_info.birth_date": new RegExp(String(birthYear)),
                }
            ]
        }
    }
}

const getScheduleUserList = async (req, res) => {
    let findOption = { "support_status": { $gte: 201 } }
    if (req.query.type && req.query.q) {
        const searchIndex = req.query.type;
        const searchKeyword = req.query.q;
        findOption = matchSearchIndexandSchemaKey(searchIndex, searchKeyword);
    }
    try {
        const userList = await User
            .find(findOption)
            .select("basic_info interview_info")
            .sort({ _id: -1 })
            .exec();

        const resUserList = userList.map(user => userScheduleInfo(user));
        res.status(200).json({ message: "Successful get schedule list", result: resUserList });

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: JSON.stringify(e), result: null, });
    }
}

module.exports = {
    getScheduleList: getScheduleUserList,
}