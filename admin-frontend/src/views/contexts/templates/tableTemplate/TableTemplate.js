import React from 'react'
import TableTemplate from '@material-ui/core/Table';
import './TableTemplates.scss'

const CustomTableTemplate = ({title, navigation, children, type, classes}) => {
  return (
    <div className={'CustomTable'}> 
      <div className={'CustomTable__wrapper'}>
        <div className={'CustomTable__navbar'}> {navigation} </div>
          <TableTemplate className={'CustomTable__contents'} id='table'>
            {children}
          </TableTemplate>
      </div>
    </div>
  )
}

export default CustomTableTemplate;