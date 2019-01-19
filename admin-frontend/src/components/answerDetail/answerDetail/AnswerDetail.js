import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// import './DetailCell.scss'

const styles = theme => ({
  textField: {
    width: `100%`,
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
  },
});

const InputProps = {
  readOnly: true,
  multiline: true,
}

const AnswerDetail = ({classes, colName, colValue}) => {
    return (
        <TextField
          className={classes.textField}
          label={colName}
          value={colValue}
          margin="normal"
          variant="outlined"
          InputProps={InputProps}
        />
    )
  }

  export default withStyles(styles)(AnswerDetail);

