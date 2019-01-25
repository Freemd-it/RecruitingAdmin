import React, { Component } from 'react';
import { Radar, Pie, Bar } from 'react-chartjs-2';

import _ from 'lodash'
import './DashBoard.scss'

const pieData = {
  labels: [
		'서울대학교',
		'고려대학교',
    '연세대학교',
    '중앙대학교',
    '홍익대학교',
    '가천대학교',
    '숙명여자대학교',
	],
	datasets: [{
		data: [300, 50, 100, 100, 100, 100, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
    '#FFCE56',
		]
	}]
}

const radarData = {
  labels: ['1학년', '2학년', '3학년', '4학년', '직장인'],
  datasets: [
    {
      label: '학년별 인원 분포도',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [13, 25, 16, 18, 3]
    },
  ]
}

const barData = {
  datasets: [{
      type: 'bar',
      label: '여성',
      data: [10,5,7,2,3,45,5,6,7,0],
      fill: true,
      borderColor: '#FF5858',
      backgroundColor: '#FF5858',
      pointBorderColor: '#FF5858',
      pointBackgroundColor: '#FF5858',
      pointHoverBackgroundColor: '#FF5858',
      pointHoverBorderColor: '#FF5858',
      yAxisID: 'y-axis-2'
    },{
      type: 'bar',
      label: '남성',
      data: [10,5,7,2,3,45,5,6,7,0],
      fill: false,
      backgroundColor: '#000093',
      borderColor: '#000093',
      hoverBackgroundColor: '#000093',
      hoverBorderColor: '#000093',
      yAxisID: 'y-axis-1'
    }]
}

const options = {
  responsive: true,
  title: {
    display: true,
    text: '나이 및 성별 분포',
    fontSize: 15,
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
        labels: ['20살', '21살', '22살', '23살', '24살', '25살', '26살'],
      }
    ],
    yAxes: [{
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true
        },
        labels: {
          show: true
        }
      },{
        type: 'linear',
        display: false,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  },
}


class DashBoard extends Component {
  render() {
    let { chartData } = this.props
    chartData = {
      pie: {
        pieData,
      },
      bar: {
        barData,
        options,
      },
      radar: {
        radarData,
      },

    }
    return (
        <div className="chart-wrapper">
          <div className="title"> 지원자 현황 </div>
          <div className="chart-container">
            <div className="chart-sub-container">
            {
              _.map(chartData, (data, key) => {
                  switch(key) {
                    case 'pie':
                      return (
                        <div className="item" key={key}>
                          <Pie
                            height={150}
                            data={data.pieData}
                            options={{
                              maintainAspectRatio: false,
                              title: {
                                display: true,
                                fontSize: 15,
                                text: '학교별 분포',
                              }
                            }}
                            legend={{
                              position: 'bottom',
                              fullWidth: true,
                            }}
                          />
                      </div>
                      );
                    case 'bar':
                      return (
                        <div className="item" key={key}>
                          <Bar
                            className='bar'
                            data={data.barData}
                            options={data.options}
                            height={150}
                            legend={{
                              position: 'bottom',
                              fullWidth: true,
                            }}
                          />
                        </div>
                      );
                    case 'radar':
                      return (
                        <div className="item" key={key}>
                            <Radar
                              height={150}
                              data={data.radarData}
                              options={{
                                title: {
                                  display: true,
                                  fontSize: 15,
                                  text: '학년별 분포',
                                }
                              }}
                              legend={{
                                position: 'bottom',
                                fullWidth: true,
                              }}
                            />
                        </div>
                      )
                    default :
                      return ''
                  }
              })
            }
            </div>
          </div>
        </div>
      );
  }
}

export default DashBoard