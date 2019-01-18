import React, { Component } from 'react'
import { Table, Modal } from '../../components'
import Button from '@material-ui/core/Button';

const data = [{
  department: 'IT',
  team: '우리팀',
  question: '안녕하세요?',
  cardinality: '11',
  writer: '이필주',
  create: '2019-01-01',
  is_question: true,
}]

class QuestionRegistContainer extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    isAddModal: false,
    isDetailModal: false,
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
      if (!prevState.isDetailModal) {
        data.value = <div>응디테일</div>
      } else {
        data.value = '';
      }
      return data;
    });
  }

  render() {
    const { match } = this.props
    const { page, rows, rowsPerPage} = this.state
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
          title={"detailModal"}
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