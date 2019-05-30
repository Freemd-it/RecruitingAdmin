import React from 'react'

import { Button } from 'reactstrap';

// TODO => 1지망, 2지망, 3지망, 불합격
const ModalRecruitFooter = ({ onClickEvaluation, onClickModalToClose }) => (
  <div className="footer-container">
    <Button color="success" outline onClick={() => onClickEvaluation({ rank : '1지망' }, this)}>1지망</Button>
    <Button color="warning" outline onClick={onClickEvaluation({ rank : '2지망' }, this)}>2지망</Button>
    <Button color="info" outline onClick={onClickEvaluation({ rank : '3지망' }, this)}>3지망</Button>
    <Button color="danger" outline onClick={onClickEvaluation({ rank : '불합격' }, this)}>불합격</Button>
    <Button color="secondary" outline onClick={onClickModalToClose}>취소</Button>
  </div>
)

export default ModalRecruitFooter