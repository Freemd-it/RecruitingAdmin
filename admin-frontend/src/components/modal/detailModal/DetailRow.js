import React from 'react';
import DetailCell from './DetailCell'

const DetailRow = ({data, onClick = () => {}}) => {
  return (
    <div>
      {
        data.map((item, index) => {
          let row = null;  
          row = row + <DetailCell item={item} />
          if(index % 2 === 1) {
            return row
          }
        })
      }
    </div>
  )
}

export default DetailRow