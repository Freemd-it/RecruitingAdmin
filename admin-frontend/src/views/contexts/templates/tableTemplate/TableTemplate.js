import React from 'react'
import TableTemplate from '@material-ui/core/Table';
import './TableTemplates.scss'

const CustomTableTemplate = ({title, navigation, children, type, classes}) => {
  return (
    <div className={'CustomTable'}> 
      {navigation}
      <div className={'CustomTable__wrapper'}>
          <TableTemplate className={'CustomTable__contents'} id='table'>
            {children}
          </TableTemplate>
      </div>
    </div>
  )
}

export default CustomTableTemplate;