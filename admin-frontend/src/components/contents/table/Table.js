import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableTemplate from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Tooltip from './tooltip/Tooltip'
import Toolbar from './toolbar/Toolbar'
// import pagination from './pagination/Pagination'

import Header from './header/Header'
import Body from './body/Body'

import './Table.css'


const tableStyle = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  head: {
    width: '100%',
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
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
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
        <Toolbar title={this.props.title}/>
        <Tooltip />
          <div className={classes.tableWrapper}>
            <TableTemplate className={classes.table} id='table'>
              <Header columns={this.props.columns}/>
              <Body columns={this.props.columns} data={this.props.data}/>
            </TableTemplate>
          </div>
        </Paper>
      </div>
      );
  }
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(Table);