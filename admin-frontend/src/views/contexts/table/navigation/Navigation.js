import React, { Component } from 'react'
import Filter from 'views/contexts/table/navigation/filter'
import ExcelExportButton from './excelExportButton'
import './Navigation.scss'

class Navigation extends Component {
  
  render() {
    const { questionAddBtn, onClickSearchTag, onChangeKeyword, keyword, onChangeFilterQuery, userSession } = this.props
    return (
      <div className="Navigation">
        <div className="Navigation__divide">
          <Filter
            onClickSearchTag={onClickSearchTag}
            onChangeKeyword={onChangeKeyword}
            onChangeFilterQuery={onChangeFilterQuery}
            keyword={keyword}
          />
        </div>
        <div className="Navigation__divide">
            {questionAddBtn}
            { userSession.department === 900 ? <ExcelExportButton /> : null}
        </div>
      </div>
    )
  }
} 


export default Navigation