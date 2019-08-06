import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import './Modal.scss'

class CustomModal extends React.Component {
  render() {
    const { open, onClose, onClosed = () => {}, title, contents, footer } = this.props;
    return (
      <Modal
        className="CustomModal"
        isOpen={open}
        centered
        size="lg"
        toggle={onClose}
        onClosed={onClosed}>
        <ModalHeader toggle={onClose}>{title}</ModalHeader>
        <ModalBody className="CustomModal__body">
          {contents}
        </ModalBody>
        <div className="CustomModal__footer">
          {footer}
        </div>
      </Modal>
    );
  }
}

export default CustomModal;