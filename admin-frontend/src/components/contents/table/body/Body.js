import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Body = ({columns, data, onClick = () => {}, cursor = false}) => {
  if (typeof onClick !== 'function') {
    onClick = () => { console.log('Hi!')};
  }
  return (
    <TableBody>
      {
        data.map((item, key) => {
          const returnData = columns.map((column, index) => {
            const value = item[column.key];
            if (typeof value === 'string') return <TableCell key={index}>{value}</TableCell>;
            else  return <TableCell key={index}>{value ? 'O' : ''}</TableCell>;
          });
          return <TableRow className={cursor ? 'tableBodyRow__cursor' : ''} hover key={key} onClick={() => onClick(item)}>{ returnData }</TableRow>
        })
      }
    </TableBody>
  )
}

export default Body