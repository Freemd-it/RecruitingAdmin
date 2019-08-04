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
    const dateKeys = Object.keys(item.schedule || null);
    
    return (
      <TableRow key={item._id} id={item._id} onClick={(event) => onClick(event)} hover> 
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
                console.log(column.key, " : " , value)
                if(column.key === 'first') return <TableCell align="center" key={index}>{ value.department} { value.team }</TableCell>
                else if (column.key === 'second') return <TableCell align="center" key={index}>{ value.department ? value.department : ''} { value.department ? value.team : '미기입' }</TableCell>
                else if (column.key === 'is_male') return <TableCell align="center" key={index}>{value ? '남': '여'}</TableCell>
                else if (column.key === 'memo') return <TableCell align="center" key={index}>{value}</TableCell>
                else if (column.key === 'medical_field') return <TableCell align="center" key={index}>{value}</TableCell>
                else if (column.key === 'secondary_medical_field') return <TableCell align="center" key={index}>{value}</TableCell>
              } else if(type === 'interview') {

                if(column.key === 'second_department') return <TableCell align="center" key={column.key+item._id}>{value === 'undefined ' ? '미기입' : value}</TableCell>
                if(column.key === 'other_assign_medical') return <TableCell align="center" key={column.key+item._id}>{value ? 'O' : ''}</TableCell>
                if(column.key === 'other_assign_ngo') return <TableCell align="center" key={column.key+item._id}>{value ? 'O' : ''}</TableCell>

              } else if(type === 'question') {

                if(column.key === 'department') return <TableCell align="center" key={column.key+item._id}>{ organization[value].name }</TableCell>
                else if(column.key === 'team') return <TableCell align="center" key={column.key+item._id}> { searchTeam(item.department, value) } </TableCell>
                else if(column.key === 'registedDate') return <TableCell align="center" key={column.key+item._id}>{ moment(value).format('YYYY-MM-DD HH:mm:ss') }</TableCell>

              }
              return <TableCell align="center" key={column.key+item._id}>{value}</TableCell>
            } else {
              return <TableCell align="center" key={column.key+item._id}>미기입</TableCell>;
            }
          })
        }
        { dateKeys && <TableCell align="center">토요일</TableCell> }
        {
          dateKeys && item.schedule[dateKeys[0]].map((value, index) => {
            return <TableCell align="center" key={item._id+dateKeys[0]+index}>{value.interview_available ? 'O' : '' }</TableCell>
          })
        }
        { dateKeys && <TableCell align="center">일요일</TableCell> }
        {
          dateKeys && item.schedule[dateKeys[1]].map((value, index) => {
            return (<TableCell align="center" key={item._id+dateKeys[1]+index}>{value.interview_available ? 'O' : '' }</TableCell>)
          })
        }
      </TableRow>
    )
  }
}

export default TableRows

