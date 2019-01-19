import React from 'react';
import TextField from '@material-ui/core/TextField';
import './DetailCell.scss'

const DetailCell = ({colName, colValue}) => {
    return (
      <TextField
        label={colName}
        value={colValue}
        variant="outlined"
        InputProps={{ readOnly: true }}
      />
    )
  }
export default DetailCell