import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import '../InfoDetail.scss';
import InfoCard from '../InfoCard';

function componentByType(elem) {
  const gradeStringList = ['상', '중', '하'];
  switch(elem.type) {
    case '공인영어':
      return (
        <div>
          <div className="SubTitle">{elem.type} ({elem.title}) </div>
          <span className="SubTitle"> 본인 평가 </span> {gradeStringList[elem.grade]}
          {elem.content ? <div className="SubTitle">세부 내용</div> : null}
          <div className="SubContent">{elem.content}</div>
        </div>
      );
    case '자격증':
      return (
        <div>
          <div className="SubTitle">{elem.type} ({elem.title}) </div>
          <span className="SubTitle"> 취득일</span> {moment(elem.date).format("Y년 M월")}
          {elem.content ? <div className="SubTitle">세부 내용</div> : null}
          <div className="SubContent">{elem.content}</div>
        </div>
      );
    case '어학능력':
      return (
        <div>
          <div className="SubTitle">{elem.type} ({elem.title}) </div>
          <span className="SubTitle"> 본인 평가 </span> {gradeStringList[elem.grade]}
          {elem.content ? <div className="SubTitle">세부 내용</div> : null}
          <div className="SubContent">{elem.content}</div>
        </div>
      );
    case '기타내역':
      return (
        <div>
          <div className="SubTitle">{elem.type} ({elem.title}) </div>
          {elem.content ? <div className="SubTitle">세부 내용</div> : null}
          <div className="SubContent">{elem.content}</div>
        </div>
      );
    default:
      return '';
  }
}
const AbilityInfo = (props) => {

  const abilityInfo = props.data;
  return (
    <InfoCard
      title={(
        <span className="Title">
          <StarIcon className="Icon" /> 특기사항
        </span>)}
      content={
        abilityInfo.map((elem, index) =>
          (
            <div key={`${elem.type}__${index}`} className="Content">
              {index !== 0 ? (<Divider className="Divider" />) : ''}
              {componentByType(elem)}
            </div>
          )
        )
      }>
    </InfoCard>
  )
}

export default AbilityInfo;