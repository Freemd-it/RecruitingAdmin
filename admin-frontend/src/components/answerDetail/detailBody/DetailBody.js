import React from 'react';
import DetailCell from '../detailCell/DetailCell'
import AnswerDetail from '../answerDetail/AnswerDetail'
import { withStyles } from '@material-ui/core/styles';

import './DetailBody.scss'
import _ from 'lodash'
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/SupervisorAccount';
import ExternalActivityCell from '../../../containers/recruit/ExternalActivityCell';
import AcademicCareerCell from '../../../containers/recruit/AcademicCareerCell';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

const DetailBody = ({ classes, data }) => {
  const keyList = Object.keys(data)
  const valueList = Object.values(data)
  console.log(keyList)
  console.log(valueList)
  return (
    <div className="Scrollable">
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
      <Card>
        <CardContent>
          <Typography gutterBottom className='Title'>
            <AccountIcon className='Icon' /> 기본 정보
          </Typography>
          <Divider className="Divider" />
          <div className="DetailBody">
            {
              _.map(data, (value, index) => {
                return (
                  <DetailCell
                    key={index.toString()}
                    className="DetailCell"
                    colName={index}
                    colValue={value}
                  />
                )
              })
            }

          </div>
        </CardContent>
      </Card>
      <AcademicCareerCell data={data} />
      <ExternalActivityCell data={data.external_activities} />
    </div>
  )
}

export default withStyles(styles)(DetailBody)