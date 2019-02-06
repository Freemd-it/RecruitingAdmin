const User = require('../models/UserModel');
const urlencode = require('urlencode');
const moment = require('moment');
const iconv = require('iconv-lite');

const userDefulatInfo = (userObj) => {

    if(userObj.basic_info.team === '없음'){
        userObj.basic_info.team = '';
    }
    if(userObj.basic_info.secondary_department === '없음'){
        userObj.basic_info.secondary_department = '';
    }
    if(userObj.basic_info.secondary_team === '없음'){
        userObj.basic_info.secondary_team = '';
    }
    return {
        _id: userObj._id,
        name: userObj.basic_info.user_name,
        english: userObj.basic_info.english,
        is_male: userObj.basic_info.is_male,
        birth_date: moment(userObj.basic_info.birth_date).format('YYYY-MM-DD'),
        email: userObj.basic_info.email,
        phone_number: userObj.basic_info.phone_number,
        sns: userObj.basic_info.sns,
        address: userObj.basic_info.address,
        first: userObj.basic_info.department + ' ' + userObj.basic_info.team,
        second: userObj.basic_info.secondary_department + ' ' + userObj.basic_info.secondary_team,
        can_moved: userObj.basic_info.can_moved,
        can_multiple_interview: userObj.basic_info.can_multiple_interview,
        support_status: userObj.support_status,
    }
}
const birthDate_age_convert = (date) => {
    const birthYear = moment(date).format('YYYY');
    return Number(moment().format('YYYY')) - Number(birthYear) + 1;
}

const age_birthDate_convert = (age) => {
    const currentYear = moment().format('YYYY');
    return Number(age) + Number(currentYear) - 1;
}

const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
    if(searchIndex === 'name'){
        return {
            "basic_info.user_name" : new RegExp(searchKeyword),
        };
    }
    if(searchIndex === 'department'){
        return {
            $or : [
                {
                    "basic_info.department" : new RegExp(searchKeyword),
                },
                {
                    "basic_info.secondary_department": new RegExp(searchKeyword),
                }
            ]
        };
    }
    if(searchIndex === 'team'){
        return {
            $or : [
                {
                    "basic_info.team" : new RegExp(searchKeyword),
                },
                {
                    "basic_info.secondary_team": new RegExp(searchKeyword),
                }
            ]
        }; 
    }
    if(searchIndex === 'age') {
        const birthYear = age_birthDate_convert(searchKeyword);
        return {
            "basic_info.birth_date": new RegExp(birthYear),
        }
    }
}

const getUserList = async(req, res) => {
    try {
        const userList = await User
//                                .find({"support_status": {$gt: 200}})
                                .find()
                                .select("basic_info support_status")
                                .sort({_id: -1})
                                .exec();
        console.log(userList);
        const resUserList = userList.map(user => userDefulatInfo(user));
        res.status(200).json({message: "Successful get user list", result: resUserList});
    } catch(e) {
        console.log(e);
        res.status(500).json({message : JSON.stringify(e), result: null});
    }
}

const getUser = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const user = await User
                            .findById(id)
                            .exec();
        res.status(200).json({message: "Successful get user detail", result: user});
    } catch(e) {
        console.log(e);
        res.status(500).json({message: JSON.stringify(e), result: null});
    }
}

const getTest = async(req, res) => {
    const name = '김연태';
    const test = true;
    try {
        const userList = await User
                            .find({"basic_info.user_name": name})
//                            .find()
                            .select("basic_info")
                            .sort({_id: -1})
                            .exec();
        res.status(200).json({result: userList});
    } catch(e) {
        console.log(e);
        res.status(500).json({message : JSON.stringify(e), result: null});
    }
}

const searchUserList = async(req, res) => {
    console.log("123123123123123123123");
    console.log("type : ",req.query.type);
    const searchIndex = req.query.type;
    const searchKeyword = req.query.q;

    const findOption = matchSearchIndexandSchemaKey(searchIndex, searchKeyword);
    try {
        const userList = await User
                            .find(findOption)
//                            .find()
                            .select("basic_info support_status")
                            .sort({_id: -1})
                            .exec();
        const resUserList = userList.map(user => userDefulatInfo(user));
        res.status(200).json({result: resUserList});
    } catch(e) {
        console.log(e);
        res.status(500).json({message : JSON.stringify(e), result: null});
    }
}


module.exports = {
    getUserList : getUserList,
    getUser : getUser,
    test: getTest,
    searchUserList : searchUserList,
}
