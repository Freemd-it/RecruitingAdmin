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
    user_name,
    english_name,
    is_male,
    birth_date,
    phone_number,
    email,
    sns, 
    address,
    department = '',
    secondary_department = '',
    team = '',
    secondary_team = '',
    medical_field = '',
    secondary_medical_field = '',
  } = props.data;

  const birthString = moment(birth_date).format("Y년 M월 D일");
  const inputData = [
    ['이름', `${user_name} (${english_name})`],
    ['성별', `${is_male ? '남' : '여'}`],
    ['생년월일', `${birthString}`],
    ['전화번호', `${phone_number}`],
    ['이메일', `${email}`],
    ['SNS 주소', `${sns}`],
    ['주소', `${address}`],
    ['지원 부서 (1지망)', `${department} ${team}`],
    ['지원 부서 (2지망)', `${secondary_team && secondary_department} ${secondary_team && secondary_team}`],
    // TODO => 지원 사업 종류 디비 스키마 수정해서 진행 필요
    ['지원 사업 (1지망)', `${medical_field}`],
    ['지원 사업 (2지망)', `${secondary_medical_field}`],
  ];
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