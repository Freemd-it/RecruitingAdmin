import React from 'react';
import "./batch.scss";

const batch = ({batch, handleBatchChange}) => {
  return (
    <div className='batch_container'>
      <h4>모집 기수</h4>
      <input
        className='batch_input'
        type="text" 
        value={batch}
        onChange={handleBatchChange}/>
    </div>
  );
};

export default batch;
