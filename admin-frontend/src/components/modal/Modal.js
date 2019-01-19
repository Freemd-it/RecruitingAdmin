import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './Modal.scss';

const styles = theme => ({
  paper: {
    width: `50%`,
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
    const { classes, open, onModal, title, contents } = this.props;
    return (
      <Modal
        open={open} 
        onClose={(e) => onModal()} 
      >
        <div className={`CustomModal ${classes.paper}`}>
          <div className={`CustomModal__title`}>{title}</div>
          <div>{contents}</div>
        </div>
      </Modal>
    );
  }
}

CustomModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalWrapped = withStyles(styles)(CustomModal);

export default ModalWrapped;