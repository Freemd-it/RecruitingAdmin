import React from 'react';
import TableRow from 'views/contexts/table/body/tableRow'
import TableBody from '@material-ui/core/TableBody';
import EmptyRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import * as Columns from 'lib/service/tableColumn'
import _ from 'lodash'

import './QuestionBody.scss';

const QuestionBody = ({rows, rowsPerPage, onClick, cursor = false, type}) => {
  const emptyRows = rowsPerPage - rows.length;
  const bodyRows = (
    _.map(rows, (item, index) => (
      <TableRow
        columns={Columns[type]}
        className={cursor ? 'tableBodyRow__cursor' : ''}
        key={rows.id}
        onModalHandler={(e) => { onClick(item) }}
        item={item}
      />))
    )
  return (
    <TableBody>
      {bodyRows}
      {
        emptyRows > 0 && (
        <EmptyRow style={{height: `${48 * emptyRows}px`}}>
          <TableCell  align="center" colSpan={Columns[type].length} />
        </EmptyRow>)
      }
    </TableBody>
  )
}   

export default QuestionBody