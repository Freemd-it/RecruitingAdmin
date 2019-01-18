import React, { Component } from 'react'
import { Table } from '../../components'
const user = [{
  department: 'IT',
  team: 'IT팀',
  secondary_department: '무진',
  secondary_team: '무진팀',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: true, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}, {
  department: 'IT',
  team: '',
  secondary_department: '무진',
  secondary_team: '',
  name: 'dongsu',
  phone_number: '0690',
  isDuplicatedInterview: false, // 이중면접
  time: 0
}];

class InterviewManageContainer extends Component {
  
  state = {
    rows: [], 
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
  };

  componentDidMount() {
    this.setState({
    });
  }

  render() {
    const { page, rows, rowsPerPage} = this.state
    return (
      <Table
        title={'면접시간 관리'}
        columns={this.props.columns}
        data={user}
        totalLength={1000}
      />
    )
  }
}

export default InterviewManageContainer