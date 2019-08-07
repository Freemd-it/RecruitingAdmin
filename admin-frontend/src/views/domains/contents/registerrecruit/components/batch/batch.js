import React from 'react';
import "./batch.scss";

const batch = ({batch, handleBatchChange}) => {
  return (
    <div className='batch_container'>
      <h4>모집 기수</h4>
      {batch ? 
      <p>{batch}</p> : 
      <input className='batch_input' type="text" value={batch} defaultValue='20' onChange={handleBatchChange}/>
      }
    </div>
  );
};

export default batch;
