import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import moment from 'moment'
import { attribute } from 'postcss-selector-parser';

class TableRows extends Component {
  render() {
    const {
      item, 
      columns, 
      onClick, 
      type, 
      onCheckRow,
      attributeData
    } = this.props
    let dateKeys = null;
    let interviewData = null;
    const dataSet = {};

    attributeData.forEach((attribute) => {
      dataSet[attribute.key] = item[attribute.value];
    });

    if(type === 'interview') {
      dateKeys = Object.keys(item.schedule || null);
      interviewData = (
        <>
          <TableCell align="center">토요일</TableCell>
          {
            item.schedule[dateKeys[0]].map((value, index) => {
              return (
                <TableCell 
                  align="center" 
                  key={item._id+dateKeys[0]+index}
                >
                {value === 0 ? '' : 'O'}
              </TableCell>
              )
            })
          }
          <TableCell align="center">일요일</TableCell>
          {
            item.schedule[dateKeys[1]].map((value, index) => {
              return (
                <TableCell 
                  align="center" 
                  key={item._id+dateKeys[1]+index}
                >
                {value === 0 ? '' : 'O'}
              </TableCell>
              );
            })
          }
        </>
      )
    }
    
    const cellData = columns.map((column, index) => {
      const { key } = column;
      const value = item[key];
      let returnData = null;
      if (value !== undefined || value !== null || value !== 0) {
        if(type === 'applyInfo') {
          switch(key) {
            case 'departmentName_1': 
              returnData = `${value} ${item['teamName_1']}`;
            break;
            case 'departmentName_2': 
              returnData = value ? `${value} ${item['teamName_2']}` : '미기입';
            break;
            case 'isMale': 
              returnData = value ? '남': '여';
            break;
            default:
              returnData = value;
            break;
          }
        } else if(type === 'interview') {
          switch(key) {
            case 'department_1':
              returnData = `${item['departmentName_1']} ${item['teamName_1']}`;
              break;
            case 'department_2':
              returnData = `${item['departmentName_2']} ${item['teamName_2']}`;
            break;
            case 'otherAssignMedical':
            case 'otherAssignNgo':
              returnData = value ? 'O' : '';
            break;
            default:
              returnData = value;
            break;
          }
        } else if(type === 'question') {
          switch(key) {
            case 'registerDate':
              returnData = moment(value).format('YYYY-MM-DD HH:mm:ss');
            break;
            case 'type':
              returnData = value === 101 ? '텍스트' : value === 102 ? '파일첨부' : '선택';
            break;
            default: 
              returnData = value;
            break;
          }
        }
      } 

      return (
        <TableCell 
          align="center" 
          key={key + (item._id || index)}
        >
          { returnData || '미기입' }
        </TableCell>
      );

    });

    return (
      <TableRow 
        id={item._id} 
        onClick={onClick} 
        { ...dataSet }
        hover
      > 
        <TableCell 
          padding="checkbox" 
          onClick={e => e.stopPropagation()}
        >
          <Checkbox 
            onChange={(e) => onCheckRow(e.target.checked, item._id)}
          />
        </TableCell>
        { cellData }
        { interviewData }
      </TableRow>
    )
  }
}

export default TableRows

