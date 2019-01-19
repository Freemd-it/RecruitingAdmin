import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  },
});

class CustomModal extends React.Component {
  state = {
    style: {
      top: 0,
      left: 0,
    }
  } 

  componentDidMount() {
    
  }

  render() {
    const { classes, open, onModal, title, contents } = this.props;
    return (
      <Modal open={open} onClose={onModal}>
        <div  style={this.state.style} className={classes.paper} >
          <div>{title}</div>
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