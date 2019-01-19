import React, { Component } from 'react'
import { Table, Modal } from '../../components'

const data = [{
  name: '이동수',
  is_male: '남',
  birth_date: '1991-12-09',
  email: '30032dongsu@moducampus.com',
  sns: 'hihih',
  address: '성남',
  department: 'IT',
  team: '우리팀',
  question: '안녕하세요?',
  cardinality: '11',
  writer: '이필주',
  create: '2019-01-01',
  is_question: true,
}]

class RecruitManageContainer extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    isDetailModal: false,
  };

  componentDidMount() {
    this.setState({
      rows: data
    });
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  onClick = value => {
    this.onDetailModal(value);
  }

  onDetailModal = value => {
    this.setState(prevState => {
      const data = {
        isDetailModal: !prevState.isDetailModal
      }
      if (!prevState.isDetailModal) {
        data.value = value
      } else {
        data.value = '';
      }
      return data;
    });
  }

  render() {
    const { match } = this.props
    // const { page, rows, rowsPerPage} = this.state
    return (
      <div>
        {
          match.params.type === 'info' &&
          <Table
            type={match.params.type}
            title={'개인정보 관리'}
            columns={this.props.columns['information']}
            data={this.state.rows}
            totalLength={1000}
            onClick={this.onClick}
          />
        }
        {
          match.params.type === 'answers' &&
          <Table
            type={match.params.type}
            title={'질문답변 관리'}
            columns={this.props.columns['answer']}
            data={this.state.rows}
            totalLength={1000}
            onClick={this.onClick}
          />
        }
         <Modal
          title={"detailModal"}
          contents={this.state.modalValue}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />
      </div>
    )
  }
}

export default RecruitManageContainer