import React, { Component } from 'react'
import { Table, Modal } from '../../components'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
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
        data.value = value;
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
            <div>
              <TextField
                label="본부"
                className={'QuestionRegistContainer__mr QuestionRegistContainer__input'}
                value={value.department}
                variant="outlined"
                InputProps={{ readOnly: true }}
              />
              <TextField
                select
                label="팀"
                className={'QuestionRegistContainer__input'}
                value={value.team}
                onChange={(e) => console.log(e.target.value)}
                SelectProps={{ native: true }}
                variant="outlined"
              >
                <option value={'1팀'}>1팀</option>
                <option value={'2팀'}>2팀</option>
                <option value={'3팀'}>3팀</option>
                <option value={'4팀'}>4팀</option>
              </TextField>
              <TextField
                label="질문"
                className={'QuestionRegistContainer__textBox'}
                placeholder="질문을 입력하여주세요."
                multiline
                variant="outlined"
                rows="4"
              />
            </div>
          )
        } else {
          data.value = '';
        }
        return data;
      });
  }

  render() {
    return (
      <div>
        <Button 
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
        />

        <Modal
          title={"본부질문 수정하기"}
          contents={this.state.value}
          open={this.state.isDetailModal}
          onModal={this.onDetailModal}
        />

        <Modal
          title={"addModal"}
          contents={this.state.value}
          open={this.state.isAddModal}
          onModal={this.onAddModal}
        />

      </div>
    )
  }
}

export default QuestionRegistContainer