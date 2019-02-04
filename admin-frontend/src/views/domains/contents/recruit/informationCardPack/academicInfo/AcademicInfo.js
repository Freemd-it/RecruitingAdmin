import React from 'react';
import moment from 'moment';
import SchoolIcon from '@material-ui/icons/School';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const AcademicInfo = (props) => {
  const {
    academic_name,
    degree,
    major,
    location,
    entrance_date,
    graduation_date
  } = props.data;

  const entranceDateString = entrance_date != null ? moment(entrance_date).format("Y년 M월") + ' 부터' : '';
  const graduateDateString = graduation_date != null ? moment(graduation_date).format("Y년 M월") + ' 까지' : '';


  return (
    <InformationCard
      title={(
        <span className="Title">
          <SchoolIcon className='Icon'/>
          학력정보
        </span>)}
      content={(
        <div className="Content">
          <div>
            {academic_name} {degree} ({major}, {location})
          </div>
          <div>
            {entranceDateString} {graduateDateString} {graduation_date != null ? '졸업' : '재학 중'}
          </div>
        </div>
      )}>
    </InformationCard>
  )
}

export default AcademicInfo;