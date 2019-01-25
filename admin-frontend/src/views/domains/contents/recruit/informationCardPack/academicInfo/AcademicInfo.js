import React from 'react';
import moment from 'moment';
import SchoolIcon from '@material-ui/icons/School';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const AcademicInfo = (props) => {
  const {
    school_name,
    school_degree,
    school_type,
    school_location,
    entrance_date,
    graduate_date
  } = props.data;

  const entranceDateString = entrance_date != null ? moment(entrance_date).format("Y년 M월") + ' 부터' : '';
  const graduateDateString = graduate_date != null ? moment(graduate_date).format("Y년 M월") + ' 까지' : '';


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
            {school_name} {school_degree} ({school_type}, {school_location})
          </div>
          <div>
            {entranceDateString} {graduateDateString} {graduate_date != null ? '졸업' : '재학 중'}
          </div>
        </div>
      )}>
    </InformationCard>
  )
}

export default AcademicInfo;