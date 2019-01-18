import React, { Component } from 'react'
import { Table } from '../../components'
const data = [{
  department: 'IT',
  team: 'IT팀',
  secondary_department: '무진',
  secondary_team: '무진팀',
  name: 'dongsu',
  phone_number: '0690',
  can_multiple_interview: true, // 이중면접
  firstTime: true,
  secondTime: false,
  thirdTime: false,
  fourthTime: false,
}];

class InterviewManageContainer extends Component {
  
  state = {
    rows: [], 
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
  };

  componentDidMount() {
    this.setState({
      rows: data
    });
  }

  render() {
    const { page, rows, rowsPerPage} = this.state
    return (
      <Table
        title={'면접시간 관리'}
        columns={this.props.columns}
        data={this.state.rows}
        totalLength={1000}
      />
    )
  }
}

export default InterviewManageContainer