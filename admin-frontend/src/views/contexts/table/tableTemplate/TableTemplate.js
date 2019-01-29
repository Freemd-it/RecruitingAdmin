import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import TableTemplate from '@material-ui/core/Table';
import * as Columns from 'lib/service/tableColumn';

const tableStyle = theme => ({
  head: {
    width: '100%',
  },
  table: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    minWidth: 500,
  },
  tableWrapper: {
    height: '75vh',
    overflowY: 'auto',
    marginLeft: '20px',
    marginRight: '20px',
    borderLeft: '1px solid #cccccc',
    borderRight: '1px solid #cccccc',
  },
});

const CustomTableTemplate = ({title, navigation, children, type, classes}) => {
  return (
    <div className={'CustomTable'}> 
      <div className={classes.tableWrapper}>
        <div className={'CustomTable__navbar'}> {navigation} </div>
          <TableTemplate className={classes.table} id='table'>  
            {children}
          </TableTemplate>
      </div>
    </div>
  )
}

export default withStyles(tableStyle)(CustomTableTemplate);