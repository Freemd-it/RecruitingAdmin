const User = require('../models/UserModel');
const moment = require('moment');

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
        name: userObj.basic_info.name,
        english: userObj.basic_info.english,
        is_male: userObj.basic_info.is_male,
        birth_date: moment(userObj.basic_info.birth_date).format('YYYY-MM-DD'),
        email: userObj.basic_info.email,
        phone_number: userObj.basic_info.phone_number,
        sns: userObj.basic_info.sns,
        address: userObj.basic_info.address,
        first: userObj.basic_info.department + ' ' + userObj.basic_info.team,
        second: userObj.basic_info.secondary_department + ' ' + userObj.basic_info.secondary_team
    }
}

const getUserList = async(req, res) => {
    try {
        const userList = await User
                                .find()
                                .select("basic_info")
                                .sort({_id: -1})
                                .exec();
        console.log(userList);
        const resUserList = userList.map(user => userDefulatInfo(user));
        res.status(200).json({data: resUserList});
    } catch(e) {
        console.log(e);
        res.status(500).json({error : e});
    }
}

const getUser = async(req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
        const user = await User
                            .findById(id)
                            .exec();
        res.status(200).json({data: user});
    } catch(e) {
        console.log(e);
        res.status(500).json({error: e});
    }
}


module.exports = {
    getUserList : getUserList,
    getUser : getUser,
}
