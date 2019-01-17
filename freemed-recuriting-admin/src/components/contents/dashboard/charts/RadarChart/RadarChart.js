import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

import './RadarChart.css'

const data = {
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
    // {
    //   label: 'My Second dataset',
    //   backgroundColor: 'rgba(255,99,132,0.2)',
    //   borderColor: 'rgba(255,99,132,1)',
    //   pointBackgroundColor: 'rgba(255,99,132,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(255,99,132,1)',
    //   data: [28, 48, 40, 19, 96]
    // }
  ]
};

class RadarChart extends Component {
  render() {
    return (
      <div>
        <h3> 나이별 분포도 </h3>
        <div className='rader-wrapper'>
          <Radar data={data} />
        </div>
      </div>
    );
  }
}

export default RadarChart
