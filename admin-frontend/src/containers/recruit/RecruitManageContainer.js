import React, { Component } from 'react'
import { AnswerBody, Table, Modal, DetailBody } from '../../components'
const data = [{
  name: '이동수',
  english_name: 'dongsu',
  is_male: '남',
  birth_date: '1991-12-09',
  phone_number: '010-1111-1111',
  email: '30032dongsu@moducampus.com',
  sns: 'hihih',
  address: '성남',
  department: 'IT',
  secondary_department: '브본',
  team: '우리팀',
  question: '안녕하세요',
  cardinality: '11',
  writer: '이필주',
  create: '2019-01-01',
  is_question: true,
  school_name: '프리메드',
  school_degree: '고등학교',
  school_type: '인문계',
  school_location: '서울',
  entrance_date: new Date(2017, 3),
  graduate_date: null,
  external_activities: [
    {
      type: '인턴',
      organizer: '분당 서울병원',
      start_date: new Date(2016, 8),
      end_date: new Date(2017, 2),
      time: 50,
      content: '분당병원에서 접수 및 진료 프로세스를 관찰하고 비효율 혹은 병목이 일어나는 점을 분석하는 프로젝트를 맡았습니다.' +
        '팀 별로 개선 시나리오를 3가지 정도 만들어서 발표를 진행했고 이유 없이 반복되는 작업을 줄려서 효율성을 높이는 일을 하였습니다.'
    },
    {
      type: '인턴',
      organizer: '분당 서울병원',
      start_date: new Date(2016, 8),
      end_date: new Date(2017, 2),
      time: 50,
      content: '분당병원에서 접수 및 진료 프로세스를 관찰하고 비효율 혹은 병목이 일어나는 점을 분석하는 프로젝트를 맡았습니다.' +
        '팀 별로 개선 시나리오를 3가지 정도 만들어서 발표를 진행했고 이유 없이 반복되는 작업을 줄려서 효율성을 높이는 일을 하였습니다.'
    }
  ]
}]

class RecruitManageContainer extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    isDetailModal: false,
    isAnswerModal: false,
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

  onDetailClick = value => {
    this.onDetailModal(value);
  }

  onAnswerClick = value => {
    this.onAnswerModal(value);
  }

  onDetailModal = value => {
    this.setState(prevState => {
      const data = {
        isDetailModal: !prevState.isDetailModal
      }
      if (!prevState.isDetailModal && value) {
        data.value = (
            <DetailBody
              data={value}
            />
        )
      } else {
        data.value = '';
      }
      return data;
    });
  }
  onAnswerModal = value => {
    this.setState(prevState => {
      const data = {
        isAnswerModal: !prevState.isAnswerModal
      }
      if (!prevState.isAnswerModal && value) {
        data.value = (
            <AnswerBody
              data={value}
            />
        )
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
            onClick={this.onDetailClick}
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
            onClick={this.onAnswerClick}
          />
        }
         <Modal
          title={'상세정보'}
          contents={this.state.value}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />

         <Modal
          title={"답변"}
          contents={this.state.value}
          open={this.state.isAnswerModal}
          onModal={this.onAnswerModal}
        />
      </div>
    )
  }
}

export default RecruitManageContainer