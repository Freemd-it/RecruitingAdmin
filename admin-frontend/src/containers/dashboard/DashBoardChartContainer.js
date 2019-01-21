import React, { Component, Fragment } from 'react'
import DashBoard from '../../components/contents/dashboard/DashBoard'
import * as axiosTest from '../../lib/api/chart'

class DashBoardViewerContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieData: [],
    }
  }

  render() {
    const { pieData } = this.state
    return (
      <Fragment>
        <DashBoard data={pieData}/>
      </Fragment>
    )
  }
}

export default DashBoardViewerContainer