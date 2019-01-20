import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import './InfoDetail.scss'
import _ from 'lodash'
import AcademicInfo from './academicInfo/AcademicInfo';
import ExternalInfo from './externalInfo/ExternalInfo';
import BasicInfo from './basicInfo/BasicInfo';
import ApplyInfo from './applyInfo/ApplyInfo';
import AbilityInfo from './abilityInfo/AbilityInfo';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const InfoDetail = ({ classes, data }) => {
  return (
    <div className={`${classes.container} DetailBody`}>
      {
        _.map(data, (value, key) => {
          switch (key) {
            case 'external_activities':
              return (
                <ExternalInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'apply_info':
              return (
                <ApplyInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'basic_info':
              return (
                <BasicInfo 
                key={`${key}__DetailBody`}
                data={value} />
              );
            case 'academic_info':
              return (
                <AcademicInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'ability_info':
              return (
                <AbilityInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              )
            default:
              return '';
          }
        })
      }
    </div>
  )
}

export default withStyles(styles)(InfoDetail)