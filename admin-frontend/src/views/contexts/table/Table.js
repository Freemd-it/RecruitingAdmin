import React, { Component } from 'react';
import TableContentTemplate from 'views/contexts/templates/tableTemplate'
import Navigation from 'views/contexts/table/navigation'
import Header from 'views/contexts/table/header'
import Body from 'views/contexts/table/body'
import Pagination from 'views/contexts/table/pagination'
import * as Columns from 'lib/service/tableColumn'

import './Table.scss'

class Table extends Component {
  state = {
    currentPage: 1,
    totalPage: 0,
    rowsPerPage: 1000,
  };

  onChangePage = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    const userSession = JSON.parse(localStorage.getItem('user_session'))
    const { onClickRow, questionAddBtn, title, rows, type, onSearchTag, onChangeKeyword, keyword, onChangeFilterQuery, onCheckRow = ()=>{} } = this.props;
    const { currentPage, rowsPerPage } = this.state;
    const columns = Columns[type]
    return (
      <>
      <div className={'Table__header'}>
        <div className={'Table__titlebar'}>{title}</div>
      </div>
        <TableContentTemplate navigation={
          <Navigation
            questionAddBtn={questionAddBtn}
            onClickSearchTag={onSearchTag}
            onChangeKeyword={onChangeKeyword}
            onChangeFilterQuery={onChangeFilterQuery}
            keyword={keyword}
            userSession={userSession}
          />
        }>
          <Header columns={columns}/>
          {
            this.props.body || 
            <Body
              type={type}
              columns={columns}
              rows={[ ...rows].splice((currentPage-1) * rowsPerPage , rowsPerPage) } 
              onClickRow={onClickRow}
              onCheckRow={onCheckRow}
              rowsPerPage={rowsPerPage}
            />
          }
        </TableContentTemplate>
        <Pagination
          className={"Table__pagination"}
          currentPage={this.state.currentPage}
          totalPage={Math.ceil(rows.length / rowsPerPage)}
          onChangePage={this.onChangePage}
        />
      </>
      );
  }
}

export default Table