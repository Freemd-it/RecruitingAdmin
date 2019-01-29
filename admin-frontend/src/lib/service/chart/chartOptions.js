import chartAge from 'lib/service/chart/chartAge'

const barOption = {
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
        labels: chartAge,
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

const radarOption = {}
const pieOption = {}

export {
  pieOption,
  radarOption,
  barOption,
}