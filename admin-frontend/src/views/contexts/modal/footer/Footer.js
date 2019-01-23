import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Button } from 'reactstrap';

import './Footer.scss'


const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class CustomFooter extends React.Component {
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
          <Button className="item__pass" outline onClick={() => {confirmFun()}}>합격</Button>
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
      <div className='modal-footer'>
        {footerButtonGroup}
      </div>
    );
  }
}

CustomFooter.propTypes = {
  classes: PropTypes.object.isRequired,
};

const FooterWrapped = withStyles(styles)(CustomFooter);

export default FooterWrapped;