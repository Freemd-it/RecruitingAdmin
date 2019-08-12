import React, { Component } from 'react'
import Table from 'views/contexts/table'
import QuestionDetail from '../questionModal/QuestionModal'
import Modal from 'views/contexts/modal'
import { Button } from 'reactstrap';
// import { addPermissionCheck, updatePermissionCheck} from 'modules/permission'
import { ModalCommonFooter } from 'views/domains/contents/commons/ModalFooter'
// import { validation } from 'lib/service/validation'

import * as axios from 'lib/api/question';
import './QuestionManageContainer.scss';
// import _ from 'lodash';

class QuestionRegistContainer extends Component {
  state = {
    batch: 0,
    addModal: false,
    updateModal: false,
    isAdd: true, // 추가모드
    keyword: '검색선택',
    query: '',
    questions: [],
    registedData: {
      questionId: '',
      department: '',
      team: '',
      departments: [], // '본부 선택'
      teams: {}, // '팀 선택'
      content: '',
      type: null,
      types: [101, 102, 103], // [101, 102, 103]
      register: '',
    },
  };

  componentDidMount() {
    const { batch, departments } = JSON.parse(localStorage.getItem('recruitMeta'));

    this.setState((prevState) => {
      const { registedData } = prevState;
      const departmentData = [];
      const teamData = {};
      departments.forEach(department => {
        const {  departmentName, _id, teams } = department;
        departmentData.push({
          id: _id,
          name: departmentName,
        });
        teamData[departmentName] = [
          { _id: '', name: '팀 선택' }, 
        ];
        teams.forEach(team => {
          teamData[departmentName].push({
            id: team._id,
            name: team.teamName
          });
        });
      });
      registedData.departments = [ 
        { id: 'null', name: '본부 선택' }, 
        ...departmentData 
      ];
      registedData.teams = { 
        default: [{ _id: "", name: '팀 선택' }],
        ...teamData 
      };
      return { 
        registedData,
      }
    });
    axios.getQuestionList(batch, this);
  }

  onChangeKeyword = async (e) => {
    console.log('onChangeKeyword');
  }
  
  onChangeFilterQuery = async (e) => {
    console.log('onChangeFilterQuery');
  }

  onClosedModal = () => {
    this.setState((prevState) => {
      const { registedData } = prevState;
      registedData.questionId = '';
      registedData.department = '';
      registedData.team = '';
      registedData.content = '';
      registedData.type = '';
      return { registedData }
    });
  }

  onAddModal = () => {
    this.setState(prevState => {
      const { addModal } = prevState;
      return { addModal: !addModal };
    });
  }

  onCloseModal = () => {
    this.setState({
      addModal: false,
      updateModal: false,
      isAdd: true,
    });
  }

  onUpdateModal = async (e) => {
    const { currentTarget } = e;
    const data = {
      departmentId: currentTarget.getAttribute("department-id"),
      teamId: currentTarget.getAttribute("team-id"),
      questionId: currentTarget.getAttribute("question-id"),
    };
    if (data.departmentId && data.teamId && data.questionId) {
      axios.getQuestionDetail(data, this);
    }
  }

  onRegistedData = (e) => {
    const { target } = e;
    const { value, name } = target;
    this.setState((prevState) => {
      const { registedData } = prevState;
      registedData[name] = value;
      return registedData;
    })
  }

  onAddModalConfirm = async (e) => {
    const { batch, registedData } = this.state;
    const { 
      department,
      team,
      content,
      type
    } = registedData;
    if (!department || !team || !content || !type) return alert('모든 항목을 작성해주세요.');

    const { data, status } = await axios.setQuestionInfomation({ 
      batch,
      teamName: team,
      departmentName: department,
      questions: {
        content,
        type,
        teamName: team,
      }
    }, this);
    if (status === 201) {
      const { result } = data;
      this.setState(prevState => {
        const { questions } = prevState;
        result.some((item, iIndex) => {
          const isInclude = questions.some((question, qIndex) => {
            const { questionId, departmentId, teamId } = question;
            return item.questionId === questionId &&
              item.departmentId === departmentId &&
              item.teamId === teamId;
          });
          if (!isInclude) {
            questions.push(item);
            return true;
          }
          return false;
        });
        return { questions, addModal: false }
      });
    } else {
      alert('질문 추가하기 실패');
    }
  }

  onUpdateModalConfirm = async (e) => {
    const { registedData } = this.state;
    const { 
      department,
      team,
      content,
      type,
      questionId,
    } = registedData;
    if (!department || !team || !content || !type) alert('모든 항목을 작성해주세요.');
    axios.updateQuestion({
      department,
      team,
      content,
      type,
      questionId,
    }, this);
  }

  render() {  
    const questionAddBtn = (
      <Button 
        className={`btn QuestionRegisContainer__addBtn`}
        color="secondary"
        outline
        size={`sm`}
        onClick={this.onAddModal}> 
        질문 추가하기
      </Button>
    )

    const questionDetail = (
      <QuestionDetail
        registedData={this.state.registedData}
        onRegistedData={this.onRegistedData}
        isAdd={this.state.isAdd}
      />
    );

    const addModalFooter = (
      <ModalCommonFooter
        onConfirmModal={this.onAddModalConfirm}
        onCancelModal={this.onCloseModal}
      />
    );

    const updateModalFooter = (
      <ModalCommonFooter
        onConfirmModal={this.onUpdateModalConfirm}
        onCancelModal={this.onCloseModal}
      />
    );

    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          type={'question'}
          title={'질문 관리'}
          rows={this.state.questions}
          questionAddBtn={questionAddBtn}
          onClickRow={this.onUpdateModal}
          onSearchTag={this.onSearchTag}
          onChangeKeyword={this.onChangeKeyword}
          onChangeFilterQuery={this.onChangeFilterQuery}
          keyword={this.state.keyword}
          attributeData={[{
            key: "department-id",
            value: "departmentId" 
          }, {
            key: "team-id",
            value: "teamId"
          }, {
            key: "question-id",
            value: "questionId"
          }]}
          cursor
        />

        <Modal
          open={this.state.addModal}
          onClose={this.onCloseModal}
          title={'본부질문 추가하기'}
          contents={questionDetail}
          footer={addModalFooter}
          onClosed={this.onClosedModal}
        />

        <Modal
          open={this.state.updateModal}
          onClose={this.onCloseModal}
          title={'본부질문 수정하기'}
          contents={questionDetail}
          footer={updateModalFooter}
          onClosed={this.onClosedModal}
        />
      </div>
    )
  }
}

export default QuestionRegistContainer