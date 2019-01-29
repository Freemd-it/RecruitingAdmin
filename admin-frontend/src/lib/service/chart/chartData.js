import chartColor from './chartColor'
import chartGrade from './chartGrade'
import chartUniv from './chartUniversity'

const pieData = {
  labels: [],
	datasets: [{
		data: [],
		backgroundColor: chartColor.slice(0,10),
		hoverBackgroundColor: chartColor.slice(0,10),
	}]
}

const radarData = {
  labels: chartGrade,
  datasets: [
    {
      label: '학년별 인원 분포도',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [1,1,1,1,1,1],
    },
  ]
}

const barData = {
  datasets: [{
      type: 'bar',
      label: '남성',
      data: [],
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
      label: '여성',
      data: [],
      fill: false,
      backgroundColor: '#000093',
      borderColor: '#000093',
      hoverBackgroundColor: '#000093',
      hoverBorderColor: '#000093',
      yAxisID: 'y-axis-1'
    }]
}

export default {
  barData,
  pieData,
  radarData,
}