import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './DetailCell.scss'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

const DetailCell = ({classes, colName, colValue}) => {
    return (
        <TextField
          className={`${classes.textField} DetailCell` }
          label={colName}
          value={colValue}
          margin="normal"
          variant="outlined"
          InputProps={{ readOnly: true }}
        />
    )
  }

  export default withStyles(styles)(DetailCell);

