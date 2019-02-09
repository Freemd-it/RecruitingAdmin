import React from 'react';
import { Divider } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/BusinessCenter';
import organization from 'lib/service/organization'
import searchTeam from 'lib/sreachTeam'
import InformationCard from 'views/contexts/modal/card';
import _ from 'lodash'

const QuestionInfo = ({data}) => {
  return (
    <InformationCard
      title={(
        <span className="Title">
          <BusinessIcon className="Icon" />질문 사항
        </span>)}
      content={
        data.map(({ department, team, question, content, portfolios, select }, index) => {
          return (
            <div key={index} className="Content">
              <div className="Head-3"> { organization[department].name} - {searchTeam(department, team)} </div>
              <div className="SubContent"> Q. : { question ? question : '' } </div>
              <div className="SubContent"> A. : { content ? content : '' } </div>
              <Divider className="Divider"/>
                <div className="SubContent">
                {
                  select && _.map(select, (v, k) => {
                    return(
                      <div>
                        <span> {k} : </span> <span> {v}점 </span>
                      </div>
                    )
                  })
                }
                </div>
              <Divider className="Divider"/>
              <div>
                { portfolios && _.map(portfolios, (v, i) => {
                  return <a href={portfolios.file_path}> 포트폴리오 </a>
                })}
              </div>
            </div>
          )
        })
      }>
    </InformationCard>
  )
}

export default QuestionInfo;