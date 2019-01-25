import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import './Card.scss';

const CustomCard = (props) => {
  return (
    <Card className="Card">
      <CardContent>
        <Typography gutterBottom>
          {props.title}
        </Typography>
        <Divider className="Divider"/>
        {props.content}
      </CardContent>
    </Card>
  )
}

export default CustomCard;