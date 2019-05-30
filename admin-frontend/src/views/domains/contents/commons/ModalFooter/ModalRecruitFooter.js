import React from 'react'

import { Button } from 'reactstrap';

// TODO => 1지망, 2지망, 3지망, 불합격
const ModalRecruitFooter = ({ onClickEvaluation, onClickModalToClose, selectedRow }) => (
  <div className="footer-container">
    <Button color="success" outline onClick={(e) => onClickEvaluation(selectedRow, "1순위")}>1지망</Button>
    <Button color="warning" outline onClick={(e, body) => onClickEvaluation(selectedRow, "2순위")}>2지망</Button>
    <Button color="info" outline onClick={(e, body) => onClickEvaluation(selectedRow, "3순위")}>3지망</Button>
    <Button color="danger" outline onClick={(e, body) => onClickEvaluation(selectedRow, "불합격")}>불합격</Button>
    <Button color="secondary" outline onClick={onClickModalToClose}>취소</Button>
  </div>
)

export default ModalRecruitFooter