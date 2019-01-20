import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import './Tooltip.scss';

class Tooltip extends React.Component {
  state = {
  };

  render () {
    return (
        <ReactHTMLTableToExcel 
          className={`btn btn-danger excel-btn`} 
          table="table"
          filename="dashBoard" 
          sheet="프리메드지원서" 
          buttonText="엑셀로 내보내기"
        />
    );
  }
}

export default Tooltip;