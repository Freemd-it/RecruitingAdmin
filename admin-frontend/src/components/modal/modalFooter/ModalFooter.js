import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { ModalFooter, Button } from 'reactstrap';
import './ModalFooter.scss'


const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class CustomModalFooter extends React.Component {
  state = {

  } 

  componentDidMount() {
  }


  render() {
    const { 
      onModal,
      confirmFun = () => { onModal() },
      modalType,
      isCancel = true 
    } = this.props;

    let footerButtonGroup
    if(modalType === 'recruit') {
      footerButtonGroup =(
        <div className="footer-container">
          <Button className="item__pass" color="success"  outline onClick={() => {confirmFun()}}>합격</Button>
          <Button className="item__drop" color="danger" outline onClick={() => {confirmFun()}}>불합격</Button>
          <Button className="item__postpone" color="warning" outline onClick={() => {confirmFun()}}>보류</Button>
          <Button className="item__cancel" color="secondary" outline onClick={confirmFun}>취소</Button>
        </div>
      )
    } else {
      footerButtonGroup =(
        <div className="footer-container">
          <Button className="item__confirm" color="danger" onClick={() => {confirmFun()}}>확인</Button>
          <Button className="item__cancle" color="secondary" outline onClick={() => onModal()}>취소</Button>
        </div>
      )
    }

    return (
      <ModalFooter>
        {footerButtonGroup}
      </ModalFooter>
    );
  }
}

CustomModalFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ModalFooterWrapped = withStyles(styles)(CustomModalFooter);

export default ModalFooterWrapped;