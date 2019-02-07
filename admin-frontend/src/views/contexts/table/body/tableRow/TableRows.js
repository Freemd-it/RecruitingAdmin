import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import organization from 'lib/service/organization'
import moment from 'moment'

class TableRows extends Component {
  render() {
    const {item, columns, onClick, key} = this.props
    return (
      <TableRow key={`${key}_${item.id}`} id={item._id} onClick={(event) => onClick(event)} hover>
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
              if(column.key === 'registedDate') return <TableCell align="center" key={index}>{ moment(value).format('YYYY-MM-DD HH:mm:ss') }</TableCell>
              else if(column.key === 'department') {
                return <TableCell align="center" key={index}>{ organization[value].name }</TableCell>
              }
              // else if(column.key === 'team') return <TableCell align="center" key={index}>{ value}</TableCell>
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