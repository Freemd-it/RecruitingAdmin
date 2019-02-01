import React, { Component } from 'react'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';

import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'

import * as axios from 'lib/api/question';
import * as testAxios from 'lib/api/test';
import './QuestionManageContainer.scss';

import _ from 'lodash'

const mocData =  [{
    "registedDate": "2019-01-25T21:35:10.479Z",
    "_id": "5c4b82396b23e2bdbf3747ac",
    "classify": 101,
    "department": "",
    "team": "",
    "batch": 20,
    "register": "대표",
    "used": true,
    "__v": 0,
    "question": "질문수정해서들어가라 얍얍얍 22"
},{
    "registedDate": "2019-01-25T21:35:10.479Z",
    "_id": "5c4b82626b23e2bdbf3747ad",
    "classify": 102,
    "department": "it",
    "team": "",
    "batch": 20,
    "register": "대표",
    "used": true,
    "__v": 0,
    "question": "질문수정해서들어가라 2"
},{
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
},{
    "registedDate": "2019-01-27T12:29:20.977Z",
    "_id": "5c4df868755926c9b2ee12eb",
    "classify": 103,
    "department": "it",
    "team": "emr",
    "batch": 20,
    "register": "대표",
    "used": true,
    "question": "질문수정해서들어가라 얍얍얍 22",
    "__v": 0
}]

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    isAddModal: false,
    isDetailModal: false,
    registedData: {
      id: '',
      department: 'IT',
      team: '',
      question: '',
      used: false,
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
    testAxios.postTest().then(res => {
      const { data } = res;
      console.log(data);
    }).catch(e => {
      console.error(e);
    })
    this.setState({ 
      rows: mocData,
    });
  }

  onEditModal = () => {
    this.setState(prevState => {
      const data = {
        isDetailModal: !prevState.isDetailModal,
      }
      return data;
    });
  }

  onAddModal = () => {
    this.setState(prevState => {
      const registedData = {
        department: 'IT',
        team: '',
        question: '',
        used: false
      }
      const data = {
        registedData, 
        isAddModal: !prevState.isAddModal
      }
      return data;
    });
  }

  onClickToShowModal = (index) => {
    const registedData = this.state.rows[index]
    this.setState(prevState => {
      const data = {
        registedData,
        isDetailModal: !prevState.isDetailModal,
      }
      return data
    })
  }

  onRegistedData = (e) => {
    const name = e.target.name;
    const value = (name !== 'used' ? e.target.value : e.target.value === 'true');
    this.setState(prevState => {
      const registedData = { ...prevState.registedData };
      registedData[name] = value;
      return { registedData };
    });
  }

  onClickModalToAddConfirm = async () => {
    await axios.setQuestionInfomation(this.state.registedData)
    this.setState({isDetailModal: false})
  }

  onClickModalToUpdateConfirm = async () => {
    await axios.modifyQuestionInfomation(this.state.registedData)
    this.setState({isDetailModal: false})
  }

  onClickModalToClose = () => this.setState({isDetailModal: false, isAddModal: false,})
  
  render() {  
    const questionAddBtn = (
      <Button 
        className={`btn QuestionRegisContainer__addBtn`}
        color="secondary"
        outline
        size={`sm`}
        onClick={this.onAddModal}> 질문 추가
      </Button>
    )

    const questionDetail = (
      <QuestionDetail
        registedData={this.state.registedData}
        onRegistedData={this.onRegistedData}
      />
    )

    const AddModalFooter = (
      <ModalCommonFooter
        onConfirmModal={this.onClickModalToAddConfirm}
        onCancelModal={this.onClickModalToClose}
      />
    )
    const UpdateModalFooter = (
      <ModalCommonFooter
        onConfirmModal={this.onClickModalToUpdateConfirm}
        onCancelModal={this.onClickModalToClose}
      />
    )

    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          type={'question'}
          title={'질문 관리'}
          rows={this.state.rows}
          questionAddBtn={questionAddBtn}
          onClickRow={this.onClickToShowModal}
          cursor
        />

        <Modal
          open={this.state.isDetailModal}
          onClose={this.onEditModal}

          title={'본부질문 수정하기'}
          contents={questionDetail}
          footer={UpdateModalFooter}
        />

        <Modal
          open={this.state.isAddModal}
          onClose={this.onAddModal}
          
          title={'본부질문 추가하기'}
          contents={questionDetail}
          footer={AddModalFooter}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer