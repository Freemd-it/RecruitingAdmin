import React from 'react';
import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import InformationCard from 'views/contexts/modal/card';

const QuestionInfo = ({data}) => {
  const content = data.map((item, index) => {
    const {
      departmentName, 
      teamName, 
      question, 
      text, 
      file, 
    } = item;
    let answerData = text;
    if (file) {
      answerData = <>포트폴리오 : <a href={file.url}>{file.oriName || '다운받기'}</a></>;
    }
    return (
      <div key={index} className="Content">
        <div className="Head-3"> {departmentName} - {teamName} </div>
        <div className="SubContent"> Q. : { question ? question : '' } </div>
        <div className="SubContent"> A. : { answerData } </div>
        {/*
          select && _.map(select, (v, k) => {
            return(
              <div className="SubContent">
                <span> {k} : </span> <span> {v}점 </span>
              </div>
            )
          })
        */}
      <Divider className="Divider"/>  
      </div>
    )
  });
  return (
    <InformationCard
      title={(
        <span className="Title">
          <BusinessIcon className="Icon" />질문 사항
        </span>)}
      content={content}>
    </InformationCard>
  )
}

export default QuestionInfo;
