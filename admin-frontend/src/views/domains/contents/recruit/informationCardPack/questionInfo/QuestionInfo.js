import React from 'react';
import moment from 'moment';
import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/BusinessCenter';

// import '../InfoDetail.scss';
import InformationCard from 'views/contexts/modal/card';

const ExternalInfo = ({data}) => {
  return (
    <InformationCard
      title={(
        <span className="Title">
          <BusinessIcon className="Icon" /> 질문 사항
        </span>)}
      content={
        data.map(({department, team, question, content, portfolios}, index) => {
          return (
            <div key={index} className="Content">
              <div> { department } - ({ team }) </div>
              <div> Q :{ question } </div>
              <div> A :{ content } </div>
              <Divider className="Divider"/>
              <div>
                { portfolios.file_path ? <a href={portfolios.file_path}> 포트폴리오 </a> : null }
              </div>
                { portfolios.file_path && <Divider className="Divider"/> }
            </div>
          )
        })
      }>
    </InformationCard>
  )
}

export default ExternalInfo;