import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Tooltip from '@material-ui/core/Tooltip';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './CustomTable.css'

import CustomTooltip from './CustomTooltip/CustomTooltip'
import CustomToolbar from './CustomToolbar/CustomToolbar'
import CustomPagination from './CustomPagination/CustomPagination'

const user = {
  id: '1',
  name: 'dongsu',
  gender: 'M',
}

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


class CustomPaginationActionsTable extends React.Component {
  state = {
    rows: [
      user,
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
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
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={classes.root}>
        <CustomToolbar numSelected={0} />
        <CustomTooltip />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} id='table'>
              <TableHead className={classes.head}>
                <TableRow scope="row">
                  <TableCell align="left">id</TableCell>
                  <TableCell align="left">name</TableCell>
                  <TableCell align="left">gender</TableCell>
                  <TableCell align="left">birth</TableCell>
                  <TableCell align="left">phone</TableCell>
                  <TableCell align="left">email</TableCell>
                  <TableCell align="left">sns</TableCell>
                  <TableCell align="left">address</TableCell>
                  <TableCell align="left">학력</TableCell>
                  <TableCell align="left">경력</TableCell>
                  <TableCell align="left">특기</TableCell>
                  <TableCell align="left">1지망</TableCell>
                  <TableCell align="left">2지망</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row"> {row.id} </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                      <TableCell align="left">birth</TableCell>
                      <TableCell align="left">phone</TableCell>
                      <TableCell align="left">email</TableCell>
                      <TableCell align="left">sns</TableCell>
                      <TableCell align="left">address</TableCell>
                      <TableCell align="left">학력</TableCell>
                      <TableCell align="left">경력</TableCell>
                      <TableCell align="left">특기</TableCell>
                      <TableCell align="left">1지망</TableCell>
                      <TableCell align="left">2지망</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={13}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{ native: true }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    ActionsComponent={CustomPagination}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </Paper>
      </div>
      );
      
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(CustomPaginationActionsTable);