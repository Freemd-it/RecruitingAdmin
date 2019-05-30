const User = require('../models/UserModel');
const Code = require('../modules/Status.Code');
const moment = require('moment');
const interview_time = require('../config/interviewTime');
const { userScheduleInfo } = require('../lib/userSchdule');

const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
  if (searchIndex === 'name') {
    return {
      $and: [
        {
          "support_status": { $gte: 201 }
        },{
          "basic_info.user_name": new RegExp(searchKeyword),
        }
      ]
    };
  }
  if (searchIndex === 'department') {
      return {
        $and: [{
            "support_status": { $gte: 201 }
          },{
        $or: [
          {
            "basic_info.department": Code.getDepartmentCode(searchKeyword),
          },{
            "basic_info.secondary_department": Code.getDepartmentCode(searchKeyword),
          }
        ]
      }]
    };
  }
  if (searchIndex === 'age') {
    const birthYear = age_birthDate_convert(searchKeyword);
    return {
      $and: [{
        "support_status": { $gte: 201 }
        },{
          "basic_info.birth_date": new RegExp(String(birthYear)),
        }
      ]
    }
  }
}

const getScheduleUserList = async (req, res) => {
    let findOption = { "support_status": { $gte: 201 } }
    const { type, q } = req.type;

    if (type && q) findOption = matchSearchIndexandSchemaKey(type, q);
    
    try {
      const userList = await User
        .find(findOption)
        .select("basic_info interview_info")
        .sort({ _id: -1 })
        .exec();

      res.status(200).json({ message: "Successful get schedule list", result: userList.map(user => userScheduleInfo(user)) });

    } catch (e) {
      console.log(e);
      res.status(500).json({ message: JSON.stringify(e), result: null, });
    }
}

module.exports = {
    getScheduleList: getScheduleUserList,
}