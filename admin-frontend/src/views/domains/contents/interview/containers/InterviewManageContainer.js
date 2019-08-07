import React, { Component } from 'react'
import Table from 'views/contexts/table'
import * as axios from 'lib/api/interview'

class InterviewManageContainer extends Component {
  state = {
    rows: [], 
    page: 0,
    timeTable: JSON.parse(localStorage.getItem('recruitMeta')).interviewTime,
    rowsPerPage: this.props.rowsPerPage,
    keyword: '검색선택',
    query: '',
    type: '',
  };

  componentDidMount() {
    const { batch } = JSON.parse(localStorage.getItem('recruitMeta'))
    this.setState({ batch });
    axios.getInterviewList(batch, this);
  }

  onClickToShowModal = (index) => {
    alert('힝-! 속았지? 아무것도 없지롱')
  }

  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name,
      type: e.target.value,
    })
  }
  
  onChangeFilterQuery = async (e) => {
    console.log('onChangeFilterQuery');
    // const { type } = this.state
    
    // if(e.key === 'Enter') {
    //   if(!type) {
    //     alert('검색 조건을 선택해 주세요.')
    //   } else {
    //     await axios.getInterviewList({ type, q: e.target.value }, this)
    //   }
    // } else {
    //   this.setState({ query: e.target.value })
    // }
  }

  render() {

    return (
      <Table
        type={'interview'}
        title={'면접시간관리'}
        timeTable={this.state.timeTable}
        rows={this.state.rows}
        onClickRow={this.onClickToShowModal}
        onSearchTag={this.onSearchTag}
        onChangeKeyword={this.onChangeKeyword}
        onChangeFilterQuery={this.onChangeFilterQuery}
        keyword={this.state.keyword}
        cursor
      />
    )
  }
}

export default InterviewManageContainer