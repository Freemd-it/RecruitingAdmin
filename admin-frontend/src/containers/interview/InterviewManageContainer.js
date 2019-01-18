import React, { Component } from 'react'
import { CustomTable } from '../../components'
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

class QuestionRegistContainer extends Component {
  
  state = {
    rows: [], 
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
  };

  componentDidMount() {
    this.setState({
      rows: data
    });
    /**
     * axios호출로 전체 데이터 갯수
     * axios두번째호출로 
     */
  }

  render() {
    const { page, rows, rowsPerPage} = this.state
    return (
      <CustomTable
        title={'면접시간 관리'}
        columns={this.props.columns}
        data={this.state.rows}
        totalLength={1000}
      />
    )
  }
}

export default QuestionRegistContainer