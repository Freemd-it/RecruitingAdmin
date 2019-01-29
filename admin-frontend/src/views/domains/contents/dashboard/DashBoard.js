import React, { Component } from 'react';
import { Radar, Pie, Bar } from 'react-chartjs-2';
import './DashBoard.scss'

class DashBoard extends Component {
  render() {
    const { pie, radar, bar } = this.props.chartData
    
    const pieChart = (
      <div className="item" key={1}>
        <Pie
          height={150}
          data={pie.data}
          options={pie.options}
          legend={pie.legend}
        />
      </div>
    )

    const radarChart = (
      <div className="item" key={2}>
          <Radar
            height={150}
            data={radar.data}
            options={radar.options}
            legend={radar.legend}
          />
      </div>
    )

    const barChart = (
      <div className="item" key={3}>
        <Bar
          className='bar'
          data={bar.data}
          options={bar.options}
          height={150}
          legend={bar.legend}
        />
      </div>
    );

    return (
        <div className="chart-wrapper">
          <div className="title"> 지원자 현황 - ({this.props.chartData.lastUpdated})</div>
          <div className="chart-container">
            <div className="chart-sub-container">
              {pieChart}
              {/* {barChart} */}
              {radarChart}
            </div>
          </div>
        </div>
      );
  }
}

export default DashBoard