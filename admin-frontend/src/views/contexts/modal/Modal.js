import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import Footer from './footer';

import './Modal.scss'

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class CustomModal extends React.Component {
  render() {
    const { 
      open, 
      onModal, 
      title, 
      contents, 
      confirmFun = () => { onModal() },
      modalType,
    } = this.props;
    console.log('contents', contents)
    return (
      <Modal
        isOpen={open}
        centered
        size="lg"
        toggle={() => {onModal()}}>
        
        <ModalHeader toggle={() =>{onModal()}}>{ title }</ModalHeader>
        <ModalBody className="CustomModal__body">{ contents }</ModalBody>
        <Footer
          onModal={onModal}
          confirmFurm={confirmFun}
          modalType={modalType}
        />
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalWrapped = withStyles(styles)(CustomModal);

export default ModalWrapped;