import React, { Component } from 'react';
import { Radar, Pie, Bar } from 'react-chartjs-2';
// import { barData, pieData, radarData} from 'lib/service/chart'
import chartData from 'lib/service/chart'
import { barOptions } from 'style/chart'

import _ from 'lodash'
import './DashBoard.scss'


class DashBoard extends Component {
  render() {
    const { pieData, barData, radarData } = chartData
    let { data } = this.props
    data = {
      pie: {
        pieData,
      },
      bar: {
        barData,
        barOptions,
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
              _.map(data, (data, key) => {
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
                            options={data.barOptions}
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