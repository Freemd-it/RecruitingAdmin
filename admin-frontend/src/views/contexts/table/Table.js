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
    rowsPerPage: 25,
    keyword: '검색선택'
  };

  onChangePage = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    const { onClickRow, questionAddBtn, title, rows, type } = this.props;
    const { currentPage, rowsPerPage } = this.state;
    const columns = Columns[type]
    return (
      <>
        <div className={'Table__titlebar'}>{title}</div>
        <TableContentTemplate navigation={<Navigation questionAddBtn={questionAddBtn} />}>
          <Header columns={columns}/>
          <Body
            type={type}
            columns={columns}
            rows={[ ...rows].splice((currentPage-1) * rowsPerPage , rowsPerPage) } 
            onClickRow={onClickRow}
            rowsPerPage={rowsPerPage}
          />
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