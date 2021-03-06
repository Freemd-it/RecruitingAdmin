import React, { Component } from 'react';
import Table from 'views/contexts/table';
import * as axios from 'lib/api/recruit';
import Modal from 'views/contexts/modal';
import './RecruitManageContainer.scss';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { ModalRecruitFooter } from 'views/domains/contents/commons/ModalFooter';
import InfoDetail from 'views/domains/contents/recruit/informationCardPack';
import organization from 'lib/service/organization';
import _ from 'lodash';

class RecruitManageContainer extends Component {
  state = {
    rows: [],
    isDetailModal: false,
    selectedRow: [],
    keyword: '검색선택',
    query: '',
    type: '',
    applicationForm: {},
    department: '',
    memo: '',
    memoList: [],
  };

  memoScroll = null;

  componentDidMount() {
    this.setState({
      department: JSON.parse(localStorage.getItem('user_session')).department
    }, () => {
      const { department } = this.state;
      axios.getRecruitList({q: department === '900' ? '' : organization[department].name , type: 'department'}, this)
    });
  }

  handleChangePage = (event, page) => {
    this.setState({ page })
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value })
  }

  onClickRowToShowModal = async (e) => {
    const id = e.currentTarget.id;
    await axios.getRecruitDetail(id, this);
    await axios.getMemoList(id, this);

    const scrollHeight =  this.memoScroll.scrollHeight;
    this.memoScroll.scroll(0, scrollHeight);
  }
  
  onClickModalToClose = async () => {
    this.setState({ isDetailModal: false })
    const { department } = this.state;
    await axios.getRecruitList({q: department === '900' ? '' : organization[department].name , type: 'department'}, this)
  }
  

  onChangeKeyword = async (e) => {
    this.setState({
      keyword: e.target.name,
      type: e.target.value,
    })
  }

  onClickEvaluation = async ({_id}, rank) => {
    const { department } = this.state;
    await axios.setApplicantRank({ userId: _id, rank, }, this)
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

  onCheckRow = async (checked, id) => {
    this.setState(prevState => {
      const { applicationForm } = prevState;
      if (checked) { 
        applicationForm[id] = true;
      } else {
        delete applicationForm[id]
      }
      return applicationForm;
    });
  }

  onChangeMemo = async (e) => {
    if (e && e.target) {
      this.setState({ memo: e.target.value });
    } else {
      this.setState({ memo: ''});
    }
  }

  onSubmitMemo = async (e) => {
    const { memo, department } = this.state;
    const { _id: userId } = this.state.selectedRow;
    await axios.setMemo({contents: memo, writer: department, userId}, this);
  }

  onEnterKeyDown = async (e) => {
    if (e && e.key === 'Enter') this.onSubmitMemo();
  }

  onDownloadCsv = async () => {
    const { applicationForm, rows } = this.state;
    if (Object.entries(applicationForm).length === 0 && applicationForm.constructor === Object) return alert('선택된 지원서가 없습니다.');
    const list = Object.keys(applicationForm).map(id => {
      const index = _.findIndex(rows, o => {
        return o._id === id;
      });
      const data = rows[index];
      return `${data.name},${data.english},${data.is_male === true ? '남' : '여'},`+
      `${data.birth_date},${data.phone_number},${data.email},${organization[data.first.department].name},${organization[data.second.department].name},${data.medical_field || ''},${data.evaluation || ''}`;
    });
    const csvData = `이름,영문이름,성별,생년월일,전화번호,Email,1지망,2지망,지원사업,평가상태\n${list.join('\n')}`;
    const csvDownload = document.createElement('a');
    csvDownload.href = 'data:text/csv;utf-8,\uFEFF' + encodeURIComponent(csvData);
    csvDownload.target = '_blank';
    csvDownload.download = '지원자.csv';
    csvDownload.click();
    csvDownload.remove();
  }

  render() {
    const { match } = this.props
    const { rows, selectedRow, memoList } = this.state

    const questionAddBtn = (
      <Button 
        className={`btn`}
        color="secondary"
        outline
        size={`sm`}
        onClick={this.onDownloadCsv}> 
        CSV 다운로드
      </Button>
    )

    const ModelMemoList = memoList.map(item => {
      return (
        <div className={`RecruitManageContainer__MemoBox__contents`} key={item._id}>
          <div>
            {item.writer && organization[item.writer].name}: {item.contents}
          </div>
          <div className={`time`}>
            { new Date(item.registedDate).toLocaleString() }
          </div>
        </div>
      );
    });

    const ModalContent = (
      <>
        <InfoDetail selectedRow={selectedRow}/>

        <div className={`RecruitManageContainer__MemoBox`}>
          <div 
            className={`RecruitManageContainer__MemoBox__list`}
            ref={ref => this.memoScroll = ref}
          >
            { ModelMemoList }
          </div>

          <InputGroup className={`RecruitManageContainer__MemoBox__input`}>
            <Input 
              onKeyDown={this.onEnterKeyDown}
              onChange={this.onChangeMemo} 
              value={this.state.memo}
            />
            <InputGroupAddon addonType="prepend">
              <Button onClick={this.onSubmitMemo}>
                등록
              </Button>
            </InputGroupAddon>
          </InputGroup>

        </div>
      </>
    );

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
            type={this.props.type}
            title={'지원서관리'}
            rows={rows}
            questionAddBtn={questionAddBtn}
            onClickRow={this.onClickRowToShowModal}
            onCheckRow={this.onCheckRow}
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
