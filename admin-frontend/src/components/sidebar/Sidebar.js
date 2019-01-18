import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import * as routes from '../../lib/service/routes'

import './Sidebar.css'
import logo from '../../static/images/logo.png'
import slogan from '../../static/images/slogan.png'


const styles = theme => ({
  root: {
    width: '200px',
    maxWidth: '200px',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #cccccc'
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
      <div className={classes.root}>
        <div className='main-img'>
          <img src={logo} />
          <img src={slogan} />
        </div>
        <ListItem button component={props => <Link to={routes.MATCH_PATH_DASHBOARD} {...props} />}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="지원자현황" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BrokenImageIcon />
          </ListItemIcon>
          <ListItemText primary="지원서관리" onClick={this.handleClick}/>
        </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button
                className={classes.nested}
                component={props => <Link to={routes.MATCH_PATH_RECRUIT_INFORMATION} {...props} />}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="개인정보관리" />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem
                button className={classes.nested}
                component={props => <Link to={routes.MATCH_PATH_RECRUIT_ANSWER} {...props} />}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="질문답변관리" />
              </ListItem>
            </List>
          </Collapse>
        <ListItem button
          component={props => <Link to={routes.MATCH_PATH_INTERVIEW} {...props} />}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="면접시간 관리" />
        </ListItem>
        <ListItem button
          component={props => <Link to={routes.MATCH_PATH_QUESTION} {...props} />}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="본부질문 관리" />
        </ListItem>
    </div>
    )
  }
}

export default withStyles(styles)(Sidebar)