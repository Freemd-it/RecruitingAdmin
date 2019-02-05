import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import InformationCard from 'views/contexts/modal/card';
import AbillityContent from './abilityContent/AbilityContent'

function componentByType(elements) {
  switch(elements.special_type) {
    case '공인영어':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          ability={elements.self_evaluation_ability}
          contents={elements.contents}
        />
      );
    case '자격증':
      return (
        <AbillityContent
          elements={elements}
          title={'취득일'}
          subTitle={'세부 내용'}
          ability={moment(elements.acquisition_date).format("Y년 M월")}
          contents={elements.contents}
        />
      );
    case '어학능력':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          ability={elements.self_evaluation_ability}
          contents={elements.contents}
        />
      );
    case '기타능력':
      return (
        <AbillityContent
          elements={elements}
          title={'본인 평가'}
          subTitle={'세부 내용'}
          ability={elements.self_evaluation_ability}
          contents={elements.contents}
        />
      );
    default:
      return '';
  }
}

const AbilityInfo = ({data}) => {
  const abilityInfo = data;
  
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