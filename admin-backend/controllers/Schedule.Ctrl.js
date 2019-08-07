const User = require('../models/UserModel2');
const Code = require('../modules/Status.Code');
const moment = require('moment');
const interview_time = require('../config/interviewTime');
const { userScheduleInfo } = require('../lib/userSchdule');
const RecruitMeta = require('../models/RecruitMetaModel');

const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
  if (searchIndex === 'name') {
    return {
      $and: [
        {
          "support_status": { $gte: 201 }
        }, {
          "basic_info.user_name": new RegExp(searchKeyword),
        }
      ]
    };
  }
  if (searchIndex === 'department') {
    return {
      $and: [{
        "support_status": { $gte: 201 }
      }, {
        $or: [
          {
            "basic_info.department": Code.getDepartmentCode(searchKeyword),
          }, {
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
      }, {
        "basic_info.birth_date": new RegExp(String(birthYear)),
      }
      ]
    }
  }
}

const getScheduleList = async (req, res) => {
  let findOption = { "supportStatus": { $gte: 201 }, "batch": req.params.batch }

  // TODO
  //얘도 일단 검색이나 조건등은 빼고 전체조회부터 제대로 합시다.
  // const { type, q } = req.query;

  // if (type && q) findOption = matchSearchIndexandSchemaKey(type, q);

  try {
    const userList = await User
      .find(findOption)
      .select("basicInfo interviewInfo batch")
      .sort({ _id: -1 })
      .exec();

    const allInterviewTimes = await RecruitMeta
      .find({ "batch": req.params.batch })
      .select("interviewTimes")
      .exec();

    const resultList = userList.map(user => userScheduleInfo(user, allInterviewTimes))
    res.status(200).json({ message: "Successful get schedule list", result: resultList });

  } catch (e) {
    console.log(e);
    res.status(500).json({ message: JSON.stringify(e), result: null, });
  }
}

const mockup = (req, res) => {
  const data = {
    "message": "Successful get schedule list",
    "result": [
      {
        "_id": "5d4adb5e04165229312d1fa3",
        "name": "김민수",
        "phoneNumber": "3473",
        "departments": [
          {
            "_id": "5d4aece030267f2bb6963272",
            "departmentName": "경영지원본부",
            "teamName": "IT기획팀",
            "medicalField": "무료진료",
            "order": 0
          },
          {
            "_id": "5d4aece030267f2bb6963271",
            "departmentName": "무료진료소사업본부",
            "teamName": "진료소운영팀",
            "medicalField": "무료진료",
            "order": 1
          }
        ],
        "otherAssignNgo": true,
        "otherAssignMedical": true,
        "schedule": {
          "first": [
            0,
            0,
            0,
            0,
            1,
            1
          ],
          "second": [
            0,
            0,
            1,
            1
          ]
        }
      }
    ]
  }
  res.status(200).json(data);
}

module.exports = {
  getScheduleList,
  mockup
}
