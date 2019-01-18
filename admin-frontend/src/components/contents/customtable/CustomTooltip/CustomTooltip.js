import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const toolTipStyle = theme => ({
  fab: {
    margin: theme.spacing.unit * 1,
    width: '20px',
    height: '20px',
  },
});

class CustomTooltip extends React.Component {
  state = {
  };

  render () {
    const { classes} = this.props;
    const { open } = this.state;
    return (
      <div className='wrapper-felx'>
        <ReactHTMLTableToExcel className={classes.sizeSmall} table="table"
          filename="dashBoard" sheet="프리메드지원서" buttonText="엑셀다운로드"/>
      </div>
    );
  }
}

  

CustomTooltip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(toolTipStyle)(CustomTooltip);