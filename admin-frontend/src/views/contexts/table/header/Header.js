import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Header = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
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