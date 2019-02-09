const User = require('../models/UserModel');
const Code = require('../modules/Status.Code');
const moment = require('moment');


const userScheduleInfo = (userObj) => {
    console.log(!userObj.interview_info)
    if(!userObj.interview_info) return;
    const interviewTime = ["10:00 ~ 12:00", "12:00 ~ 14:00", "14:00 ~ 16:00", "16:00 ~ 18:00"];

    const first_department = Code.getDepartmentName(Number(userObj.basic_info.department + userObj.basic_info.team)) + ' ' + Code.getTeamName(Number(userObj.basic_info.department + userObj.basic_info.team));
    const second_department = Code.getDepartmentName(Number(userObj.basic_info.second_department + userObj.basic_info.second_team)) + ' ' + Code.getTeamName(Number(userObj.basic_info.second_department + userObj.basic_info.second_team));

    const saturday = [];
    const sunday = [];

    for(let i = 2 ; i < 4 ; i++) {
        let interview_data = {
            interview_time : interviewTime[i],
            interview_available : userObj.interview_info[0].interview_time.includes(interviewTime[i]),
        }
        saturday.push(interview_data);
    }
    for(let i = 0 ; i < 4 ; i++) {
        let interview_data = {
            interview_time : interviewTime[i],
            interview_available : userObj.interview_info[0].interview_time.includes(interviewTime[i]),
        }
        sunday.push(interview_data);
    }
    console.log("saturday: ", saturday);
    console.log("sunday: ", sunday);
    return {
        _id: userObj._id,
        name: userObj.basic_info.user_name,
        phone_number: userObj.basic_info.phone_number,
        first_department: first_department,
        first_team: '',
        second_department: second_department,
        second_team: '',
        schedule: {
            saturday: saturday,
            sunday: sunday,
        },
    }
}


const getScheduleUserList = async(req, res) => {
    try {
        const userList = await User
                                .find()
                                .select("basic_info interview_info")
                                .sort({_id: -1})
                                .exec();
                                
        const resUserList = userList.map(user => userScheduleInfo(user));
        res.status(200).json({message: "Successful get schedule list", result: resUserList});
    } catch(e) {
        console.log(e);
        res.status(500).json({message : JSON.stringify(e), result: null,});
    }
}

module.exports = {
    getScheduleList : getScheduleUserList,
}