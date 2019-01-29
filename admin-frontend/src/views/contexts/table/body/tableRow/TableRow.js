import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment'
import _ from 'lodash'

class TableRows extends Component {
  render() {
    const {item, key, columns, onModalHandler, rowData} = this.props
    return (
      <TableRow key={key} onClick={onModalHandler} hover>
        {
          columns.map((column, index) => {
            const value = item[column.key]
            if (value !== undefined) {
              if (typeof value === 'boolean') {
                return <TableCell align="center">{value ? 'O': ''}</TableCell>
              }
              return <TableCell align="center">{value}</TableCell>;
            }
          })
        }
      </TableRow>
    )
  }
}

export default TableRows