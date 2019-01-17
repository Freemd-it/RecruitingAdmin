import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Piechart from './charts/PieChart/PieChart'
import RadarChart from './charts/RadarChart/RadarChart'
import Mixedchart from './charts/MixedChart/MixedChart'
import CustomTooltip from '../customtable/CustomTooltip/CustomTooltip'
import CustomToolbar from '../customtable/CustomToolbar/CustomToolbar'

import './DashBoard.css'

class DashBoard extends Component {
  render() {
    return (
      <Paper>
      <CustomToolbar numSelected={0} title="지원자 현황" />
      <div className="chart-wrapper">
        <div className="chart-container">
          <div className="chart-sub-container">
            <RadarChart className='item'/>
            <Piechart className='item'/>
          </div>
          <Mixedchart className='item'/>
        </div>
      </div>
      </Paper>
      );
  }
}

export default DashBoard