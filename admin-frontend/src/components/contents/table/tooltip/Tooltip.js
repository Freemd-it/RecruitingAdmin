import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Modal from '../../question/Modal/Modal'

import BasicTooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const toolTipStyle = theme => ({
  fab: {
    margin: theme.spacing.unit * 1,
    width: '20px',
    height: '20px',
  },
});

class Tooltip extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    const { classes} = this.props;
    const { open } = this.state;
    return (
      <div className='wrapper-felx'>
        <ReactHTMLTableToExcel className={classes.sizeSmall} table="table"
          filename="dashBoard" sheet="프리메드지원서" buttonText="엑셀"/>
  
        <BasicTooltip title="Add" aria-label="Add" size="small" className="items" >
          <Fab color="primary" className={classes.sizeSmall} onClick={this.handleOpen}>
            <AddIcon />
          </Fab>
        </BasicTooltip>
        { open && <Modal open={this.state.open} onClose={this.handleClose}/>}
      </div>
    );
  }
}

  

Tooltip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(toolTipStyle)(Tooltip);