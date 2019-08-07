import { List, Map } from "immutable";
import { getRecentRecruitMeta, postRecruitMeta } from 'lib/api/recruitmeta';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import AnnounceDate from "../components/announceDate/announceDate";
import Batch from '../components/batch/batch';
import Departments from "../components/departments/departments";
import DepartmentTitle from "../components/departmentTitle/departmentTitle";
import InterviewTimes from '../components/interviewTimes/interviewTimes';
import StartEndDate from "../components/startEndDate/startEndDate";
import { InitialDepartment, InitialDepartmentsList, InitialInterviewTime, InitialInterviewTimeList, InitialTeam } from "../data";
import "./RegisterRecruit.scss";


class RegisterRecruitContainer extends Component {
  // Todo: initialState를 디비에서 읽어와서 가져오는 방식으로 변경해주어야 한다. 지금은 디비 저장 정보가 없으므로 하드 코딩
  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        batch: '21',
        period: Map({
          startDate: new Date(),
          endDate: new Date(),
        }),
        announceDate: new Date(),
        recruitStatus: 1000,
        medicalFeilds: List(["무료진료소", "보건교육", "해외의료"]),
        departments: InitialDepartmentsList,
        interviewTimes: InitialInterviewTimeList
      }),
      redirect: false
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  componentDidMount() {
    console.log('did mount');
    getRecentRecruitMeta(this);
  }

  handleBatchChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;  
    this.setState({
      data: data.set('batch', value)
    });
  }
 
  handleStartDateChange = (date) => {
    const { data } = this.state;
    this.setState({
      data: data.setIn(['period', 'startDate'], date)
    });
  }

  handleEndDateChange = (date) => {
    const { data } = this.state;
    this.setState({
      data: data.setIn(['period', 'endDate'], date)
    });
  }

  handleAnnounceDateChange = (date) => {
    const { data } = this.state;
    this.setState({
      data: data.set('announceDate', date)
    });
  }

  

  handleDepartmentAddClick = () => {
    const { data } = this.state;
    this.setState({
      data: data.update('departments', departments => departments.push(InitialDepartment))
    });
  }

  handleDeleteDepartmentClick = (e, index) => {
    const { data } = this.state;
    this.setState({
      data: data.update('departments', departments => departments.delete(index))
    });
  }

  handleTeamAdd = (e, index) => {
    const { data } = this.state;
    const teams = data.getIn(['departments', index, 'teams']);
    const modifiedTeams = teams.push(InitialTeam);
    this.setState({
      data: data.setIn(['departments', index, 'teams'], modifiedTeams)
    });
  }

  handleDepartmentDescriptionChange = (e, index) => {
    const { data } = this.state;  
    const { value } = e.target.value;
    this.setState({
      data: data.setIn(['departments', index, 'departmentDescription'], value)
    });
  }

  handleDepartmentNameChange = (e, index) => {
    const { data } = this.state;  
    const { value } = e.target.value;
    this.setState({
      data: data.setIn(['departments', index, 'departmentName'], value)
    });
  }

  handleDeleteTeamClick = (e, departmentIndex, teamIndex) => {
    const { data } = this.state;
    const teams = data.getIn(['departments', departmentIndex, 'teams']);
    const modifiedTeams = teams.delete(teamIndex);
    this.setState({
      data: data.setIn(['departments', departmentIndex, 'teams'], modifiedTeams)
    });
  }

  handleChangeTeamName = (e, departmentIndex, teamIndex) => {
    const { data } = this.state;
    const { value } = e.target.value;
    const teams = data.getIn(['departments', departmentIndex, 'teams']);
    const modifiedTeams = teams.setIn([teamIndex, 'teamName'], value);
    this.setState({
      data: data.setIn(['departments', departmentIndex, 'teams'], modifiedTeams)
    });
  }

  handleDeleteDepartmentClick = (e, index) => {
    const { data } = this.state;
    this.setState({
      data: data.update('departments', departments => departments.delete(index))
    });
  }

  handleTeamMedicalOptionClick = (e, departmentIndex, teamIndex, medicalOption) => {
    const { data } = this.state;
    const orgMedicalOptions = data.getIn(['departments', departmentIndex, 'teams', teamIndex, 'medicalFieldOptions']);
    // 이미 선택되어 있는 사업이면 삭제를, 선택 안된 옵션이면 추가를 해준다.
    let modifiedMedicalOptions = List();
    if (orgMedicalOptions.toJS().includes(medicalOption)) {
      modifiedMedicalOptions = orgMedicalOptions.filter(item => item !== medicalOption);
    }
    else {
      modifiedMedicalOptions = orgMedicalOptions.push(medicalOption);
    }
    this.setState({
      data: data.setIn(['departments', departmentIndex, 'teams', teamIndex, 'medicalFieldOptions'], modifiedMedicalOptions)
    });
  }

  handleProjectAdd = (e) => {
    const { data } = this.state;
    this.setState({
      data: data.update('medicalFeilds', medicalFeilds => medicalFeilds.push("사업 명을 입력해주세요"))
    });
  }

  handleProjectDelete = (e, index) => {
    const { data } = this.state;
    this.setState({
      data: data.update('medicalFeilds', medicalFeilds => medicalFeilds.delete(index))
    });
  }

  handleInterviewTimeAdd = (e) => {
    const { data } = this.state;
    const interviewTimes = data.get('interviewTimes').push(InitialInterviewTime);
    this.setState({
      data: data.set('interviewTimes', interviewTimes)
    });
  }

  handleInterviewTimeDelete = (e, index) => {
    const { data } = this.state;
    const interviewTimes = data.get('interviewTimes').delete(index);
    this.setState({
      data: data.set('interviewTimes', interviewTimes)
    });
  }

  handleInterviewDateChange = (date, index) => {
    const { data } = this.state;  
    this.setState({
      data: data.setIn(['interviewTimes', index, 'date'], date)
    });
  }

  handleInterviewTimeChange = (value, index) => {
    const { data } = this.state;
    this.setState({
      data: data.setIn(['interviewTimes', index, 'time'], value)
    });
  }

  handleSubmit = (e) => {
    console.log("submit!");
    postRecruitMeta(this.state.data.toJS(), this);
  }

  render() {
    document.body.style.overflow = "";
    console.log(this.state.data.toJS());
    if (this.state.redirect) {
      return <Redirect to="/recruitmeta"></Redirect>
    }

    return (
      <div className="register_container">
        <h2 className='title'>리크루팅 일정 등록</h2>
        <Batch batch={this.state.data.get('batch')} handleBatchChange={this.handleBatchChange}/>
        
        <StartEndDate
          period= {this.state.data.get('period')}
          handleStartDateChange={this.handleStartDateChange}
          handleEndDateChange={this.handleEndDateChange}/>
        
        <AnnounceDate 
          announceDate={this.state.data.get('announceDate')}
          handleAnnounceDateChange={this.handleAnnounceDateChange}
        />

        <DepartmentTitle handleDepartmentAddClick={this.handleDepartmentAddClick}/>
        
        <Departments 
          data={this.state.data}
          handleDeleteDepartmentClick={this.handleDeleteDepartmentClick}
          handleAddTeamClick={this.handleTeamAdd}
          handleDepartmentDescriptionChange={this.handleDepartmentDescriptionChange} 
          handleDepartmentNameChange={this.handleDepartmentNameChange}
          handleDeleteTeamClick={this.handleDeleteTeamClick}
          handleChangeTeamName={this.handleChangeTeamName}
          handleTeamMedicalOptionClick={this.handleTeamMedicalOptionClick}/>

       <InterviewTimes 
          interviewTimes={this.state.data.get('interviewTimes')}
          handleInterviewDateChange={this.handleInterviewDateChange}
          handleInterviewTimeChange={this.handleInterviewTimeChange}
          handleInterviewTimeAdd={this.handleInterviewTimeAdd}
          handleInterviewTimeDelete={this.handleInterviewTimeDelete}
       />

       <Button color="success" size="lg" onClick={this.handleSubmit}> 제출하기 </Button>
        
      </div>
    );
  }
}

export default RegisterRecruitContainer;
