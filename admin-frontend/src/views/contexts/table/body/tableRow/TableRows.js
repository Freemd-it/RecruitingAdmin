import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

class TableRows extends Component {
  render() {
    const {item, columns, onClick, key} = this.props
    return (
      <TableRow key={`${key}_${item.id}`} id={item._id} onClick={event => onClick(event, key)} hover>
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
                if(column.key === 'is_male') return <TableCell align="center" key={index}>{value ? '남': '여'}</TableCell>
                else return <TableCell align="center" key={index}>{value ? 'O': ''}</TableCell>
              }
              return <TableCell align="center" key={index}>{value}</TableCell>;
            } else {
              return <TableCell align="center" key={index}>미기입</TableCell>;
            }
          })
        }
      </TableRow>
    )
  }
}

export default TableRows