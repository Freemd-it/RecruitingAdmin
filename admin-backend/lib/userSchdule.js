const Code = require('../modules/Status.Code');
const interview_time = require('../config/interviewTime');
const interviewTime = require('../config/interviewTime');

const userScheduleInfo = ({basic_info, interview_info, _id}) => {

  const first_department = Code.getDepartmentName(Number(basic_info.department + '00')) + ' ' + Code.getTeamName(Number(basic_info.department + basic_info.team));
  let second_department = Code.getDepartmentName(Number(basic_info.secondary_department + '00')) + ' ' + Code.getTeamName(Number(basic_info.secondary_department + basic_info.secondary_team));
  
  if (!second_department) {
      second_department = '';
  }
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
      name: basic_info.user_name,
      phone_number: basic_info.phone_number.slice(-4, basic_info.phone_number.length),
      first_department,
      second_department,
      other_assign_ngo: basic_info.other_assign_ngo,
      other_assign_medical: basic_info.other_assign_medical,
      schedule: {
          saturday: saturday,
          sunday: sunday,
      },
  }
}

module.exports = {
  userScheduleInfo
}