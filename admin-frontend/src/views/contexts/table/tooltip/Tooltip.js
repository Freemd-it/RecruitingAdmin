import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './Tooltip.scss';

class Tooltip extends React.Component {
  render () {
    return (
        <ReactHTMLTableToExcel 
          className={`btn btn-danger excel-btn`} 
          table="table"
          filename="프리메드 지원서" 
          sheet="프리메드 지원서" 
          buttonText="엑셀로 내보내기"
        />
    );
  }
}

export default Tooltip;