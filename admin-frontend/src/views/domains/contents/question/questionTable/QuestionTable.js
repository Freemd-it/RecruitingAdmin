import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableContentTemplate from 'views/contexts/table/tableTemplate'
import Navigation from 'views/contexts/table/navigation'
import Header from 'views/contexts/table/header'
import QuestionBody from './questionBody/QuestionBody'
import Body from 'views/contexts/table/body'
import Pagination from 'views/contexts/table/pagination'
import * as Columns from 'lib/service/tableColumn'

import './QuestionTable.scss'


const tableStyle = theme => ({
  head: {
    width: '100%',
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    minWidth: 500,
  },
  tableWrapper: {
    height: '75vh',
    overflowY: 'auto',
    marginLeft: '20px',
    marginRight: '20px',
    borderLeft: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
  },
});

class QuestionTable extends Component {
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
    const { onClick, questionAddBtn, title, rows, type } = this.props;
    const { currentPage, rowsPerPage } = this.state;
    const columns = Columns[type]
    return (
      <>
        <div className={'CustomTable__titlebar'}>{title}</div>
        <TableContentTemplate navigation={<Navigation className={'CustomTable__navbar'} questionAddBtn={questionAddBtn} />}>
          <Header columns={columns}/>
          <Body 
            type={type}
            rows={[ ...rows].splice((currentPage-1) * rowsPerPage , rowsPerPage) } 
            onClick={onClick}
            rowsPerPage={rowsPerPage}
          />
        </TableContentTemplate>
        <Pagination
          className={"Cutomtable__pagination"}
          currentPage={this.state.currentPage}
          totalPage={Math.ceil(rows.length / rowsPerPage)}
          onChangePage={this.onChangePage}
        />
      </>
      );
  }
}

QuestionTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(QuestionTable);