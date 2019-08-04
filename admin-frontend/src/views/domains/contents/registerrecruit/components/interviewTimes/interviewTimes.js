import React from 'react';
import { Button } from 'reactstrap';
import "./interviewTimes.scss";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const InterviewTimes = ({interviewTimes, handleInterviewDateChange, handleInterviewTimeChange, handleInterviewTimeAdd, handleInterviewTimeDelete}) => {
  return (
    <div>
      <div className="department_title_container">
        <div className="title_container"><h3>인터뷰 진행 시간</h3></div>
        <div className="button_container">
          <Button color="primary" onClick={handleInterviewTimeAdd}>인터뷰 시간대 추가</Button>
        </div>
      </div>

      { interviewTimes.map((intervieTime, index) => {
        return (
          <InterviewTime
            intervieTime={intervieTime}
            handleInterviewDateChange={handleInterviewDateChange}
            handleInterviewTimeChange={handleInterviewTimeChange}
            handleInterviewTimeDelete={handleInterviewTimeDelete}
            index={index}
            key={index} />
          
        );}
      )}
    </div>
  );
};

const InterviewTime = ({intervieTime, handleInterviewDateChange, handleInterviewTimeChange, handleInterviewTimeDelete, index}) => {
  return (
    <div className="interviewtime_container">
        <div className="title_container">
          <DatePicker
            className='datepicker'
            dateFormat='yyyy-MM-dd'
            selected={intervieTime.get('date')}
            onChange={(date) => handleInterviewDateChange(date, index)}
            >
          </DatePicker>
          <select value={intervieTime.get('time')} onChange={(e) => handleInterviewTimeChange(e, index)}>
            <option value="10:00 ~ 11:00">10:00 ~ 11:00</option>
            <option value="11:00 ~ 12:00">11:00 ~ 12:00</option>
            <option value="12:00 ~ 13:00">12:00 ~ 13:00</option>
            <option value="13:00 ~ 14:00">13:00 ~ 14:00</option>
            <option value="14:00 ~ 15:00">14:00 ~ 15:00</option>
            <option value="15:00 ~ 16:00">15:00 ~ 16:00</option>
            <option value="16:00 ~ 17:00">16:00 ~ 17:00</option>
            <option value="17:00 ~ 18:00">17:00 ~ 18:00</option>
          </select>

        </div>
        <div className="button_container">
          <Button color="danger" size="sm" onClick={(e) => handleInterviewTimeDelete(e, index)}>인터뷰 시간 삭제</Button>
        </div>
      </div>
  );
};

export default InterviewTimes;
