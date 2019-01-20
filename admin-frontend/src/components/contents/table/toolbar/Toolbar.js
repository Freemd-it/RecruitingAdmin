import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import './Toolbar.scss';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
});


let EnhancedTableToolbar = props => {
  const { classes, title, nav } = props;
  return (
    <div>
      <Toolbar className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h6" id="tableTitle">
            { title }
          </Typography>
        </div>
      </Toolbar>
      <div className={`ToolBar__nav`}>{ nav }</div>
    </div>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(toolbarStyles)(EnhancedTableToolbar);