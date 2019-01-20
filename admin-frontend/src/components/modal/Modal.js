import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// import CloseIcon from '@material-ui/icons/Close';
import { 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Button,
} from 'reactstrap';
import './Modal.scss';

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class CustomModal extends React.Component {
  state = {
  } 

  componentDidMount() {
  }

  render() {
    const { 
      open, 
      onModal, 
      title, 
      contents, 
      confirmMessage = '확인',
      cencleMessage = '취소',
      confirmFun = () => { onModal() },
      isCancel = true 
    } = this.props;

    return (
      <Modal
        isOpen={open}
        centered
        size="lg"
        toggle={() => {onModal()}}
      >
        <ModalHeader toggle={() =>{onModal()}}>{ title }</ModalHeader>
        <ModalBody className="CustomModal__body">{ contents }</ModalBody>
        <ModalFooter>
          <Button className="CustomModal__body__confirm" color="danger" onClick={confirmFun}>{ confirmMessage }</Button>
          { isCancel && <Button className="CustomModal__body__cencle" color="danger" outline onClick={() => onModal()}>{ cencleMessage }</Button> }
        </ModalFooter>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalWrapped = withStyles(styles)(CustomModal);

export default ModalWrapped;