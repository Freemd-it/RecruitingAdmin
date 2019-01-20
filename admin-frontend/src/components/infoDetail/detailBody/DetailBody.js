import React from 'react';
import DetailCell from '../detailCell/DetailCell'
import { withStyles } from '@material-ui/core/styles';
import { recruit2 } from '../../../lib/service/tableColumn'

import './DetailBody.scss'
import _ from 'lodash'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const DetailBody = ({ classes, data }) => {
  return (
    <div>
      <div>개인정보</div>
    {
      _.map(data, (value, key) => {
        return (
          <DetailCell
            colName={recruit2.information[key]}
            colValue={value}
          />
        )
      })
    }
    </div>
  )
}

export default withStyles(styles)(DetailBody)