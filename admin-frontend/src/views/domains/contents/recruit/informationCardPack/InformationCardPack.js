import React from 'react';
import BasicInfo from 'views/domains/contents/recruit/informationCardPack/basicInfo';
import ExternalInfo from 'views/domains/contents/recruit/informationCardPack/externalInfo';
import InterviewInfo from 'views/domains/contents/recruit/informationCardPack/applyInfo';
import QuestionInfo from 'views/domains/contents/recruit/informationCardPack/questionInfo';
import AcademicInfo from 'views/domains/contents/recruit/informationCardPack/academicInfo';
import SpecialInfo from 'views/domains/contents/recruit/informationCardPack/specialInfo';

import './InformationCardPack.scss'

const InfoDetail = ({ classes, selectedRow }) => {
  return (
    <div className="InfoDetail">
      <BasicInfo data={selectedRow.basicInfo || {}} />
      <AcademicInfo data={selectedRow.academicCareer}/>
      <SpecialInfo data={selectedRow.specialInfo}/>
      <ExternalInfo data={selectedRow.externalActivities || []}/>
      <InterviewInfo data={selectedRow.interviewInfo || []}/>
      <QuestionInfo data={selectedRow.questionInfo || []}/>
    </div>
  )
}

export default InfoDetail;
