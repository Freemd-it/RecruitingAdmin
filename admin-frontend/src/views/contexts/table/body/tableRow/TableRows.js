import React, { Component } from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import organization from 'lib/service/organization'
import moment from 'moment'
import searchTeam from 'lib/sreachTeam'
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
              return <TableCell align="center" key={item._id+dateKeys[0]+index}>{value.interview_available ? 'O' : ''}</TableCell>
            })
          }
          <TableCell align="center">일요일</TableCell>
          {
            item.schedule[dateKeys[1]].map((value, index) => {
              return (
                <TableCell align="center" key={item._id+dateKeys[1]+index}>{value.interview_available ? 'O' : '' }</TableCell>)
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
            case 'first': 
              returnData = `${value.department} ${value.team}`;
            break;
            case 'second': 
              returnData = value.department ? value.department + value.team : '미기입';
            break;
            case 'is_male': 
              returnData = value ? '남': '여';
            break;
            default: // memo, medical_field, secondary_medical_field
              returnData = value;
            break;
          }
        } else if(type === 'interview') {
          switch(key) {
            case 'second_department':
              returnData = value === 'undefined ' ? '미기입' : value;
            break;
            case 'other_assign_medical':
            case 'other_assign_ngo':
              returnData = value ? 'O' : '';
            break;
            default:
              // 안나오는부분 수정해야함. 
              // console.log(value, key, item);
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

