import React, { Component, Fragment } from 'react'
import DashBoard from '../DashBoard'
import * as axios from 'lib/api/chart'
import chartDefaultData from 'lib/service/chart/chartData'
import { barOption, pieOption, radarOption } from 'lib/service/chart/chartOptions'
import { barLegend, pieLegend, radarLegend } from 'lib/service/chart/chartLegend'
import _ from 'lodash'
import chartColor from 'lib/service/chart/chartColor';

const data = {
  "_id": "5c4e278fe1bb85db2a25c220",
  "batch": 20,
  "AgeMaleStats": [
      {
          "_id": "5c4e278f225e81d8508f3fa9",
          "age": 1,
          "is_male": true,
          "count": 2
      },
      {
          "_id": "5c4e278f225e81d8508f3fa8",
          "age": 1,
          "is_male": false,
          "count": 4
      }
  ],
  "UnivStats": [
      {
          "_id": "5c4e278f225e81d8508f3fa7",
          "university": "연세대학교",
          "count": 3
      },
      {
          "_id": "5c4e278f225e81d8508f3fa6",
          "university": "서울대학교",
          "count": 1
      },
      {
          "_id": "5c4e278f225e81d8508f3fa5",
          "university": "홍익대학교",
          "count": 2
      }
  ],
  "__v": 0,
  "lastUpdated": "2019년 01월 28일 06시 am"
}

class DashBoardViewerContainer extends Component {
  state = {
    chartData: data,
  }

  componentDidMount () {
   this._getData()
  }

  _getData = async () => {
    const chartData = await this._callApi()
  //   this.setState({
  //    chartData,
  //  })
  }

  _callApi = () => {
    return axios.getChartData()
      .then(res => res.data)
      .catch(err => err)
  }

  render() {
    const { pieData, radarData, barData } = chartDefaultData
    const { chartData } = this.state

    _.map(chartData, (value,key) => {
      if (key === 'AgeMaleStats') {
        barData.datasets[0].data = chartData.AgeMaleStats[0].count
        barData.datasets[1].data = chartData.AgeMaleStats[1].count
      } else if (key === 'UnivStats') {
        const count = []; const univ = [];
        chartData.UnivStats.forEach(value => {
          count.push(value.count)
          univ.push(value.university)
        })
        pieData.datasets[0].data = count
        pieData.datasets[0].backgroundColor = chartColor.slice(0,count.length)
        pieData.datasets[0].hoverBackgroundColor = chartColor.slice(0,count.length)
        pieData.labels = univ
      }
    })

    const setChartData = {
      lastUpdated: chartData.lastUpdated, 
      pie: { data: pieData, options: pieOption, legend: pieLegend  },
      bar: { data: barData, options: barOption, legend: barLegend},
      radar: { data: radarData, options: radarOption, legend: radarLegend },
    } 
    
    return (
      <Fragment>
        <DashBoard chartData={setChartData}/>
      </Fragment>
    )
  }
}

export default DashBoardViewerContainer