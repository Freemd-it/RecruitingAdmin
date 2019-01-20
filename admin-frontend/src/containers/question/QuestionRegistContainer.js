import React, { Component } from 'react'
import { Table, Modal, QuestionDetail } from '../../components'
import { Button } from 'reactstrap';
import './QuestionRegistContainer.scss';

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    isAddModal: false,
    isDetailModal: false,
    registData: {
      department: 'IT',
      team: '',
      question: '',
      useQuestion: false,
    }
  };

  componentDidMount() {
    this.setState({ 
      rows: [{
        question: {
          id: 1,
          department: 'IT',
          team: '우리팀',
          question: '안녕하세요?',
          cardinality: '11',
          writer: '이필주',
          create: '2019-01-01',
          use_question: true,
        }
      }, {
        quuestion: {
          id: 2,
          department: 'IT',
          team: '너네팀',
          question: '안녕안하세요?',
          cardinality: '0',
          writer: '안알랴줌',
          create: '2019-01-02',
          use_question: false,
        }
      }]
    });
  }

  onClick = value => {
    this.onDetailModal(value);
  }

  onAddModal = value => {
    this.setState(prevState => {
      const data = {
        isAddModal: !prevState.isAddModal
      }
      if (!prevState.isAddModal) {
      } else {
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
        if (!prevState.isDetailModal && value && value.question) {
          const { question } = value;
          data.registData.useQuestion = question.use_question;
          data.registData.team = question.team;
          data.registData.question = question.team.question;
        } else {
          data.registData.useQuestion = '';
          data.registData.team = '';
          data.registData.question = '';
        }
        return data;
      });
  }

  onRegistData = e => {
    const name = e.target.name;
    const value = name !== 'useQuestion' ? e.target.value : e.target.value === 'true';
    console.log(name, value);
    this.setState(prevState => {
      const registData = { ...prevState.registData };
      registData[name] = value;
      return { registData };
    });
  }

  render() {
    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Table
          title={'본부 질문 관리'}
          titleNav={
            <Button 
              className={`QuestionRegisContainer__addBtn`}
              color="dark"
              outline
              size={`sm`}
              onClick={e => this.onAddModal(<div>추가하기당</div>)}
            >
              질문 추가하기
            </Button>
          }
          columns={this.props.columns}
          data={this.state.rows}
          totalLength={1000}
          onClick={this.onClick}
          cursor={true}
        />

        <Modal
          title={'본부질문 수정하기'}
          contents={
            <QuestionDetail
              registData={this.state.registData}
              onRegistData={this.onRegistData}
            />
          }
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />

        <Modal
          title={'본부질문 추가하기'}
          contents={
            <QuestionDetail
              registData={this.state.registData}
              onRegistData={this.onRegistData}
            />
          }
          open={this.state.isAddModal}
          onModal={this.onAddModal}
        />

      </div>
    )
  }
}

export default QuestionRegistContainer