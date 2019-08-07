import React from 'react';
import moment from 'moment';
import AccountIcon from '@material-ui/icons/SupervisorAccount';
import organization from 'lib/service/organization'
import searchTeam from 'lib/sreachTeam'
// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

// function getAge(birthday) {
//   let ageDate = new Date(Date.now() - Date(birthday.getTime()));
//   return Math.abs(ageDate.getUTCFullYear() - 1970 + 1);
// }

const BasicInfo = (props) => {
  const {
    userName,
    englishName,
    isMale,
    birthDate,
    phoneNumber,
    email,
    sns, 
    address,
    departments = [],
  } = props.data;

  const birthString = moment(birthDate).format("Y년 M월 D일");
  const inputData = [
    ['이름', `${userName} (${englishName})`],
    ['성별', `${isMale ? '남' : '여'}`],
    ['생년월일', `${birthString}`],
    ['전화번호', `${phoneNumber}`],
    ['이메일', `${email}`],
    ['SNS 주소', <a href={sns}>{sns}</a>],
    ['주소', `${address}`],
  ];
  departments.forEach((department, index) => {
    inputData.push([`지원 부서 (${index+1}지망)`, `${department.departmentName} ${department.teamName}`]);
    inputData.push([`지원 사업 (${index+1}지망)`, department.medicalField]);
  });
  return (
    <InformationCard
      title={(
        <span className="Title">
          <AccountIcon className='Icon'/>
          기본정보
        </span>)}
      content={(
        <div className="Content">
          {inputData.map(input => (
            <div className="Content__wrapper" key={input}>
              <span className="Head-3">{input[0]} : </span> <span className="SubContent"> {input[1]} </span>
            </div>
          ))}
        </div>
      )}>
    </InformationCard>
  )
}

export default BasicInfo;