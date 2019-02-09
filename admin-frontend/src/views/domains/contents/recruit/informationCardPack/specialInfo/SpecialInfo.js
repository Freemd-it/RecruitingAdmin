import React from 'react';
import moment from 'moment';
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
          const { content, self_evaluation_ability, special_type } = elem;
          return (
            <div key={index} className="Content">
              {index != 0 ? (<Divider className="Divider" />) : ''}
              <div className="SubTitle">
                <span> 구분 </span>
              </div>
                <div className="SubContent">
                  {special_type}
                </div>
              <div className="SubTitle">
                <span> 본인 평가 </span>
              </div>
              <div className="SubContent">
                {self_evaluation_ability}
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