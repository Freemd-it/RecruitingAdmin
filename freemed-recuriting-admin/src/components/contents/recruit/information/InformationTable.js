import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CustomTooltip from '../../customtable/CustomTooltip/CustomTooltip'
import CustomToolbar from '../../customtable/CustomToolbar/CustomToolbar'
import CustomPagination from '../../customtable/CustomPagination/CustomPagination'
import * as tableColumn from '../../../../lib/service/tableColumn'

import _ from 'lodash'


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


class InformationTable extends Component {
  
  render() {
    const { 
      classes,
      rows,
      rowsPerPage,
      page,
      handleChangePage,
      handleChangeRowsPerPage,
      elements,
    } = this.props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={classes.root}>
        <CustomToolbar numSelected={0} title="개인정보관리" />
        <CustomTooltip />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} id='table'>
              <TableHead className={classes.head}>
                <TableRow scope="row">
                {
                  tableColumn.information.map((value, index) => {
                    return <TableCell>{value}</TableCell>
                  })
                }
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row"> {row.id} </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={tableColumn.information.length} />
                  </TableRow>
                )}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    colSpan={tableColumn.information.length}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{ native: true }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
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

InformationTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(InformationTable);