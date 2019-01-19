import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';

const style = {
  title: {
    color: 'rgba(0, 0, 0, 0.7)',
    display: 'inline-flex',
    fontSize: '1em'
  },
  content: {
    fontSize: '0.9em',
    lineHeight: '1.5em',
    paddingLeft: '0.3em'
  },
  icon: {
    marginRight: '0.3em',
    fontSize: '1.1em'
  },
  card: {
    marginTop: '10px'
  }
}
const AcademicCareer = (props) => {
  const {
    school_name,
    school_degree,
    school_type,
    school_location,
    entrance_date,
    graduate_date
  } = props.data;

  const { classes } = props;

  const entranceDateString = entrance_date != null ? moment(entrance_date).format("Y년 MM월") + ' 부터' : '';
  const graduateDateString = graduate_date != null ? moment(graduate_date).format("Y년 MM월") + ' 까지' : '';

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom className={classes.title}>
          <SchoolIcon className={classes.icon}/> 학력 정보
        </Typography>
        <div className={classes.content}>
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

export default withStyles(style)(AcademicCareer);