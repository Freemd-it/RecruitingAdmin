import React, { Component } from 'react';
import Piechart from './charts/pieChart'
import RadarChart from './charts/radarChart'
import Mixedchart from './charts/mixedChart'

import './DashBoard.css'

class DashBoard extends Component {
  render() {
    const { chartData } = this.props
    return (
      <div>
        <div className="chart-wrapper">
          <div className="chart-container">
            <div className="chart-sub-container">
              <RadarChart
                className='item'
                // data={chartData.radarData}
              />
              <Piechart
                className='item'
                // data={chartData.pieData}
              />
            </div>
            <Mixedchart
              className='item'
              // data={chartData.mixedData}
            />
          </div>
        </div>
      </div>
      );
  }
}

export default DashBoard