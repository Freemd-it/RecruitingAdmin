import React, { Component } from 'react'
import Table from 'views/contexts/table'
import * as axios from 'lib/api/recruit'
import Modal from 'views/contexts/modal'
import { ModalRecruitFooter } from 'views/domains/contents/commons/ModalFooter'
import InfoDetail from 'views/domains/contents/recruit/informationCardPack'
import organization from 'lib/service/organization'

class RecruitManageContainer extends Component {
  state = {
    rows: [],
    isDetailModal: false,
    selectedRow: [],
    keyword: '검색선택',
    query: '',
    type: '',
  };

  componentDidMount() {
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    axios.getRecruitList({q: department === '900' ? '' : organization[department].name , type: 'department'}, this)
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  onClickRowToShowModal = async (e) => {
    await axios.getRecruitDetail(e.currentTarget.id, this)
  }
  
  onClickModalToClose = async () => {
    this.setState({ isDetailModal: false })
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    await axios.getRecruitList({q: department === '900' ? '' : organization[department].name , type: 'department'}, this)
  }
  

  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name,
      type: e.target.value,
    })
  }

  onClickEvaluation = async ({_id}, rank) => {
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    const result = await axios.setApplicantRank({ userId: _id, rank, })
    
    this.setState({
      isDetailModal: false,
    })
    
    await axios.getRecruitList({q: department === '900' ? '' : organization[department].name , type: 'department'}, this)
  }
  

  onChangeFilterQuery = async (e) => {
    const { type } = this.state
    if(e.key === 'Enter') {
      if(!type) {
        alert('검색 조건을 선택해 주세요.')
      } else {
        await axios.getRecruitList({ type, q: e.target.value }, this)
      }
    } else {
      this.setState({ query: e.target.value })
    }
  }

  render() {
    const { match } = this.props
    const { rows } = this.state

    const ModalContent = (
      <InfoDetail
        selectedRow={this.state.selectedRow}
      />
    )
    const ModalFooter = (
      <ModalRecruitFooter
        userSession = { JSON.parse(localStorage.getItem('user_session')) }
        selectedRow={ this.state.selectedRow }
        onClickEvaluation = { this.onClickEvaluation}
        onClickModalToClose = {this.onClickModalToClose}
      />
    )

    return (
      <div>
        {
          match.params.type === 'info' &&
          <Table
            type={'information'}
            title={'지원서관리'}
            rows={rows}
            onClickRow={this.onClickRowToShowModal}
            onSearchTag={this.onSearchTag}
            onChangeKeyword={this.onChangeKeyword}
            onChangeFilterQuery={this.onChangeFilterQuery}
            keyword={this.state.keyword}
            cursor
          />
        }
          <Modal
            modalType={'recruit'}
            open={this.state.isDetailModal}
            onClose={this.onClickModalToClose}

            title={'지원서'}
            contents={ModalContent}
            footer={ModalFooter}
          />
      </div>
    )
  }
}

export default RecruitManageContainer