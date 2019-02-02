import React from 'react';
import TableRow from 'views/contexts/table/body/tableRow'
import TableBody from '@material-ui/core/TableBody';
import EmptyRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import * as Columns from 'lib/service/tableColumn'
import _ from 'lodash'

import './Body.scss';

const Body = ({rows, rowsPerPage, onClickRow, columns, cursor = false, type}) => {
  const emptyRows = rowsPerPage - rows.length;
  
  const bodyRows = (
    _.map(rows, (item, index) => {
      return (<TableRow
        columns={columns}
        className={cursor ? 'tableBodyRow__cursor' : ''}
        key={item._id}
        item={item}
        onClick={() => { onClickRow(index) }}
      />)
    })
  )
  return (
    <TableBody>
      {bodyRows}
      {
        emptyRows > 0 && (
        <EmptyRow style={{height: `${48 * emptyRows}px`}}>
          <TableCell  align="center" colSpan={columns.length} />
        </EmptyRow>)
      }
    </TableBody>
  )
}   

export default Body