import React from 'react';
import { TitleAndMoveButton } from '../common';
import "./recruitmetas.scss";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Recruitmetas = ({recruitMetas, handleRecruitMetaDelete}) => {
  return (
    <div className="recruitmetas_container">
      <TitleAndMoveButton title="리크루팅 목록" moveTo='/recruitmeta/write' moveText='신규 리크루팅 등록' />
      { recruitMetas.map((recruitMeta, index) => {
        return (
          <Recruitmeta
            recruitMeta={recruitMeta}
            handleRecruitMetaDelete={handleRecruitMetaDelete}
            index={index}
            key={index}
          />
        )
      })}
    </div> 
  );
};

const Recruitmeta = ({recruitMeta, index}) => {
  return (
    <div className='recruitmeta_container'>
      <span>기수: {recruitMeta.get('batch')}</span>
      <span>모집 시작일: {recruitMeta.get('period').get('startDate').substring(0,10)}</span>
      <span>모집 마감일: {recruitMeta.get('period').get('endDate').substring(0,10)}</span>
      <Link to={'/recruitmeta/write/'+recruitMeta.get('batch')}><Button size='sm' color='info'>수정</Button></Link>  
    </div>
  );
};

export default Recruitmetas;
