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
    <div className={classes.container}>
      { 
        _.map(data, (value, index) => {
          return (
              <DetailCell
                colName={index}
                colValue={value}
              />
         )
        })
      }
    </div>
  )
}

export default withStyles(styles)(DetailBody)