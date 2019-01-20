import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableTemplate from '@material-ui/core/Table';
import Tooltip from './tooltip/Tooltip'
import Toolbar from './toolbar/Toolbar'
// import pagination from './pagination/Pagination'

import Header from './header/Header'
import Body from './body/Body'
import InterviewBody from './interviewBody/InterviewBody'

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
    page: 0,
    rowsPerPage: 10,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { onClick, classes, cursor, titleNav, type } = this.props;
    return (
      <div className={'CustomTable'}>
        <Toolbar 
          title={this.props.title} 
          nav={
            <>
              { titleNav }
              <Tooltip/>
            </>
          }
        />
        <div className={classes.tableWrapper}>
          <TableTemplate className={classes.table} id='table'>
            <Header columns={this.props.columns}/>
            {
              type !=='interview'
              ? <Body cursor={cursor} columns={this.props.columns} data={this.props.data} onClick={onClick}/>
              : <InterviewBody cursor={cursor} columns={this.props.columns} data={this.props.data} onClick={onClick}/>
            }
          </TableTemplate>
        </div>
      </div>
      );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(Table);