import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
// import Tooltip from '@material-ui/core/Tooltip';
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


const Columns = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        { 
          columns.map(column => {
            return (<TableCell key={column.key}>{column.value}</TableCell>);
          }) 
        }
      </TableRow>
    </TableHead>
  );
}

const Data = ({columns, data, onClick = () => {}}) => {
  if (typeof onClick !== 'function') {
    onClick = () => {};
  }
  return (
    <TableBody>
      {
        data.map(userData => {
          const returnData = columns.map((column, index) => {
            const value = userData[column.key];
            let text;
            if (typeof  value === 'string') {
              text = value;
            } else {
              text = value ? 'O' : '';
            }
            return <TableCell>{ text }</TableCell>;
          });
          return <TableRow hover onClick={(e) => { onClick(userData) }}>{ returnData }</TableRow>
        })
      }
    </TableBody>
  )
}

const tableStyle = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    boxShadow: 'none',
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

class CustomTable extends Component {
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
        <CustomToolbar title={this.props.title}/>
        <CustomTooltip />
          <div className={classes.tableWrapper}>
            <Table className={classes.table}>
              <Columns columns={this.props.columns}/>
              <Data columns={this.props.columns} data={this.props.data} onClick={this.props.onClick}/>
            </Table>
          </div>
        </Paper>
      </div>
      );
  }
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(tableStyle)(CustomTable);