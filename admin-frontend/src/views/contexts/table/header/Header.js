import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

import './Header.scss'

const Header = ({ columns }) => {
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
      </TableRow>
    </TableHead>
  );
}

export default Header