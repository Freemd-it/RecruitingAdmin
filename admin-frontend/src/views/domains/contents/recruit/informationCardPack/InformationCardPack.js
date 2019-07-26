import React from 'react';
import AcademicInfo from 'views/domains/contents/recruit/informationCardPack/academicInfo';
import ExternalInfo from 'views/domains/contents/recruit/informationCardPack/externalInfo';
import BasicInfo from 'views/domains/contents/recruit/informationCardPack/basicInfo';
import InterviewInfo from 'views/domains/contents/recruit/informationCardPack/applyInfo';
import SpecialInfo from 'views/domains/contents/recruit/informationCardPack/specialInfo';
import QuestionInfo from 'views/domains/contents/recruit/informationCardPack/questionInfo';

import './InformationCardPack.scss'
import _ from 'lodash'


const InfoDetail = ({ classes, selectedRow }) => {
  return (
    <div className="InfoDetail">
      {
        _.map(selectedRow, (value, key) => {
          switch (key) {
            case 'external_activities':
              return (
                <ExternalInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'interview_info':
              return (
                <InterviewInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'question_info':
              return (
                <QuestionInfo 
                  key={`${key}__DetailBody`}
                  data={value} />
              );
            case 'basic_info':
              return (
                <BasicInfo 
                key={`${key}__DetailBody`}
                data={value} />
              );
            case 'academic_career':
              return (
                <AcademicInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'special_info':
              return (
                <SpecialInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              )
            default:
              return null;
          }
        })
      }
    </div>
  )
}

export default InfoDetail;