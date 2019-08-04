import React from 'react';
import { Button } from 'reactstrap';
import "./interviewTimes.scss";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const InterviewTimes = ({interviewTimes}) => {
  return (
    <div>
      <div className="department_title_container">
        <div className="title_container"><h3>인터뷰 진행 시간</h3></div>
        <div className="button_container">
          <Button color="primary">인터뷰 시간대 추가</Button>
        </div>
      </div>

      { interviewTimes.map((intervieTime, index) => {
        console.log(intervieTime.toJS());
      return (
        <div className="department_title_container">
        <div className="title_container">
          <DatePicker
          className='datepicker'
          dateFormat="yyyy-MM-dd"
          selected={intervieTime.get('date')}
          >
          </DatePicker>
          
        </div>
        <div className="button_container">
          <Button color="danger" size="sm">사업 삭제</Button>
        </div>
      </div>
      );}
      )}
    </div>
  );
};

export default InterviewTimes;
