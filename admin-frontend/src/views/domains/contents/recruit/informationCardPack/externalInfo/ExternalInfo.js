import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/BusinessCenter';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const ExternalInfo = (props) => {

  return (
    <InformationCard
      title={(
        <span className="Title">
          <BusinessIcon className="Icon" /> 경력사항
        </span>)}
      content={
        props.data.map((elem, index) => {
          const { organizer, startDate, endDate, time, content } = elem;
          const startDateString = moment(startDate).format("Y년 M월") + ' 부터';
          const endDateString = moment(endDate).format("Y년 M월") + ' 까지';
          return (
            <div key={index} className="Content">
              {index !== 0 ? (<Divider className="Divider" />) : ''}
              <div className="SubTitle">
                경력 {index + 1}.
              </div>
              <div className="SubContent">
                {organizer}
              </div>
              <div className="SubContent">
                {startDateString} {endDateString} ({time} 시간)
              </div>
              <div className="SubTitle">
                상세 내용
              </div>
              <div className="SubContent">
                {content}
              </div>
            </div>
          )
        })
      }>
    </InformationCard>
  )
}

export default ExternalInfo;