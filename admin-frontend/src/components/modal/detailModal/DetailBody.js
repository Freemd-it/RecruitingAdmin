import React from 'react';
import DetailCell from './DetailCell'

const DetailBody = ({data, onClick = () => {}}) => {
  if( typeof onClick !== 'function') {

  }
  return (
    <div>
      {
        data.map((value, index) => {
          // <DetailCell
          //   data={data} 
          // />
        })
      }
    </div>
  )
}

export default DetailBody