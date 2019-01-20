import React from 'react';
// import DetailCell from '../../infoDetail/detailCell/DetailCell'
// import AnswerDetail from '../answerDetail/AnswerDetail'
import { withStyles } from '@material-ui/core/styles';

import './ExternalInfo.scss'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const ExternalInfo = ({ classes, data }) => {
  return (
    <div> 외부활동 </div>
  )
}

export default withStyles(styles)(ExternalInfo)