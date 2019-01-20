import React from 'react';
import AnswerDetail from '../answerDetail/AnswerDetail'
import { withStyles } from '@material-ui/core/styles';

import './AnswerBody.scss'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const AnswerBody = ({ classes, data }) => {
  return (
    <div className="Scrollable">
      <span> 질문답변 </span>
      <div className={classes.container}>
        <div className="RowWapper">
          <div className="RowContainer">
            <span> 단체 공통질문 </span>
          </div>
          <div className="RowContainer">
            <AnswerDetail
              colValue={'11'}
            />
          </div>
          <div className="RowContainer">
            <AnswerDetail
              colValue={'시발'}
            />
          </div>
        </div>

        <div className="RowWapper">
          <div className="RowContainer">
            <span> 본부 질문 </span>
          </div>
          <div className="RowContainer">
            <AnswerDetail
              colName={data.department}
              colValue={'11'}
            />
          </div>
        </div>

        <div className="RowWapper">
          <div className="RowContainer">
            <span> 팀 질문 </span>
          </div>
          <div className="RowContainer">
            <AnswerDetail
              colName={data.team}
              colValue={data.questions[0].answer}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(AnswerBody)