import React, { Component } from 'react'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';

import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'

import * as axios from 'lib/api/question';
import './QuestionManageContainer.scss';


class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    isAddModal: false,
    isDetailModal: false,
    keyword: '검색선택',
    query: '',
    registedData: {
      id: '',
      department: 'IT',
      team: '',
      question: '',
      used: false,
    }
  };

  componentDidMount() {
    axios.getQuestionList({}, this)
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
    axios.setQuestionInfomation(this.state.registedData, this)
  }

  onClickModalToUpdateConfirm = async () => {
    axios.modifyQuestionInfomation(this.state.registedData, this)
  }

  onClickModalToClose = () => this.setState({isDetailModal: false, isAddModal: false,})
  
  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name
    })
  }
  
  onChangeFilterQuery = async (e) => {
    if(e.key === 'Enter') {
      const options = {
        type: this.state.keyword,
        q: e.target.value
      }
      const res = await axios.getQuestionList(options)
      if(res.status === 200) {
        this.setState({
          rows: res.data,
        })
      }
      
    } else {
      this.setState({
        query: e.target.value
      })
    }
  }

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
          onSearchTag={this.onSearchTag}
          onChangeKeyword={this.onChangeKeyword}
          onChangeFilterQuery={this.onChangeFilterQuery}
          keyword={this.state.keyword}
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