import React, { Component } from 'react'
import Filter from 'views/contexts/table/navigation/filter'
import ExcelExportButton from './excelExportButton'


class Navigation extends Component {
  render() {
    const { questionAddBtn } = this.props
    return (
      <>
        <Filter/>
        {questionAddBtn}
        <ExcelExportButton />
      </>
    )
  }
} 


export default Navigation