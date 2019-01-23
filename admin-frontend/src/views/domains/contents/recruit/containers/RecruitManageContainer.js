import React, { Component } from 'react'
import Table from '../../../../contexts/table'
import Modal from '../../../../contexts/modal'
import InfoDetail from '../../../../../views/contexts/modal/information/informationCardPack';

const data = [
  {
    basic_info: {
      name: '이동수',
      english_name: 'dongsu',
      is_male: '남',
      birth_date: new Date(1991, 10, 19),
      phone_number: '010-1111-1111',
      email: '30032dongsu@moducampus.com',
      sns: 'hihih',
      address: '성남',
      department: 'IT',
      secondary_department: '브본',
      team: '우리팀',
      secondary_team: '홍보기획팀',
      question: '안녕하세요?',
      cardinality: '11',
      writer: '이필주',
      create: '2019-01-01',
      is_question: true
  },
    academic_info: {
      school_name: '프리메드',
      school_degree: '고등학교',
      school_type: '인문계',
      school_location: '서울',
      entrance_date: new Date(2017, 3),
      graduate_date: null,
  },
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
    ability_info: [
      {
        type: '공인영어',
        title: 'OPIC',
        grade: 0,
        content: 'OPIC IH 받았습니다 ㅎㅎ'
      },
      {
        type: '자격증',
        title: '컴퓨터활용능력 1급',
        date: new Date(2018, 3),
        content: ''
      },
      {
        type: '어학능력',
        title: '중국어',
        grade: 2,
        content: 'HSK 5급 땄습니다.'
      },
      {
        type: '기타내역',
        title: '코딩 능력',
        content: '네이버 개발자입니다.'
      }
    ],
    apply_info: { // 지원 관련 정보
      qnas: [ // Array (document) // 질답 목록
        {
          type: '공통 질문',
          data: [
            {
              question: '프리메드가 추구하는 가장 큰 가치가 뭐라고 생각하십니까?',
              answer: '안녕 내 사람 그대여~ 이젠 내가 지켜 줄게요~~~~ 못난 날 믿고 참고 기다려줘서 고마워요.'
            }
          ] 
        },
        {
          type: '본부별 질문',
          data: [
            {
              question: '경영지원본부에 어떤 일로 지원하게 되었습니까?',
              answer: '인사 조직 쪽에 관심이 있어서 지원하였습니다.'
            }
          ] 
        },
      ],
      portfolios: [ // 포트폴리오 정보
        {
          file_path: "portfolio.zip" // 포트폴리오 파일 경로
        }
      ],
      interview_times: [
        {
          date: new Date(2019, 2, 23),
          time: ['12:00 ~ 14:00', '14:00 ~ 16:00']
        },
        {
          date: new Date(2019, 2, 24),
          time: ['14:00 ~ 16:00']
        }
      ],
      can_moved: true, // 타 본부, 타 사업 이동 가능여부
      can_multiple_interview: false, // 여러 부서에 면접을 볼 수 있는지 가능여부
    }
}]

class RecruitManageContainer extends Component {
  state = {
    rows: [],
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

  onDetailClick = value => {
    this.onDetailModal(value);
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

  render() {
    const { match } = this.props
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
            cursor
          />
        }
        <Modal
          title={'지원서'}
          contents={this.state.value}
          footer={this.state.footer}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
          modalType={'recruit'}
        />
      </div>
    )
  }
}

export default RecruitManageContainer