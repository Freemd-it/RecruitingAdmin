import React from 'react';
import DetailCell from './DetailCell'
import _ from 'lodash'
import AcademicCareerCell from './AcademicCareerCell';
import { Card, Typography, CardContent, Divider } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/SupervisorAccount';

import './DetailBody.scss';
import ExternalActivityCell from './ExternalActivityCell';

const DetailBody = ({ data }) => {
  if (typeof onClick !== 'function') {

  }

  return (
    <div className="Scrollable">
      <Card>
        <CardContent>
          <Typography gutterBottom className='Title'>
            <AccountIcon className='Icon' /> 기본 정보
          </Typography>
          <Divider className="Divider" />
          <div className="DetailBody">
            {
              _.map(data, (value, index) => {
                return (
                  <DetailCell
                    key={index.toString()}
                    className="DetailCell"
                    colName={index}
                    colValue={value}
                  />
                )
              })
            }

          </div>
        </CardContent>
      </Card>
      <AcademicCareerCell data={data} />
      <ExternalActivityCell data={data.external_activities} />
    </div>
  )
}

export default DetailBody