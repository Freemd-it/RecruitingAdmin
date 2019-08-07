import React from 'react';
import { TitleAndMoveButton } from '../common';
import "./recruitmetas.scss";
import { Button } from 'reactstrap';

const Recruitmetas = ({recruitmetas}) => {
  return (
    <div className="recruitmetas_container">
      <TitleAndMoveButton title="리크루팅 목록" moveTo='/recruitmeta/write' moveText='신규 리크루팅 등록' />
      { recruitmetas.map((recruitmeta, index) => {
        return (
          <Recruitmeta
            recruitmeta={recruitmeta}
            key={index}
          />
        )
      })}
    </div> 
  );
};

const Recruitmeta = ({recruitmeta}) => {
  return (
    <div className='recruitmeta_container'>
      <span>기수: {recruitmeta.batch}</span>
      <span>모집 시작일: {recruitmeta.period.startDate.substring(0,10)}</span>
      <span>모집 마감일: {recruitmeta.period.endDate.substring(0,10)}</span>
      <Button size='sm' color='info'>수정하기</Button>
    </div>
  );
};

export default Recruitmetas;
