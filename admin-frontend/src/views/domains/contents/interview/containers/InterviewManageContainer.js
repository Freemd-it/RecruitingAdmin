import React, { Component } from 'react';
import Table from 'views/contexts/table';
import * as axios from 'lib/api/interview';
import { Button } from 'reactstrap';
import _ from 'lodash';
import * as Columns from 'lib/service/tableColumn'

class InterviewManageContainer extends Component {
  state = {
    applicationForm: {},
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

  onCheckAllRows = async (checked) => {
    this.setState(prevState => {
      const { applicationForm } = prevState;
      if (checked) {
        this.state.rows.forEach((row) => {
          applicationForm[row._id] = true;
        })
      } else {
        this.state.rows.forEach((row) => {
          delete applicationForm[row._id];
        })
      }
      return applicationForm;
    });
  }

  onDownloadCsv = async () => {
    const { applicationForm, rows } = this.state;
    if (Object.entries(applicationForm).length === 0 && applicationForm.constructor === Object) return alert('선택된 지원서가 없습니다.');

    // 지원서에 면전 시간 관련 데이터를 불러와 csv 파일에 추가
    const list = Object.keys(applicationForm).map(id => {
      const index = _.findIndex(rows, o => {
        return o._id === id;
      });
      const data = rows[index];
      console.log(data);
      let csvRow = `${data.name},${data.departmentName_1} ${data.teamName_1}, ${data.departmentName_2} ${data.teamName_2},`+
      `${data.medicalField_1 || ''}, ${data.medicalField_2 || ''}, ${data.phoneNumber},`+
      `${data.otherAssignMedical?'O':'X'},${data.otherAssignNgo?'O':'X'}, 토요일,`;
      data.schedule.first.forEach((available) => {
        csvRow += (available?'O,':',')
      })
      csvRow += '일요일,';
      data.schedule.second.forEach((available) => {
        csvRow += (available?'O,':',')
      })
      return csvRow;
    });

    // 이름, 전화 번호 등 csv 파일에 포함되어야 하는 정보들을 불러와 컬럼에 추가
    const csvColumns = Columns['interview'];
    let csvData = '';
    csvColumns.forEach(column => {
      csvData += (column.value + ',')
    });

    // 면접 시간대 가져와서 csv 컬럼에 추가
    const interviewTime = JSON.parse(localStorage.getItem('recruitMeta')).interviewTime;
    const interviewDates = Object.keys(interviewTime);
    
    interviewDates.forEach(interviewDate => {
      csvData += (interviewDate + ',');
      interviewTime[interviewDate].forEach(timeSection => {
        csvData += (timeSection + ',');
      })
    })

    csvData = csvData.substr(0, csvData.length -1);
    csvData += `\n${list.join('\n')}`;
    const csvDownload = document.createElement('a');
    csvDownload.href = 'data:text/csv;utf-8,\uFEFF' + encodeURIComponent(csvData);
    csvDownload.target = '_blank';
    csvDownload.download = '면접시간.csv';
    csvDownload.click();
    csvDownload.remove();
  }

  render() {
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

    return (
      <Table
        type={'interview'}
        title={'면접시간관리'}
        questionAddBtn={questionAddBtn}
        timeTable={this.state.timeTable}
        rows={this.state.rows}
        onClickRow={this.onClickToShowModal}
        onSearchTag={this.onSearchTag}
        onChangeKeyword={this.onChangeKeyword}
        onChangeFilterQuery={this.onChangeFilterQuery}
        keyword={this.state.keyword}
        applicationForm={this.state.applicationForm}
        onCheckRow={this.onCheckRow}
        onCheckAllRows={this.onCheckAllRows}
        cursor
      />
    )
  }
}

export default InterviewManageContainer
