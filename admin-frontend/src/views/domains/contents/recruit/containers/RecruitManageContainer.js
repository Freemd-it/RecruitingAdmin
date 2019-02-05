import React, { Component } from 'react'
import Table from 'views/contexts/table'
import * as axios from 'lib/api/recruit'
import Modal from 'views/contexts/modal'
import { ModalRecruitFooter } from 'views/domains/contents/commons/ModalFooter'
import InfoDetail from 'views/domains/contents/recruit/informationCardPack'

class RecruitManageContainer extends Component {
  state = {
    rows: [],
    isDetailModal: false,
    selectedRow: [],
    keyword: '검색선택',
    query: '',
  };

  componentDidMount() {
    const { department } = JSON.parse(localStorage.getItem('user_session'))
    axios.getRecruitList({type: department === '대표' ? '' : department }, this)
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  onClickRowToShowModal = async (id, e) => {
    await axios.getRecruitDetail('5c57fd93eb3fd112914c1855', this)
  }
  
  onClickModalToClose = () => this.setState({ isDetailModal: false })

  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name
    })
  }

  onChangeFilterQuery = async (e) => {
    if(e.key === 'Enter') {
      const res = await axios.getRecruitList({
        type: this.state.keyword,
        q: e.target.value
      })
      if(res.status === 200) {
        this.setState({ rows: res.data })
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
    // LOL_ prefix지워서 이름 리플레이스 해서 쓰세용 > 3 < 
    const ModalFooter = (
      <ModalRecruitFooter
        LOL_합격버튼함수={() => {}}
        LOL_불합격버튼함수={() => {}}
        LOL_보류버튼함수={() => {}}
        LOL_취소버튼함수={() => {}}
      />
    )

    return (
      <div>
        {
          match.params.type === 'info' &&
          <Table
            type={'information'}
            title={'개인정보 관리'}
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