import React from 'react';
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info'

import InformationCard from 'views/contexts/modal/card';

const InterviewInfo = ({data}) => {
  const { interviewTime } = JSON.parse(localStorage.getItem('recruitMeta'));
  const interviewTable = [];
  const dateList = [];
  for(const key in interviewTime) {
    interviewTable.push(interviewTime[key]);
  }

  const title = (
    <span className="Title">
      <InfoIcon className="Icon" /> 지원 정보
    </span>
  );


  const interviewEl = data.map((item, index) => {
    const { interviewWeek, interviewTime, interviewDate } = item;
    return (
      <div 
        key={`${interviewWeek}__${index}`} 
        className="SubContent"
      >
        <div>
          <span> {interviewWeek}요일 - { moment(`${interviewDate}`).format("M월 D일")}</span>
          {
            interviewTable[index].map((time, index) => {
              const result = []
              let cnt = 0
              interviewTime.forEach((_time, _index) => {
                if(time === _time) {
                  result.push(<div key={`interviewTime__${interviewWeek}__${_time}`} className="InterviewCell Selected">{_time}</div>)
                  cnt++;
                }
              })
              cnt === 0 && result.push(<div key={`interviewTime__${interviewWeek}__${time}`}className="InterviewCell">{time}</div>)
              return result
            })
          }
        </div>
      </div>
    );
  });
  const content = (
    <div className="Content">
      <div className="Head-3">인터뷰 가능 시간</div>
        {interviewEl}
      </div>
    )
    
  return (
    <InformationCard
      title={title}
      content={content}
    />)
}    
export default InterviewInfo