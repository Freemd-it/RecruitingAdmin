import React, { Component } from 'react'
import { CustomTable } from '../../components'

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
  };

  componentDidMount() {
    this.setState({
      rows: data
    });
  }

  onClick = value => {
    console.log(value);
  }

  render() {
    const { match } = this.props
    const { page, rows, rowsPerPage} = this.state
    return (
      <CustomTable
        title={'안알랴줌'}
        columns={this.props.columns}
        data={this.state.rows}
        totalLength={1000}
        onClick={this.onClick}
      />
    )
  }
}

export default QuestionRegistContainer