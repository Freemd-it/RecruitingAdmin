import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import _ from 'lodash'
import './Header.scss'

const Header = ({ columns, timeTable = null}) => {
  const timeTableKey = Object.keys(timeTable || []);
  
  return (
    <TableHead className="Header">
     
      <TableRow className="Header__contents">
        <TableCell padding="checkbox">
          <Checkbox
          />
        </TableCell>
        { 
          columns.map(column => {
            const style = {}
            if (column.width) {
              style.width = column.width;
            }
            return (<TableCell key={column.key}>{column.value}</TableCell>);
          })
        }
        { timeTable && <TableCell key={timeTableKey[0]}>{timeTableKey[0]}</TableCell> }
        {
          timeTable && _.map(timeTable[timeTableKey[0]], (time, index) => {
            return (<TableCell key={time+index}>{time}</TableCell>);
          }) 
        }
        { timeTable && <TableCell key={timeTableKey[1]}>{timeTableKey[1]}</TableCell> }
        { 
          timeTable && _.map(timeTable[timeTableKey[1]], (time, index) => {
            return (<TableCell key={time+index}>{time}</TableCell>);
          }) 
        }
      </TableRow>
    </TableHead>
  );
}

export default Header