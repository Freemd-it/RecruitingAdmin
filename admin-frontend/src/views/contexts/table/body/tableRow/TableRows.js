import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import organization from 'lib/service/organization'
import moment from 'moment'
import searchTeam from 'lib/sreachTeam'

class TableRows extends Component {
  render() {
    const {item, columns, onClick, key, type, onCheckRow} = this.props
    return (
      <TableRow key={`${key}_${item.id}`} id={item._id} onClick={(event) => onClick(event)} hover> 
        {
          <TableCell 
            padding="checkbox" 
            onClick={e => e.stopPropagation()}
          >
            <Checkbox onChange={(e) => onCheckRow(e.target.checked, item._id)}/>
          </TableCell>
        }
        {
          columns.map((column, index) => {
            const value = item[column.key];
            if (value !== undefined || value !== null || value !== 0) {
              if(type === 'applyInfo') {

                if(column.key === 'first') return <TableCell align="center" key={index}>{ organization[value.department].name} { searchTeam(value.department, value.team) }</TableCell>
                else if(column.key === 'second') return <TableCell align="center" key={index}>{ value.department ? organization[value.department].name: ''} { value.department ? searchTeam(value.department, value.team) : '미기입' }</TableCell>
                else if (column.key === 'is_male') return <TableCell align="center" key={index}>{value ? '남': '여'}</TableCell>

              } else if(type === 'interview') {

                if(column.key === 'second_department') return <TableCell align="center" key={index}>{value === 'undefined ' ? '미기입' : value}</TableCell>

              } else if(type === 'question') {

                if(column.key === 'department') return <TableCell align="center" key={index}>{ organization[value].name }</TableCell>
                else if(column.key === 'team') return <TableCell align="center" key={index}> { searchTeam(item.department, value) } </TableCell>
                else if(column.key === 'registedDate') return <TableCell align="center" key={index}>{ moment(value).format('YYYY-MM-DD HH:mm:ss') }</TableCell>

              }
              return <TableCell align="center" key={index}>{value}</TableCell>
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

