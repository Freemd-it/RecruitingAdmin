import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ExcelExportButton = () => {
  return (<ReactHTMLTableToExcel
    className={`btn btn-danger export-excel`} 
    table="table"
    filename="dashBoard" 
    sheet="프리메드지원서" 
    buttonText="엑셀로 내보내기"/>
  )
}

export default ExcelExportButton