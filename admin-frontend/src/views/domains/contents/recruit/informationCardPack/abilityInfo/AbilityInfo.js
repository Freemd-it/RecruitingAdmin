import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import InformationCard from 'views/contexts/modal/card';
import AbillityContent from './abilityContent/AbilityContent'

const gradeStringList = ['상', '중', '하'];
function componentByType(elements) {
  switch(elements.type) {
    case '공인영어':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          contents={gradeStringList[elements.grade]}
        />
      );
    case '자격증':
      return (
        <AbillityContent
          elements={elements}
          title={'취득일'}
          subTitle={'세부 내용'}
          content={moment(elements.date).format("Y년 M월")}
        />
      );
    case '어학능력':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          content={gradeStringList[elements.grade]}
        />
      );
    case '기타내역':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          content={''}
        />
      );
    default:
      return '';
  }
}

const AbilityInfo = (props) => {
  const abilityInfo = props.data;
  
  const title = (
    <span className="Title">
        <StarIcon className="Icon" /> 특기사항
    </span>
  )

  const content = abilityInfo.map((elements, index) => 
    <div key={`${elements.type}__${index}`} className="Content">
      {index !== 0 ? (<Divider className="Divider" />) : ''}
      {componentByType(elements)}
    </div>
  )

  return (
    <InformationCard
      title={title}
      content={content}>
    </InformationCard>
  )
}

export default AbilityInfo;