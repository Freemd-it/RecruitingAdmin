import React from 'react'

import { Button } from 'reactstrap';

// TODO => 1지망, 2지망, 3지망, 불합격
const ModalRecruitFooter = ({ onClickEvaluation, onClickModalToClose, selectedRow, userSession }) => (
  <div className="footer-container">
    <Button color="success" outline onClick={(e) => {
      // console.log(Object.keys(selectedRow.basic_info));
      userSession.department === selectedRow.basic_info.department
      ? onClickEvaluation(selectedRow, "1순위")
      : alert('평가 권한이 없습니다 :)')
    }}>1지망</Button>

    <Button color="warning" outline onClick={(e) => {
      userSession.department === selectedRow.basic_info.department
      ? onClickEvaluation(selectedRow, "2순위")
      : alert('평가 권한이 없습니다 :)')
    }}>2지망</Button>

    <Button color="info" outline onClick={(e) => {
      userSession.department === selectedRow.basic_info.department
      ? onClickEvaluation(selectedRow, "3순위")
      : alert('평가 권한이 없습니다 :)')
    }}>3지망</Button>

    <Button color="danger" outline onClick={(e) => {
      userSession.department === selectedRow.basic_info.department
      ? onClickEvaluation(selectedRow, "불합격")
      : alert('평가 권한이 없습니다 :)')
    }}>불합격</Button>

    <Button color="secondary" outline onClick={onClickModalToClose}>취소</Button>
  </div>
)

export default ModalRecruitFooter