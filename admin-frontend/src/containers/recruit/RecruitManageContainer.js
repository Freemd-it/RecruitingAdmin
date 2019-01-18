import React, { Component } from 'react'
import { Table} from '../../components'

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

class RecruitManageContainer extends Component {
  state = {
    rows: [user].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 10,
  };

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  render() {
    const { match } = this.props
    const { page, rows, rowsPerPage} = this.state
    return (
      <div>
        {
          match.params.type === 'info' &&
          <Table
            type={match.params.type}
            title={'개인정보 관리'}
            columns={this.props.columns['information']}
            data={user}
            totalLength={1000}
          />
        }
        {
          match.params.type === 'answers' &&
          <Table
            type={match.params.type}
            title={'질문답변 관리'}
            columns={this.props.columns['answer']}
            data={user}
            totalLength={1000}
        />
        }
      </div>
    )
  }
}

export default RecruitManageContainer