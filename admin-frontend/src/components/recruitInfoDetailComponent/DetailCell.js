import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import './DetailCell.scss'

const DetailCell = ({colName, colValue}) => {
    return (
      <TextField
        className="DetailCell"
        label={colName}
        value={colValue}
        variant="outlined"
        InputProps={{ readOnly: true }}
      />
    )
  }

export default DetailCell;

