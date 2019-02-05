import React, { Component } from 'react'
import Table from 'views/contexts/table'
import * as axios from 'lib/api/interview'
import _ from 'lodash'

class InterviewManageContainer extends Component {
  state = {
    rows: [], 
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
    keyword: '검색선택',
    query: '',
    type: '',
  };

  componentDidMount() {
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    axios.getInterviewList({type: department === '대표' ? '' : department }, this)
  }

  onClickToShowModal = (index) => {
    // alert('힝-! 속았지? 아무것도 없지롱')
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
        await axios.getInterviewList({ type, q: e.target.value }, this)
      }
    } else {
      this.setState({ query: e.target.value })
    }
  }

  render() {
    const tableData = []
    _.forEach(this.state.rows, (v,k) => {
        if(v === null) {
          return 0;
        } else {
          _.forEach(v, (_v, _k) => {
            if (_k === 'schedule') {
              _.forEach(_v, (__v, __k) => {
                if(__k === 'saturday') {
                  v.saturday = '2019-03-02'
                  v.sta_first = __v[0].interview_available
                  v.sta_second = __v[1].interview_available
    
                } else if(__k === 'sunday') {
                  v.sunday = '2019-03-03'
                  v.sun_first = __v[0].interview_available
                  v.sun_second = __v[1].interview_available
                  v.sun_third = __v[2].interview_available
                  v.sun_forth = __v[3].interview_available
                }
              })
            }
          }) 
          delete v.schedule
        }
        tableData.push(v)
      })
      
    return (
      <Table
        type={'interview'}
        title={'면접시간관리'}
        rows={tableData}
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