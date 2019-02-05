import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info'

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const InterviewInfo = ({data}) => {
  const interviewTable = [
    [
      '14:00 - 16:00',
      '16:00 - 18:00',
    ],
    [
      '10:00 - 12:00',
      '12:00 - 14:00',
      '14:00 - 16:00',
      '16:00 - 18:00',
    ],
  ]
  const title = (
    <span className="Title">
      <InfoIcon className="Icon" /> 지원 정보
    </span>)

  const content = (
    <div>
      <div className="SubTitle">인터뷰 가능 시간</div>
      {
        data.map(({interview_week, interview_time, interview_date}, index) => (
          <div>
            <div> {interview_week}요일 - {moment(`${interview_date}`).format("M월 D일")}</div>
              <div>
                {
                  interviewTable[index].map((time, index) => {
                    const result = []
                    let cnt = 0
                    interview_time.forEach((_time, _index) => {
                      if(time === _time) {
                        result.push(<div className="InterviewCell Selected">{_time}</div>)
                        cnt++;
                      }
                    })
                    cnt === 0 && result.push(<div className="InterviewCell">{time}</div>)
                    return result
                  })
                }
              </div>
          </div>
        ))
      }
      </div>
    )
    
  return (
    <InformationCard
      title={title}
      content={content}
    />)
}    
export default InterviewInfo