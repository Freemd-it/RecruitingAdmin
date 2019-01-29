import React from 'react'

import { Button } from 'reactstrap';

const ModalRecruitFooter = ({ onConfirmModal, onCancelModal }) => (
  <div className="footer-container">
    <Button className="item__confirm" color="danger" onClick={onConfirmModal}>확인</Button>
    <Button className="item__cancle" color="secondary" outline onClick={onCancelModal}>취소</Button>
  </div>
)

export default ModalRecruitFooter