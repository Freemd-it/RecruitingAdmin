import React from 'react';
import TableRows from 'views/contexts/table/body/tableRow'
import TableBody from '@material-ui/core/TableBody';
// import EmptyRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
import _ from 'lodash'

import './Body.scss';

const Body = ({rows, attributeData, onClickRow, onCheckRow, columns, cursor = false, type}) => {
  const bodyRows = (
    _.map(rows, (item, index) => {
      return (
        <TableRows
          type = {type}
          columns={columns}
          className={cursor ? 'tableBodyRow__cursor' : ''}
          key={item._id || `tableBodyRow__${index}`}
          item={item}
          onClick={onClickRow}
          onCheckRow={onCheckRow}
          attributeData={attributeData}
        />
      );
    })
  )
  return ( <TableBody>{ bodyRows }</TableBody> )
}   

export default Body