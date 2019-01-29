import React from 'react'

import { Button } from 'reactstrap';

const ModalRecruitFooter = ({ 합격버튼함수, 불합격버튼함수, 보류버튼함수, 취소버튼함수 }) => (
  <div className="footer-container">
    <Button className="item__pass" outline onClick={합격버튼함수}>합격</Button>
    <Button className="item__drop" color="danger" outline onClick={불합격버튼함수}>불합격</Button>
    <Button className="item__postpone" color="warning" outline onClick={보류버튼함수}>보류</Button>
    <Button className="item__cancel" color="secondary" outline onClick={취소버튼함수}>취소</Button>
  </div>
)

export default ModalRecruitFooter