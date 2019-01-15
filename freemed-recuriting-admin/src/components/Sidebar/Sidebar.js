import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core';

import './Sidebar.css'

const styles = theme => ({
  root: {
    width: '200px',
    maxWidth: '200px',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});


class Sidebar extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className='main-img'>
          <div className='main-word'>Freemed </div>
          <img src='../../images/logo.png'/>
        </div>
        <ListItem button component={props => <Link to="/dashboard" {...props} />}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="지원현황" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BrokenImageIcon />
          </ListItemIcon>
          <ListItemText primary="지원서 관리" onClick={this.handleClick}/>
        </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button
                className={classes.nested}
                component={props => <Link to="/recruit/info" {...props} />}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="신상정보 관리" />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem
                button className={classes.nested}
                component={props => <Link to="/recruit/answer" {...props} />}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="질문답변 관리" />
              </ListItem>
            </List>
          </Collapse>
        <ListItem button
          component={props => <Link to="/interview" {...props} />}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="면접시간 관리" />
        </ListItem>
        <ListItem button
          component={props => <Link to="/question" {...props} />}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
    </div>
    )
  }
}

export default withStyles(styles)(Sidebar)