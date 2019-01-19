import React from 'react';
import DetailCell from '../detailCell/DetailCell'
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
          return (
            <DetailCell
              key={`${key}__DetailBody`}
              colName={'1111'}
              colValue={'1111'}
            />
         )
        })
      }
    </div>
  )
}

export default withStyles(styles)(DetailBody)