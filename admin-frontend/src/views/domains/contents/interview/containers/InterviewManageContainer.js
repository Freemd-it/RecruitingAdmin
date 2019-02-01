import React, { Component } from 'react'
import Table from 'views/contexts/table'
import _ from 'lodash'

const data = {
  "data": [
      {
          "_id": "5c51dd323be82d476be69571",
          "name": "김연태",
          "phone_number": "010-1234-5894",
          "first_department": "IT기획본부",
          "first_team": "",
          "second_department": "디자인본부",
          "second_team": "",
          "schedule": {
              "saturday": [
                  {
                      "interview_time": "14:00 - 16:00",
                      "interview_available": true
                  },
                  {
                      "interview_time": "16:00 - 18:00",
                      "interview_available": true
                  }
              ],
              "sunday": [
                  {
                      "interview_time": "10:00 - 12:00",
                      "interview_available": false
                  },
                  {
                      "interview_time": "12:00 - 14:00",
                      "interview_available": false
                  },
                  {
                      "interview_time": "14:00 - 16:00",
                      "interview_available": true
                  },
                  {
                      "interview_time": "16:00 - 18:00",
                      "interview_available": true
                  }
              ]
          }
      },
      {
          "_id": "5c51d90b1aaefe474f70ae0c",
          "name": "이동수",
          "phone_number": "010-1234-5894",
          "first_department": "IT기획본부",
          "first_team": "",
          "second_department": "브랜드마케팅본부",
          "second_team": "후원전략팀",
          "schedule": {
              "saturday": [
                  {
                      "interview_time": "14:00 - 16:00",
                      "interview_available": true
                  },
                  {
                      "interview_time": "16:00 - 18:00",
                      "interview_available": true
                  }
              ],
              "sunday": [
                  {
                      "interview_time": "10:00 - 12:00",
                      "interview_available": false
                  },
                  {
                      "interview_time": "12:00 - 14:00",
                      "interview_available": false
                  },
                  {
                      "interview_time": "14:00 - 16:00",
                      "interview_available": true
                  },
                  {
                      "interview_time": "16:00 - 18:00",
                      "interview_available": true
                  }
              ]
          }
      },
  ]
}

class InterviewManageContainer extends Component {
  state = {
    rows: [], 
    page: 0,
    rowsPerPage: this.props.rowsPerPage,
  };

  componentDidMount() {
    this.setState({
      rows: data.data
    });
  }

  onClickToShowModal = (index) => {
    alert('힝-! 속았지? 아무것도 없지롱')
  }

  render() {
    const tableData = _.map(this.state.rows, (v,k) => {
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
        return v
      })
      
    return (
      <Table
        type={'interview'}
        title={'면접시간관리'}
        rows={tableData}
        onClickRow={this.onClickToShowModal}
      />
    )
  }
}

export default InterviewManageContainer