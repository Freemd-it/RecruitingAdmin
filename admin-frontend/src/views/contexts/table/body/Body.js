import React from 'react';
import TableRow from 'views/contexts/table/body/tableRow'
import TableBody from '@material-ui/core/TableBody';
import EmptyRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import * as Columns from 'lib/service/tableColumn'
import _ from 'lodash'

import './Body.scss';

const Body = ({rows, rowsPerPage, onDetailClick, cursor = false, type}) => {
  const emptyRows = rowsPerPage - rows.length;
  
  const unionArray = (data, type) => {
      let result = {};
      _.forEach(data, (value, key) => {
          if (key === 'basic_info') {
            result = value
          }
        })
        return result
      }
  
  const bodyRows = (
    _.map(rows, (item, index) => {
      console.log('item', item)
      const rowData = item
      if(type === 'information') item = unionArray(item, type)
      return (<TableRow
        columns={Columns[type]}
        className={cursor ? 'tableBodyRow__cursor' : ''}
        key={rows.id}
        onModalHandler={(e) => { onDetailClick(rowData) }}
        item={item}
        rowData={rowData}
      />)
    })
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

export default Body