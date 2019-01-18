import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Piechart from './charts/PieChart/PieChart'
import RadarChart from './charts/RadarChart/RadarChart'
import Mixedchart from './charts/MixedChart/MixedChart'
import Toolbar from '../table/toolbar/Toolbar'

import './DashBoard.css'

class DashBoard extends Component {
  render() {
    const { chartData } = this.props
    console.log('dashboard', chartData)
    return (
      <Paper>
        <Toolbar title="지원자 현황" />
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
      </Paper>
      );
  }
}

export default DashBoard