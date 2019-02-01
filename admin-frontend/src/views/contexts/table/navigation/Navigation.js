import React, { Component } from 'react'
import Filter from 'views/contexts/table/navigation/filter'
import ExcelExportButton from './excelExportButton'
import './Navigation.scss'

class Navigation extends Component {
  render() {
    const { questionAddBtn } = this.props
    return (
      <div className="Navigation">
        <div className="Navigation__divide">
          <Filter />
        </div>
        <div className="Navigation__divide">
            {questionAddBtn}
            <ExcelExportButton />
        </div>
      </div>
    )
  }
} 


export default Navigation