import React, { Component, Fragment } from 'react'
import DashBoard from '../../components/contents/dashboard/DashBoard'
import * as axiosTest from '../../lib/api/chart'

class DashBoardViewerContainer extends Component {

  async componentDidMount() {
    console.log('123123123123231')
    console.log('tttt', await axiosTest.test())
  }

  render() {
    return (
      <Fragment>
        <DashBoard />
      </Fragment>
    )
  }
}

export default DashBoardViewerContainer