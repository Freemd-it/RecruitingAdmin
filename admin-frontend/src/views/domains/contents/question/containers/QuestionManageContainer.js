import React, { Component } from 'react'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';
import { addPermissionCheck, updatePermissionCheck} from 'modules/permission'
import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'
import { validation } from 'lib/service/validation'

import * as axios from 'lib/api/question';
import moment from 'moment'
import _ from 'lodash'

import './QuestionManageContainer.scss';
import organization from 'lib/service/organization';

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    isAddModal: false,
    isUpdateModal: false,
    keyword: '검색선택',
    query: '',
    registedData: {
      id: '',
      department_name: '본부 선택',
      department_code: '',
      team: '팀 선택',
      question: '',
      used: false,
      type: '유형 선택',
      register: '',
    }
  };

  componentDidMount() {
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    axios.getQuestionList({type: department === '대표' ? '' : department }, this)
  }

  onCloseModal = () => {
    this.setState(prevState => {
      const data = {
        isUpdateModal: false,
        isAddModal: false,
      }
      return data;
    });
  }

  onClickToAddModal = (index) => {
    const { rows } = this.state
    if(addPermissionCheck(rows)) {
      const { department, team } = JSON.parse(localStorage.getItem('user_session'))
      this.setState(prevState => {
        const data = {
          registedData: {
            department_name: organization[department].name,
            department, 
            team: team ? team : '팀 선택',
            question: '질문을 작성해주세요 :)',
            used: false,
            type: '타입 선택',
            id: rows.length,
          },
          isAddModal: true,
        }
        return data
      })
    } else {
      alert('당신은 권한이 없어요\n상관에게 문의하세요 :(')
    }
    
  }

  onClickToUpdateModal = (e, index) => {
    const { id } = e.currentTarget
    const { rows } = this.state
    if(updatePermissionCheck(rows, id)) {
      axios.getQuestionDetail(id, this)
    } else {
      alert('수정할 수 있는 권한이 없는 질문입니다 :(')
    }
  }

  onRegistedData = (e) => {
    const { name, value } = e.target
    const mvalue = (name !== 'used' ? value : value === 'true');

    this.setState(prevState => {
      const registedData = { ...prevState.registedData};
      registedData[name] = mvalue;
      return { registedData };
    });
  }

  onClickModalToAddConfirm = async () => {
    const { registedData } = this.state
    if (validation(registedData)) {
      const result = await axios.setQuestionInfomation(registedData, this)
      if (result.status === 201) {
        this.setState((prevState) => {
          const { username } = JSON.parse(localStorage.getItem('user_session'))
          const { registedData } = this.state
          
          const rowsData = prevState.rows
          
          registedData['batch'] = 20
          registedData['registedDate'] = moment().format('YYYY-MM-DD HH:mm:ss')
          registedData['register'] = username
  
          rowsData.push(registedData)
          const newData = {
            rowsData,
            isAddModal: !prevState.isAddModal,
          } 
          return newData
        })
      } else {
        alert('질문 추가하기 오류 났어욥')
      }
    }
    else {
      alert('누락된 항복이 있습니다.\n다시 확인해 주세요.')
    }
  }

  onClickModalToUpdateConfirm = (event) => {
    const { registedData } = this.state
    if(registedData.team === '팀 선택') {
      alert('누락된 항목이 있습니다.')
    } else {
      axios.modifyQuestionInfomation(registedData, this)
    }
  }

  onClickModalToClose = () => {
    this.setState({
      isUpdateModal: false,
      isAddModal: false,
    })
  }
  
  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name,
      type: e.target.value,
    })
  }
  
  onChangeFilterQuery = async (e) => {
    const { type } = this.state
    if(e.key === 'Enter') {
      if(!type) {
        alert('검색 조건을 선택해 주세요.')
      } else {
        axios.getQuestionList({ type, q: e.target.value}, this)
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
        onClick={this.onClickToAddModal}> 질문 추가
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
          onClickRow={this.onClickToUpdateModal}
          onSearchTag={this.onSearchTag}
          onChangeKeyword={this.onChangeKeyword}
          onChangeFilterQuery={this.onChangeFilterQuery}
          keyword={this.state.keyword}
          cursor
        />

        <Modal
          open={this.state.isUpdateModal}
          onClose={this.onCloseModal}

          title={'본부질문 수정하기'}
          contents={questionDetail}
          footer={UpdateModalFooter}
        />

        <Modal
          open={this.state.isAddModal}
          onClose={this.onCloseModal}

          title={'본부질문 추가하기'}
          contents={questionDetail}
          footer={AddModalFooter}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer