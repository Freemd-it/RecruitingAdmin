import React from 'react';
import AcademicInfo from 'views/domains/contents/recruit/informationCardPack/academicInfo';
import ExternalInfo from 'views/domains/contents/recruit/informationCardPack/externalInfo';
import BasicInfo from 'views/domains/contents/recruit/informationCardPack/basicInfo';
import ApplyInfo from 'views/domains/contents/recruit/informationCardPack/applyInfo';
import AbilityInfo from 'views/domains/contents/recruit/informationCardPack/abilityInfo';

import './InformationCardPack.scss'
import _ from 'lodash'


const InfoDetail = ({ classes, data }) => {
  return (
    <div className="InfoDetail">
      {
        _.map(data, (value, key) => {
          switch (key) {
            case 'external_activities':
              return (
                <ExternalInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'apply_info':
              return (
                <ApplyInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'basic_info':
              return (
                <BasicInfo 
                key={`${key}__DetailBody`}
                data={value} />
              );
            case 'academic_info':
              return (
                <AcademicInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              );
            case 'ability_info':
              return (
                <AbilityInfo
                  key={`${key}__DetailBody`}
                  data={value}
                />
              )
            default:
              return '';
          }
        })
      }
    </div>
  )
}

export default InfoDetail;