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
  return (
    <div className={classes.container}>
      <div className="RowContainer">
        <span className="title"> 지원자 정보 </span>
      </div>
      <div className="RowContainer">
        <DetailCell
          colName={"이름"}
          colValue={"동수"}
        /> 
        <DetailCell
          colName={"전화번호"}
          colValue={"00000"}
        /> 
      </div> 
      <div className="RowContainer">
        <span className="title"> 단체 공통질문 </span>
      </div>
      <div className="RowContainer">
        <div className="contents">
          {data.question}
        </div>
      </div>
      <div className="RowContainer">
        <div className="contents">
          {data.question}
        </div>
      </div>
      <div className="RowContainer">
        <span className="title"> 본부 공통질문 </span>
      </div>
      <div className="RowContainer">
        <AnswerDetail
          colName={'경영지원본부'}
          colValue={data.question}
        />
      </div>
      <div className="RowContainer">
        <span className="title"> 팀 질문 </span>
      </div>
      <div className="RowContainer">
        <AnswerDetail
          colName={'재무팀'}
          colValue={data.question}
        />
      </div>
    </div>
  )
}

export default withStyles(styles)(DetailBody)