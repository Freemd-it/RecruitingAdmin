import React, { Component } from 'react'
import QuestionTable from '../questionTable/QuestionTable'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';
import * as axios from 'lib/api/question'
import './QuestionManageContainer.scss';

const mocData =  [
  {
      "registedDate": "2019-01-25T21:35:10.479Z",
      "_id": "5c4b82396b23e2bdbf3747ac",
      "classify": 101,
      "department": "",
      "team": "",
      "batch": 20,
      "register": "대표",
      "question": 'asedfasefaesfasef',
      "used": false,
      "__v": 0
  },
  {
      "registedDate": "2019-01-25T21:35:10.479Z",
      "_id": "5c4b82626b23e2bdbf3747ad",
      "classify": 102,
      "department": "it",
      "team": "",
      "batch": 20,
      "register": "대표",
      "question": 'asedfasefaesfasef',
      "used": false,
      "__v": 0
  },
  {
      "registedDate": "2019-01-25T21:35:10.479Z",
      "_id": "5c4b82776b23e2bdbf3747ae",
      "classify": 103,
      "department": "it",
      "team": "emr",
      "batch": 20,
      "register": "대표",
      "used": true,
      "__v": 0,
      "question": "이거슨 수정후의 질문"
  }
]

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    isAddModal: false,
    isDetailModal: false,
    registData: {
      department: 'IT',
      team: '',
      question: '',
      useQuestion: false,
    }
  };

  _getData = async () => {
    const chartData = await this._callApi()
    this.setState({
     chartData,
   })
  }

  _callApi = () => {
    return axios.getQuestionList()
      .then(res => {
        console.log(res)
      })
      .catch(err => err)
  }

  componentDidMount() {
    this.setState({ 
      rows: mocData,
    });
  }

  onDetailClick = value => {
    this.onDetailModal(value);
  }

  onAddModal = () => {
    this.setState(prevState => {
      const data = {
        isAddModal: !prevState.isAddModal
      }
      return data;
    });
  }

  onDetailModal = value => {
    this.setState(prevState => {
      const data = {
        isDetailModal: !prevState.isDetailModal,
        registData: { ...prevState.registData }
      }
      if (!prevState.isDetailModal && value) {
        data.used = value.used;
        data.registData.team = value.team;
        data.registData.question = value.question;
      } else {
        data.registData.useQuestion = '';
        data.registData.team = '';
        data.registData.question = '';
      }
      return data;
    });
  }

  onRegistData = (e) => {
    const name = e.target.name;
    const value = name !== 'useQuestion' ? e.target.value : e.target.value === 'true';
    this.setState(prevState => {
      const registData = { ...prevState.registData };
      registData[name] = value;
      return { registData };
    });
  }

  render() {
    const questionAddBtn = (
      <Button 
        className={`btn QuestionRegisContainer__addBtn`}
        color="secondary"
        outline
        size={`sm`}
        onClick={this.onAddModal}> 질문 추가하기
      </Button>
    )

    const questionDetail = (
      <QuestionDetail
        registData={this.state.registData}
        onRegistData={this.onRegistData}
      />
    )

    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          type={'question'}
          title={'본부 질문 관리'}
          questionAddBtn={questionAddBtn}
          rows={this.state.rows}
          onDetailClick={this.onDetailClick}
        />
        <Modal
          title={'본부질문 수정하기'}
          contents={questionDetail}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />
        <Modal
          title={'본부질문 추가하기'}
          contents={questionDetail}
          open={this.state.isAddModal}
          onModal={this.onAddModal}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer