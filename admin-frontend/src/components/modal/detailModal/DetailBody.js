import React from 'react';
import DetailCell from './DetailCell'
import _ from 'lodash'
import AcademicCareer from './academicCareer/AcademicCareer';

const DetailBody = ({ data }) => {
  if (typeof onClick !== 'function') {

  }

  return (
    <div>
      <div className="DetailBody">
        {
          _.map(data, (value, index) => {
            return (
              <DetailCell
                className="DetailCell"
                colName={index}
                colValue={value}
              />
            )
          })
        }

      </div>
      <AcademicCareer data={data}></AcademicCareer>
    </div>
  )
}

export default DetailBody