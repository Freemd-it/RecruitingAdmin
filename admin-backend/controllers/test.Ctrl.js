const Info = require('../models/testModel');
const User = require('../models/UserModel');
const moment = require('moment');

const getTestList = async(req, res) => {
    console.log(req.userdata);
    try {
        const infoList = await Info
                                .find()
                                .exec();
        
        res.json(infoList);
    }catch(e) {
        res.status(500).json({
            error : e
        });
    }
}

const makeUser = async(req, res) => {
    const {user_name, email, password, english_name, is_male, phone_number, sns, address} = req.body;
    const {academic_name, location, degree, major} = req.body;
    const {department, secondary_department, team, secondary_team, can_moved, can_multiple_interview} = req.body;
    const {interview_date, interview_week, interview_time} = req.body;

    const user = new User({
        basic_info : {
            name: user_name,
            email: email,
            password: password,
            english: english_name,
            is_male: is_male,
            birth_date: new Date(),
            phone_number: phone_number,
            sns: sns,
            address: address,
        },
        academic_career: {
            name: academic_name,
            location: location,
            degree: degree,
            major: major,
            entrance_date: new Date(),
            graduation_date: new Date(),
        },
        apply_info: {
            first_department: department,
            secondary_department: secondary_department,
            first_team: team,
            secondary_team: secondary_team,
            can_moved: can_moved,
            can_multiple_interview: can_multiple_interview,
        },
        interview_info: {
            interview_date: interview_date,
            interview_week: interview_week,
            interview_time: interview_time,
        }
    });
    try {
        await user.save();
        res.json(user);
    } catch(e) {
        console.log(e);
        res.status(500).json({error: JSON.stringify(e)});
    }
}

const makeTestList = async(req, res) => {
    const {name, email, phone} = req.body;
    const info = new Info({ name, email, phone});

    try {
        await info.save();
        res.json(info);
    }catch(e) {
        res.status(500).json({error : e});
    }
}

module.exports = {
    getInfoList : getTestList,
    makeInfo : makeTestList,
    makeUser: makeUser,
};