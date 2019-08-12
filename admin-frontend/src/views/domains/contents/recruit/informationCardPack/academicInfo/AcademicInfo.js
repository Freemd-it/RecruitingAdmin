import React from 'react';
import moment from 'moment';
import SchoolIcon from '@material-ui/icons/School';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const AcademicInfo = ({data}) => {
    
  const { academicName = '', degree = '', major = '', location = '', entranceDate = '', graduationDate = '' } = data;
  const entranceDateString = entranceDate != null ? moment(entranceDate).format("Y년 M월") + ' ~ ' : '';
  const graduateDateString = graduationDate != null ? moment(graduationDate).format("Y년 M월") : '';

  return (
    <InformationCard
      title={(
        <span className="Title">
          <SchoolIcon className='Icon'/>
          학력정보
        </span>)}
      content={(
        <div className="Content">
          <div className="Content__wrapper">
            <span className="SubTitle">학력사항 :  </span> {academicName} {degree} ({major}, {location})
          </div>
          <div>
          <span className="SubTitle">기간 :  </span> {entranceDateString} {graduateDateString} {graduationDate != null ? '졸업' : '재학 중'}
          </div>
        </div>
      )}>
    </InformationCard>
  )
}

export default AcademicInfo;