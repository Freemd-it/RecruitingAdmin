import React, { Component } from 'react'
import { Table, Modal, QuestionTextFieldComponent } from '../../components'
import Button from '@material-ui/core/Button';
import './QuestionRegistContainer.scss';

const data = [{
  department: 'IT',
  team: '우리팀',
  question: '안녕하세요?',
  cardinality: '11',
  writer: '이필주',
  create: '2019-01-01',
  is_question: true,
}, {
  department: 'IT',
  team: '너네팀',
  question: '안녕안하세요?',
  cardinality: '0',
  writer: '안알랴줌',
  create: '2019-01-02',
  is_question: false,
}]

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    isAddModal: false,
    isDetailModal: false,
    value: '',
  };

  componentDidMount() {
    this.setState({
      rows: data
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
          data.value = (
            <QuestionTextFieldComponent
              value={{department: '안알랴줌 ㅋㅋㅋ'}}
              onChangeTeam={e => console.log(e.target.value)}
              onChangeQuestion={e => console.log(e.target.value)}
            />
          );
      } else {
        data.value = '';
      }
      return data;
    });
  }

  onDetailModal = value => {
      this.setState(prevState => {
        const data = {
          isDetailModal: !prevState.isDetailModal
        }
        if (!prevState.isDetailModal && value) {
          data.value = (
            <QuestionTextFieldComponent
              value={value}
              onChangeTeam={e => console.log(e.target.value)}
              onChangeQuestion={e => console.log(e.target.value)}
            />
          )
        } else {
          data.value = '';
        }
        return data;
      });
  }

  render() {
    return (
      <div className={`QuestionRegisContainer__addBox`}>
        <Button 
          className={`QuestionRegisContainer__addQuestion`}
          variant="contained" 
          color="primary"
          onClick={e => this.onAddModal(<div>추가하기당</div>)}
        >
          질문 추가하기
        </Button>
        <Table
          title={'본부질문 관리'}
          columns={this.props.columns}
          data={this.state.rows}
          totalLength={1000}
          onClick={this.onClick}
          cursor={true}
        />

        <Modal
          title={'본부질문 수정하기'}
          contents={this.state.value}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />

        <Modal
          title={'본부질문 추가하기'}
          contents={this.state.value}
          open={this.state.isAddModal}
          onModal={this.onAddModal}
        />

      </div>
    )
  }
}

export default QuestionRegistContainer