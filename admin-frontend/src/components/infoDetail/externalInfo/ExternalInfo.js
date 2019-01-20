import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/BusinessCenter';

import '../InfoDetail.scss';
import InfoCard from '../InfoCard';

const ExternalInfo = (props) => {

  return (
    <InfoCard
      title={(
        <span className="Title">
          <BusinessIcon className="Icon" /> 경력사항
        </span>)}
      content={
        props.data.map((elem, index) => {
          const { type, organizer, start_date, end_date, time, content } = elem;
          const startDateString = moment(start_date).format("Y년 M월") + ' 부터';
          const endDateString = moment(end_date).format("Y년 M월") + ' 까지';
          return (
            <div key={index} className="Content">
              {index != 0 ? (<Divider className="Divider" />) : ''}
              <div className="SubTitle">
                경력 {index}.
                </div>
              <div className="SubContent">
                {organizer} {type}
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
    </InfoCard>
  )
}

export default ExternalInfo;