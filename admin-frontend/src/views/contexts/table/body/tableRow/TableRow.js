import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class TableRows extends Component {
  render() {
    const {item, key, columns, onClick } = this.props
    return (
      <TableRow key={key} onClick={onClick} hover>
        {
          <TableCell padding="checkbox">
            <Checkbox
            />
          </TableCell>
        }
        {
          columns.map((column, index) => {
            const value = item[column.key]
            if (value !== undefined) {
              if (typeof value === 'boolean') {
                return <TableCell align="center" key={column.key}>{value ? 'O': ''}</TableCell>
              }
              return <TableCell align="center" key={column.key}>{value}</TableCell>;
            } else {
              return <TableCell align="center" key={column.key}>미기입</TableCell>;
            }
          })
        }
      </TableRow>
    )
  }
}

export default TableRows