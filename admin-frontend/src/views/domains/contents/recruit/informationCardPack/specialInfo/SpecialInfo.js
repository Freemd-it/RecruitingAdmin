import React from 'react';
import { Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

import './SpecialInfo.scss';
import InformationCard from 'views/contexts/modal/card';

const SpecialInfo = (props) => {

  return (
    <InformationCard
      title={(
        <span className="Title">
          <StarIcon className="Icon" />특별사항
        </span>)}
      content={
        props.data.map((elem, index) => {
          const { content, selfEvaluationAbility, specialType } = elem;
          return (
            <div key={index} className="Content">
              {index !== 0 ? (<Divider className="Divider" />) : ''}
              <div className="SubTitle">
                <span> 구분 </span>
              </div>
                <div className="SubContent">
                  {specialType}
                </div>
              <div className="SubTitle">
                <span> 본인 평가 </span>
              </div>
              <div className="SubContent">
                {selfEvaluationAbility}
              </div>  
              <div className="SubTitle">
                <span> 상세 내용 </span>
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

export default SpecialInfo;