import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info'

import '../InfoDetail.scss';
import InfoCard from '../InfoCard';

const ApplyInfo = (props) => {

  const {
    qnas,
    portfolios,
    interview_times,
    can_moved,
    can_multiple_interview
  } = props.data;

  const interviewTable = [
    [
      '10:00 ~ 12:00',
      '12:00 ~ 14:00',
      '14:00 ~ 16:00',
      '16:00 ~ 18:00',
    ],
    [
      '14:00 ~ 16:00',
      '16:00 ~ 18:00'
    ]
  ]
  return (
    <InfoCard
      title={(
        <span className="Title">
          <InfoIcon className="Icon" /> 지원 정보
        </span>)}
      content={
        (<div className="Content">
          {qnas.map((qna, index) =>
            (
              <div key={qna.type}>
                {index !== 0 ? (<Divider className="Divider" />) : ''}
                <div className="SubTitle">{qna.type}</div>
                {qna.data.map(elem => (
                  <div key={elem} className="SubContent">
                    <div className="SubTitle">
                      {elem.question}
                    </div>
                    <div>
                      - {elem.answer}
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
          <Divider className="Divider" />
          {portfolios.length > 0 ? <div className="SubTitle"> 포트폴리오 정보</div> : ''}
          {portfolios.map((portfolio, index) =>
              <div className="SubContent" key={`${index}__portfolio`}>
                <a href="/" onClick={e => e.preventDefault()}>{portfolio.file_path}</a>
              </div>
          )}
          <Divider className="Divider" />
          <div>
            <div className="SubTitle">인터뷰 가능 시간</div>
            {interview_times.map((dayInfo, index) => (
              <div key={`${index}__dayInfo`}>
                <div className="SubTitle">
                  {moment(dayInfo.date).format("M월 D일")}
                </div>
                <div>
                  {interviewTable[index].map((time, i) => (
                    <div key={`${i}__${time}__interview`} className={interview_times[index].time.includes(time) ? "InterviewCell Selected" : "InterviewCell"}>{time}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Divider className="Divider" />
          <div>
            <span className="SubTitle">본부 이동 가능</span> {can_moved ? 'O' : 'X'}
          </div>
          <div>
            <span className="SubTitle">여러 부서 면접 가능</span> {can_multiple_interview ? 'O' : 'X'}
          </div>
        </div>)
      }>
    </InfoCard>
  )
}

export default ApplyInfo;