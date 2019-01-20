import React, { Component } from 'react'
import { AnswerBody, Table, Modal, InfoDetail } from '../../components'

const data = [
  {
    basic_info: { // 기본 신상 정보에 대한 객체
      name: "동수", // 지원자의 이름
      english_name: "dongsu ", // 지원자의 영문 이름
      is_male: "man", // 남 or 녀
      birth_date: "2018-01-01", // 생년월일
      phone_number: "11111", // 연락처
      email: "30032ongsu@gmail.com", // 이메일 주소
      sns: "X", // SNS 주소
      address: "성남" // 거주지
    },
  // academic_career: { // 최종 학력
  //   name: "string", // 학교명
  //   location: "string", // 소재지
  //   type: "int32 (0: 고등학교, 1: 대학교, 2: 대학원)", // 학교의 종류
  //   major: "string or int32", // 전공
  //   entrance_date: "date (optional)", // 입학년도
  //   graduation_date: "date (optional)" // 졸업년도
  // },
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
  ],
  apply_info: { // 지원 관련 정보
    department: "경영지원본부", // 부서
    secondary_department: "IT", // 2지망
    team: "재무팀", // 팀, 팀이 있는 부서에만 값이 부여됨
    secondary_team: "", // 2지망 부서 중 팀이 있는 경우에만 부여됨
    can_moved: "true", // 타 본부, 타 사업 이동 가능여부
    can_multiple_interview: "false", // 여러 부서에 면접을 볼 수 있는지 가능여부
    questions: [ // Array (document) // 질답 목록
      {
        q_id: "objectid", // question document의 id
        answer: "string" // 그 질문에 대한 답
      }
    ],
    portfolios: [ // 포트폴리오 정보
      {
        file_path: "string" // 포트폴리오 파일 경로
      }
    ],
    interview_time: "Array(int32) (0: 14시~15시, 1: ...)" // 인터뷰 가능 시간
  }
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
            <InfoDetail
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