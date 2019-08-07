const Code = require('../modules/Status.Code');
const interviewTime = require('../config/interviewTime');
const moment = require('moment')

const userScheduleInfo = ({basicInfo, interviewInfo, _id}, allInterviewTimes) => {
  console.log("9080890809080")
  console.log(basicInfo.userName)
  const firstDate = [0,0,0,0,1,1];
  const secondDate = [0,0,1,1];
  

  // for (let i = 0 ; i < allInterviewTimes[0].interviewTimes.length ; i++){
  //   firstDate.push(checkInterviewTimeAvailable(allInterviewTimes.interviewTimes[i], interviewInfo[0].interviewTime, interviewInfo[0].interviewDate));
  //   secondDate.push(checkInterviewTimeAvailable(allInterviewTimes.interviewTimes[i], interviewInfo[1].interviewTime, interviewInfo[1].interviewDate));
  // }
  return {
    _id,
    name: basicInfo.userName,
    phoneNumber: basicInfo.phoneNumber.slice(-4, basicInfo.phoneNumber.length),
    departments: basicInfo.departments,
    otherAssignNgo: basicInfo.otherAssignNgo,
    otherAssignMedical: basicInfo.otherAssignMedical,
    schedule: {
        first : firstDate,
        second : secondDate,
    },
  }
}

const checkInterviewTimeAvailable = (interviewTime , applicantInterviewTime, applicantInterviewDate) => {
  console.log(interviewTime);
  console.log(applicantInterviewTime)
  console.log(applicantInterviewDate)
  if(getDateOnly(interviewTime.date) === getDateOnly(applicantInterviewDate)){
    if(applicantInterviewTime.includes(interviewTime.time)){
      return 1;
    }
  }
  return 0;
}

const getDateOnly = (dateFormat) => {
  return moment(dateFormat).format("YYYYMMDD")
}


const userScheduleInfo2 = async ({basic_info, interview_info, _id}, allInterviewTimes) => {

  const first_department = basic_info.department + ' ' + basic_info.team;
  const second_department = basic_info.secondary_team ? ( basic_info.secondary_department + ' ' + basic_info.secondary_team ) : '';
  
  console.log(allInterviewTimes);
  const saturday = [];
  const sunday = [];

  for (let i = 3; i < 7; i++) {
    saturday.push({
      interview_time: interviewTime[i],
      interview_available: interview_info[0].interview_time.includes(interviewTime[i]),
    });
  }

  for (let i = 0; i < 6; i++) {
    sunday.push({
      interview_time: interviewTime[i],
      interview_available: interview_info[1].interview_time.includes(interviewTime[i]),
    });
  }
  

  return {
      _id,
      name: basicInfo.userName,
      phoneNumber: basicInfo.phoneNumber.slice(-4, basicInfo.phoneNumber.length),
      departments,
      otherAssignNgo: basicInfo.otherAssignNgo,
      otherAssignMedical: basicInfo.otherAssignMedical,
      schedule: {
          first : first,
          second : second,
      },
  }
}

module.exports = {
  userScheduleInfo
}