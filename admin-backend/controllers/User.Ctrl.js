// const User = require('../models/UserModel');
const User = require('../models/UserModel2');
const Code = require('../modules/Status.Code');
const moment = require('moment');

const userDefaultInfo = (user) => {
    const { 
      _id, 
      basicInfo, 
      evaluation, 
      supportStatus,
      batch,
    } = user;
    const { departments } = basicInfo;
    const departmentData = {};
    departments.forEach((department, index) => {
      const { departmentName, medicalField, teamName } = department;
      departmentData[`departmentName_${index+1}`] = departmentName;
      departmentData[`teamName_${index+1}`] = teamName;
      departmentData[`medicalField_${index+1}`] = medicalField;
    });
    return {
      ...departmentData,
      _id: _id,
      name: basicInfo.userName,
      email: basicInfo.email,
      englishName: basicInfo.englishName,
      isMale: basicInfo.isMale,
      birthDate: moment(basicInfo.birthDate).format('YYYY-MM-DD'),
      phoneNumber: basicInfo.phoneNumber,
      sns: basicInfo.sns,
      address: basicInfo.address,
      evaluation: evaluation,
      otherAssignNgo: basicInfo.otherAssignNgo,
      otherAssignMedical: basicInfo.otherAssignMedical,
      supportStatus: supportStatus,
      batch: batch,
      departments: basicInfo.departments,
    }
}
const getUserList = async (req, res) => {
    const findOption = {
        batch: req.params.batch,
        supportStatus: 201,
    }
    try {
        const userList = await User
            .find(findOption)
            .select("batch supportStatus basicInfo evaluation")
            .sort({ _id: -1 })
            .exec();
        const resUserList = userList.map(user => userDefaultInfo(user));
        res.status(200).json({ message: "Successful get user list", result: resUserList });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: JSON.stringify(e), result: null });
    }
}
const getUser = async (req, res) => {
  const { batch, id } = req.params;
  try {
    const user = await User.findById(id).exec();
    return res.status(200).json({ message: "Successful get user detail", result: user });
  } catch(e) {
    return res.status(500).json({ message: JSON.stringify(e), result: null });
  }
}

const searchUserList = async (req, res) => {
  res.send({});
}
const updateUserSupportStatus = async (req, res) => {
  res.send({});
}
const updateApplicantRank = async (req, res) => {
  res.send({});
}
module.exports = {
  getUserList,
  getUser,
  searchUserList,
  updateUserSupportStatus,
  updateApplicantRank,
}



// const userDefulatInfo = (userObj) => {
//     if (userObj.basic_info.team === '없음') {
//         userObj.basic_info.team = '';
//     }
//     if (userObj.basic_info.secondary_department === '없음') {
//         userObj.basic_info.secondary_department = '';
//     }
//     if (userObj.basic_info.secondary_team === '없음') {
//         userObj.basic_info.secondary_team = '';
//     }
//     return {
//         _id: userObj._id,
//         name: userObj.basic_info.user_name,
//         english: userObj.basic_info.english_name,
//         is_male: userObj.basic_info.is_male,
//         birth_date: moment(userObj.basic_info.birth_date).format('YYYY-MM-DD'),
//         email: userObj.basic_info.email,
//         phone_number: userObj.basic_info.phone_number,
//         sns: userObj.basic_info.sns,
//         address: userObj.basic_info.address,
//         first: {
//           department: userObj.basic_info.department,
//           team: userObj.basic_info.team,
//         },
//         second: {
//           department: userObj.basic_info.secondary_department,
//           team: userObj.basic_info.secondary_team
//         },
//         medical_field: userObj.basic_info.medical_field,
//         secondary_medical_field: userObj.basic_info.secondary_medical_field,
//         evaluation: userObj.evaluation,
//         other_assign_ngo: userObj.basic_info.other_assign_ngo,
//         other_assign_medical: userObj.basic_info.other_assign_medical,
//         support_status: userObj.support_status,
//         batch: userObj.batch,
//     }
// }
// const birthDate_age_convert = (date) => {
//     const birthYear = moment(date).format('YYYY');
//     return Number(moment().format('YYYY')) - Number(birthYear) + 1;
// }

// const age_birthDate_convert = (age) => {
//     const currentYear = moment().format('YYYY');
//     return Number(currentYear) - Number(age) + 1;
// }

// const matchSearchIndexandSchemaKey = (searchIndex, searchKeyword) => {
//     if (searchIndex === 'name') {
//         return {
//             $and: [
//                 {
//                     "support_status": {$gte: 201}
//                 },
//                 {
//                     "basic_info.user_name": new RegExp(searchKeyword),
//                 }
//             ]
//         };
//     }
//     if (searchIndex === 'department') {
//         return {
//             $and: [
//                 {
//                     "support_status": {$gte: 201}
//                 },
//                 {
//                     $or: [
//                         {
//                             "basic_info.department": Code.getDepartmentCode(searchKeyword),
//                         },
//                         {
//                             "basic_info.secondary_department": Code.getDepartmentCode(searchKeyword),
//                         }
//                     ]
//                 }
//             ]
            
//         };
//     }
//     if (searchIndex === 'team') {
//         return {
//             $or: [
//                 {
//                     "basic_info.team": new RegExp(searchKeyword),
//                 },
//                 {
//                     "basic_info.secondary_team": new RegExp(searchKeyword),
//                 }
//             ]
//         };
//     }
//     if (searchIndex === 'age') {
//         const birthYear = age_birthDate_convert(searchKeyword);
//         return {
//             $and: [
//                 {
//                     "support_status": {$gte: 201}
//                 },
//                 {
//                     "basic_info.birth_date": new RegExp(String(birthYear)),
//                 }
//             ]
//         }
//     }
// }

// const getUserList = async (req, res) => {
//     let findOption = {"support_status": {$gte: 201}, "batch": req.params.batch};

//     //검색용. 일단은 검색없이 가는걸로
//     // if (req.query.type && req.query.q) {
//     //     const searchIndex = req.query.type;
//     //     const searchKeyword = req.query.q;
//     //     findOption = matchSearchIndexandSchemaKey(searchIndex, searchKeyword);
//     // }

//     try {
//         const userList = await User
//             .find(findOption)
//             .select("basic_info support_status evaluation batch")
//             .sort({ _id: -1 })
//             .exec();
//         const resUserList = userList.map(user => userDefulatInfo(user));
//         res.status(200).json({ message: "Successful get user list", result: resUserList });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: JSON.stringify(e), result: null });
//     }
// }

// const getUser = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const user = await User.findById(id).exec();
//         res.status(200).json({ message: "Successful get user detail", result: user });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: JSON.stringify(e), result: null });
//     }
// }

// const getTest = async (req, res) => {
//     const name = '김연태';
//     const test = true;
//     try {
//         const userList = await User
//             .find({ "basic_info.user_name": name })
//             .select("basic_info")
//             .sort({ _id: -1 })
//             .exec();
//         res.status(200).json({ result: userList });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: JSON.stringify(e), result: null });
//     }
// }

// const searchUserList = async (req, res) => {
//     const searchIndex = req.query.type;
//     const searchKeyword = req.query.q;

//     const findOption = matchSearchIndexandSchemaKey(searchIndex, searchKeyword);
//     try {
//         const userList = await User
//             .find(findOption)
//             .select("basic_info support_status")
//             .sort({ _id: -1 })
//             .exec();
//         const resUserList = userList.map(user => userDefulatInfo(user));
//         res.status(200).json({ result: resUserList });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({ message: JSON.stringify(e), result: null });
//     }
// }

// const updateUserSupportStatus = async(req, res) => {
//     const userId = req.params.userId;
//     const { status } = req.body;
//     const register = req.userdata;

//     try {
//         const updatedUser = await new Promise( (resolve, reject) => {
//             User.findByIdAndUpdate(userId, { $set: {support_status: Number(status)}}, {new: true}, (error, obj) => {
//                 if( error ) {
//                     console.error( JSON.stringify( error ) );
//                     return reject( error );
//                 }
//                 resolve( obj );
//             });
//         })
//         if(!updatedUser){
//             res.status(400).json({message: "Can't find applicatant", result: null});
//             return;
//         }
//         res.status(201).json({message: "Success", result: updatedUser});
        
//     } catch(e){
//         res.status(500).json({message: JSON.stringify(e), result: null});
//     }
// }

// const updateApplicantRank = async(req, res) => {
//   const { rank, userId } = req.body;
//   try {
//       const updatedUser = await new Promise( (resolve, reject) => {
//           User.findOneAndUpdate({_id: userId}, { $set: { evaluation : rank}}, {new: true, upsert: true }, (error, obj) => {
//               console.log(userId);
//               if( error ) {
//                   console.error( JSON.stringify( error ) );
//                   return reject( error );
//               }
//               resolve(obj);
//           });
//       })
//       if(!updatedUser){
//           res.status(400).json({message: "Can't find applicatant", result: null});
//           return;
//       }
//       res.status(201).json({message: "Success", result: updatedUser});
      
//   } catch(e){
//       res.status(500).json({message: JSON.stringify(e), result: null});
//   }
// }

// module.exports = {
//     getUserList,
//     getUserList2,
//     getUser,
//     searchUserList,
//     updateUserSupportStatus,
//     updateApplicantRank,
// }
