import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableTemplate from '@material-ui/core/Table';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Pagination from './pagination/Pagination'

import Header from './header/Header'
import Body from './body/Body'

import './Table.scss'


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
    overflowX: 'auto',
    marginLeft: '24px',
    marginRight: '8px',
  },
});

class Table extends Component {
  state = {
    rows: this.props.data || [],
    currentPage: 1,
    totalPage: 0,
    rowsPerPage: 15,
  };

  onChangePage = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    const { onClick, classes, cursor, titleNav, title } = this.props;
    const { currentPage, rowsPerPage } = this.state;
    return (
      <div className={'CustomTable'}>
        <div className={'CustomTable__titlebar'}>{ title }</div>
        <div className={'CustomTable__navbar'}>
          <div>검색들어갈자리</div>
          <div>
            { titleNav }
            <ReactHTMLTableToExcel 
              className={`btn btn-danger`} 
              table="table"
              filename="dashBoard" 
              sheet="프리메드지원서" 
              buttonText="엑셀로 내보내기"
            />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <TableTemplate className={classes.table} id='table'>
            <Header columns={this.props.columns}/>
            <Body 
              cursor={cursor} 
              columns={this.props.columns} 
              data={[ ...this.props.data].splice((currentPage-1) * rowsPerPage ,rowsPerPage) } 
              onClick={onClick}
            />
          </TableTemplate>
        </div>

        <Pagination
          currentPage={this.state.currentPage}
          totalPage={Math.ceil(this.props.data.length / this.state.rowsPerPage)}
          onChangePage={this.onChangePage}
        />
      </div>
      );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(Table);