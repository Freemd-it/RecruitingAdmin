import React from 'react';
import DetailBody from '../infoDetail/detailBody/DetailBody';
import AnswerBody from '../answerDetail/answerBody/AnswerBody';
import ExternalInfo from '../externalInfo/ExternalInfo';


import { withStyles } from '@material-ui/core/styles';

import './InfoDetail.scss'
import _ from 'lodash'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const InfoDetail = ({classes, data}) => {
  return (
    <div className={`${classes.container} DetailBody`}>
      { 
        _.map(data, (value, key) => {
          if(key === 'external_activities') {
            return (
              <div className="DetailBody__Item">
                <ExternalInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              </div>
            )
          } else if (key === 'apply_info') {
            return (
              <div className="DetailBody__Item">
                <AnswerBody
                  key={`${key}__AnswerBody`}
                  data={value}
                />
              </div>
            )
          } else if(key === 'basic_info') {
            return (
              <div className="DetailBody__Item"> 
                <DetailBody
                  key={`${key}__DetailBody`}
                  data={value}
                />
              </div>
           )
          }
        })
      }
    </div>
  )
}

export default withStyles(styles)(InfoDetail)