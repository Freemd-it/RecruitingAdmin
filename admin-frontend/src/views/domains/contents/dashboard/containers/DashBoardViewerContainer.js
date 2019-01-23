import React, { Component, Fragment } from 'react'
import DashBoard from '../DashBoard'
import * as axios from '../../../../../lib/api/chart'

class DashBoardViewerContainer extends Component {
  state = {
    chartData: null,
  }

  componentDidMount () {
   this._getData()
  }

  _getData = async () => {
    const chartData = await this._callApi()
    this.setState({
     chartData,
   })
  }

  _callApi = () => {
    return axios.getChartData()
      .then(res => res.data)
      .catch(err => err)
  }

  render() {
    const { chartData } = this.state
    return (
      <Fragment>
        <DashBoard chartData={chartData}/>
      </Fragment>
    )
  }
}

export default DashBoardViewerContainer