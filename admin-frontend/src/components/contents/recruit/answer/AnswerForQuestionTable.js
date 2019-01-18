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

import Tooltip from '../../table/tooltip/Tooltip'
import Toolbar from '../../table/toolbar/Toolbar'
import pagination from '../../table/pagination/Pagination'
import * as tableColumn from '../../../../lib/service/tableColumn'

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


class AnswerForQuestionTable extends Component {
  
  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = this.props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div>
        <Paper className={classes.root}>
        <Toolbar numSelected={0} title="질문답변관리"/>
        <Tooltip />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} id='table'>
              <TableHead className={classes.head}>
                <TableRow scope="row">
                {/* {
                  tableColumn.answer.map((value, index) => {
                    return <TableCell>{value}</TableCell>
                  })
                } */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row"> {row.id} </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={10} />
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
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={pagination}
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

AnswerForQuestionTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(AnswerForQuestionTable);