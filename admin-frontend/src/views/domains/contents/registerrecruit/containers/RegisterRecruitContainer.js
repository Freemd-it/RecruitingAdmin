import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import departmentData from "./departments.json";

// {
//   "departmentName" : "경영지원본부",
//   "departmentDescription" : "경지본에 대한 설명입니다.",
//   "departmentImageUrl" : "s3 URL이 들어가지 않을까요",
//   "teams" : [
//     {
//       "teamName" : "인사팀",
//       "medicalFieldOptions" : ["무료진료", "보건교육"]
//     },
//     {
//       "teamName" : "IT기획팀",
//       "medicalFieldOptions" : ["무료진료"]
//     }
//   ]
// }
class RegisterRecruitContainer extends Component {
  // state = {
  //   batch: '',
  //   period: {
  //     startDate: '',
  //     endDatae: '',
  //   },
  //   announceDate: '',
  //   recruitStatus: 1000,
  //   medicalFeilds: ["무료진료", "보건교육", "해외의료"],
  //   departments: [],
  //   interviewTimes: []
  // };
  // Todo: initialState를 디비에서 읽어와서 가져오는 방식으로 변경해주어야 한다. 지금은 디비 저장 정보가 없으므로 하드 코딩
  constructor(props) {
    console.log(departmentData.departments);
    super(props);
    this.state = {
      period: {
        startDate: new Date(),
        endDate: new Date(),
      },
      announceDate: new Date(),
      batch: '21',
      recruitStatus: 1000,
      medicalFeilds: ["무료진료소", "보건교육", "해외의료"],
      department: departmentData.department
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange = (date) => {
    this.setState({
      period: {
        startDate: date,
        endDate: this.state.period.endDate,
      }
    });
  }

  handleEndDateChange = (date) => {
    this.setState({
      period: {
        startDate: this.state.period.startDate,
        endDate: date,
      }
    });
  }

  handleAnnounceDateChange = (date) => {
    this.setState({
      announceDate: date
    });
  }

  handleBatchChange = (e) => {
    this.setState({
      batch: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>리크루팅 일정 등록</h1>
          <div>
            <h3>모집 기수</h3>
            <input type="text" 
              value={this.state.batch}
              onChange={this.handleBatchChange}/>
          </div>
          <div>
            <h3>리크루팅 시작 날짜</h3>
            <DatePicker
              selected={this.state.period.startDate}
              onChange={this.handleStartDateChange}
            />
            <h3>리크루팅 종료 날짜</h3>
            <DatePicker
              selected={this.state.period.endDate}
              onChange={this.handleEndDateChange}
            />
          </div>
          <div>
            <h3>서류 전형 발표 날짜</h3>
            <DatePicker
              selected={this.state.announceDate}
              onChange={this.handleAnnounceDateChange}
            />
          </div>
          <div>
            <h3>본부, 팀 구조</h3>
            

          </div>
          
      </div>
    );
  }
}

export default RegisterRecruitContainer;
