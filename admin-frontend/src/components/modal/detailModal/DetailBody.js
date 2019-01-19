import React from 'react';
import DetailCell from './DetailCell'
import _ from 'lodash'

const DetailBody = ({data}) => {
  if( typeof onClick !== 'function') {

  }
  return (
    <div className="DetailBody">
      { 
        _.map(data, (value, index) => {
          return (<DetailCell
            className="DetailCell"
            colName={index}
            colValue={value}
          />)
        })
      }
    </div>
  )
}

export default DetailBody