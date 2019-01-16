import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
    'Yellow',
    'Yellow',
    'Yellow',
    'Yellow',
    'Yellow',
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
    '#FFCE56'
		]
	}]
};

class PieChart extends Component {
  
  render() {
    return (
      <div className='pie-wrapper'>
        <h3> 학교별 본포도 </h3>
        <Pie 
          data={data}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default PieChart