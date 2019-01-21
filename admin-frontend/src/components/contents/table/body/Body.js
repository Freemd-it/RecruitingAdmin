import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import _ from 'lodash'
import './Body.scss';

const Body = ({columns, data, rowsPerPage, onClick = () => {}, cursor = false}) => {
  if (typeof onClick !== 'function') {
    onClick = () => { };
  }

  const emptyRows = rowsPerPage - data.length;
  console.log('ee', emptyRows)
  let index = 0
  return (
    <TableBody>
      {
        data.map((item, key) => {
          let rows = []
          let cnt = 1
          let returnData = []

          rows.push(_.map(item, (itemVal, itemKey) => {
            returnData = columns.map((column, index) => {
              const value = itemVal[column.key];
              const style = {};
              if(columns.width) {
                style.width = column.width
              }
              if(value !== undefined) {
                if (typeof value === 'boolean') return <TableCell align="center" key={`${cnt++}_${itemVal}`}>{value ? 'O': ''}</TableCell>;
                else if (value instanceof Date) return <TableCell align="center" key={`${cnt++})${itemVal}`}>{moment(value).format("Y년 M월 D일")}</TableCell>;
                else return <TableCell key={`${cnt++}_${itemVal}`}>{value}</TableCell>;
              }
            });
            return returnData;
          }))
          return <TableRow className={cursor ? 'tableBodyRow__cursor' : ''} hover key={`${index++}_rows`} onClick={(e) => { onClick(item) }}>{ rows }</TableRow>
        })
      }
      {
        emptyRows > 0 && (
          <TableRow style={{height: `${48 * emptyRows}px`}}>
            <TableCell  align="center" colSpan={columns.length} />
          </TableRow>
        )
      }
    </TableBody>
  )
}   

export default Body