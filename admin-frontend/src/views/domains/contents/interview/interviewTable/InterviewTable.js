import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TableTemplate from '@material-ui/core/Table';
import Navigation from 'views/contexts/table/navigation'
import Header from 'views/contexts/table/header'
import InterviewBody from './interviewBody/InterviewBody'
import Pagination from 'views/contexts/table/pagination'

import './InterviewTable.scss'


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
    const { onClick, classes, cursor, questionAddBtn, title, rows } = this.props;
    const { currentPage, rowsPerPage } = this.state;
    return (
      <>
        <div className={'CustomTable__titlebar'}>{ title }</div>
        <div className={'CustomTable'}> 
          <div className={'CustomTable__navbar'}>
            <Navigation questionAddBtn={questionAddBtn}/>
          </div>
          <div className={classes.tableWrapper}>
            <TableTemplate>
              <Header columns={this.props.columns}/>
              <InterviewBody 
                cursor={cursor} 
                columns={this.props.columns} 
                rows={[ ...rows].splice((currentPage-1) * rowsPerPage , rowsPerPage) } 
                onClick={onClick}
                rowsPerPage={rowsPerPage}
              />
            </TableTemplate>
          </div>
          <Pagination
            className={"Cutomtable__pagination"}
            currentPage={this.state.currentPage}
            totalPage={Math.ceil(rows.length / rowsPerPage)}
            onChangePage={this.onChangePage}
          />
        </div>
      </>
      );
  }
}

QuestionTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(QuestionTable);