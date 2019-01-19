import React from 'react';
import DetailCell from '../detailCell/DetailCell'
import AnswerDetail from '../answerDetail/AnswerDetail'
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
  const keyList = Object.keys(data)
  const valueList = Object.values(data)
  console.log(keyList)
  console.log(valueList)
  return (
    <div className={classes.container}>
      <div className="RowContainer">
        <DetailCell
          colName={"이름"}
          colValue={"동수"}
        /> 
        <DetailCell
          colName={"전화번호"}
          colValue={"00000"}
        /> 
        <DetailCell
          colName={'11'}
          colValue={'11'}
        /> 
      </div> 
      <div className="RowContainer">
        <h6> 단체 공통질문 </h6>
      </div>
      <div className="RowContainer">
        <AnswerDetail
          colName={'시발'}
          colValue={'시발'}
        />
      </div>
      <div className="RowContainer">
        <h6> 본부 공통질문 </h6>
      </div>
      <div className="RowContainer">
        <AnswerDetail
          colName={'11'}
          colValue={'11'}
        />
      </div>
      <div className="RowContainer">
        <h6> 팀 질문 </h6>
      </div>
      <div className="RowContainer">
        <AnswerDetail
          colName={'11'}
          colValue={'11'}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailBody)