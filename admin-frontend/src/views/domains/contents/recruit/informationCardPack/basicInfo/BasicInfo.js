import React from 'react';
import moment from 'moment';
import AccountIcon from '@material-ui/icons/SupervisorAccount';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

function getAge(birthday) {
  let ageDate = new Date(Date.now() - birthday.getTime());
  return Math.abs(ageDate.getUTCFullYear() - 1970 + 1);
}

const BasicInfo = (props) => {
  const {
    name,
    english_name,
    is_male,
    birth_date,
    phone_number,
    email,
    sns, 
    address,
    department,
    secondary_department,
    team,
    secondary_team, 
  } = props.data;

  const birthString = moment(birth_date).format("Y년 M월 D일");
  const inputData = [
    ['이름', `${name} (${english_name})`],
    ['성별', `${is_male ? '남' : '여'}`],
    ['생년월일', `${birthString} (${getAge(birth_date)}세)`],
    ['전화번호', `${phone_number}`],
    ['이메일', `${email}`],
    ['SNS 주소', `${sns}`],
    ['주소', `${address}`],
    ['지원 부서 (1지망)', `${department} ${team ? team +' 팀': ''}`],
    ['지원 부서 (2지망)', `${secondary_department} ${secondary_team ? secondary_team + ' 팀': ''}`]
  ]
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
            <div key={input}>
              <span className="SubTitle">{input[0]}</span> {input[1]}
            </div>
          ))}
        </div>
      )}>
    </InformationCard>
  )
}

export default BasicInfo;