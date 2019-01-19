import React from 'react';
import moment from 'moment';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

import './DetailBody.scss';

const AcademicCareerCell = (props) => {
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
    <Card className="Card">
      <CardContent>
        <Typography gutterBottom className='Title'>
          <SchoolIcon className='Icon'/> 학력 정보
        </Typography>
        <Divider className="Divider"/>
        <div className="Content">
          <div>
            {school_name} {school_degree} ({school_type}, {school_location})
          </div>
          <div>
            {entranceDateString} {graduateDateString} {graduate_date != null ? '졸업' : '재학 중'}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AcademicCareerCell;