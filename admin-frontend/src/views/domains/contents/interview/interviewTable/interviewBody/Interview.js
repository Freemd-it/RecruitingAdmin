import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import _ from 'lodash'

import './InterviewBody.scss';

const InterviewBody = ({columns, data, onClick = () => {}, cursor = false}) => {
  if (typeof onClick !== 'function') {
    onClick = () => { };
  }
  let index = 0;
  return (
    <TableBody>
      {
        _.map(data, (value, key) => {

          let row = []
          let returnData = []
          let cnt = 1

          _.map(value, (itemVal, itemKey) => {
            returnData = columns.map((column, index) => {
              const style = {};
              if(columns.width) {
                style.width = column.width
              }
              if(itemKey === 'basic_info') {
                const value = itemVal[column.key]
                if(value !== undefined) {
                  if (value instanceof Date) return <TableCell key={`${cnt++})${itemVal}`}>{moment(value).format("Y년 M월 D일")}</TableCell>;
                  else return <TableCell key={`${cnt++}_${itemVal}`}>{value}</TableCell>;
                }
              } else if(itemKey === 'apply_info') {
                _.map(itemVal, (applyVal, applyKey) => {

                  if(applyVal !== undefined && applyKey !== 'interview_times') {
                    const value = applyVal[column.key]
                    if (value instanceof Date) return <TableCell key={`${cnt++})${applyVal}`}>{moment(value).format("Y년 M월 D일")}</TableCell>;
                    else return <TableCell key={`${cnt++}_${applyVal}`}>{value}</TableCell>;

                  } else if(applyKey === 'interview_times') {
                    applyVal.map((interviewVal, interviewIndex) => {
                      _.map(interviewVal, (detailVal, detailKey) => {
                        if (value instanceof Date) return <TableCell key={`${cnt++})${detailVal}`}>{moment(value).format("Y년 M월 D일")}</TableCell>;
                        else return <TableCell key={`${cnt++}_${detailVal}`}>{value}</TableCell>;
                      })
                    }) 
                  }
                })
              }
            })
            return <TableRow className={cursor ? 'tableBodyRow__cursor' : ''} hover key={`${index++}_rows`} onClick={(e) => { onClick(itemVal) }}>{ returnData }</TableRow>
          })
        })
      }
    </TableBody>
  )
}   

export default InterviewBody