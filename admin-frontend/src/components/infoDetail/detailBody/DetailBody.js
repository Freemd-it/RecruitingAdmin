import React from 'react';
import DetailCell from '../detailCell/DetailCell'
import AnswerBody from '../../answerDetail/answerBody/AnswerBody'
import { withStyles } from '@material-ui/core/styles';


import './DetailBody.scss'
import _ from 'lodash'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const DetailBody = ({classes, data}) => {
  return (
    <div className={`${classes.container} DetailBody`}>
      { 
        _.map(data, (value, key) => {
          if(key === 'external_activities') {
            return (
              <DetailCell
                key={`${key}__DetailBody`}
                colName={key}
                colValue={'11'}
              />
            )
          } else if (key === 'apply_info') {
            return (<AnswerBody
              key={`${key}__AnswerBody`}
              data={value}
            />)
          } else {
            return (
              <DetailCell
                key={`${key}__DetailBody`}
                colName={key}
                colValue={String(value)}
              />
           )
          }
        })
      }
    </div>
  )
}

export default withStyles(styles)(DetailBody)