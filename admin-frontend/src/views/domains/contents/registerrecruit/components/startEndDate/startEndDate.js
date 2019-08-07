import React from 'react';
import DatePicker from 'react-datepicker';
import './startEndDate.scss';
import "react-datepicker/dist/react-datepicker.css";


const startEndDate = ({period, handleStartDateChange, handleEndDateChange}) => {
  return (
    <div className='start_end_container'>
      <div className='date_container'>
        <h4>시작일</h4>
        <DatePicker 
          className='datepicker'
          dateFormat="yyyy-MM-dd"
          selected={new Date(period.get('startDate'))}
          onChange={handleStartDateChange}
        />
      </div>
      <div className='date_container'>
        <h4>종료일</h4>
        <DatePicker 
          className='datepicker'
          dateFormat="yyyy-MM-dd"
          selected={new Date(period.get('endDate'))}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

export default startEndDate;
