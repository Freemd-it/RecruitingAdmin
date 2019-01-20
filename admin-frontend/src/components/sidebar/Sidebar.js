/* eslint-disable */

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

import './Sidebar.scss'
import logo from '../../static/images/logo_1.png'
import slogan from '../../static/images/logo3@2x.png'


const styles = theme => ({
  root: {
    width: '200px',
    maxWidth: '200px',
    backgroundColor: '#FF5858',
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
      <div className={`${classes.root} Container`}>
        <div className='main-img'>
          <img src={logo} />
        </div>

      <div className="ItemContainer"> 
        <ListItem button className={'Sidebar__item'}
          component={props => <Link to={routes.MATCH_PATH_DASHBOARD} {...props} />}>
          <ListItemIcon className={'Sidebar__icon'}>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText className={`Sidebar__menu`} primary="지원자현황" />
        </ListItem>
      </div>
      <div className="ItemContainer"> 
        <ListItem button className={'Sidebar__item'}>
          <ListItemIcon className={'Sidebar__icon'}>
            <BrokenImageIcon />
          </ListItemIcon>
          <ListItemText className={`Sidebar__menu`} primary="지원서관리" onClick={this.handleClick}/>
        </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button
                className={classes.nested}
                component={props => <Link to={routes.MATCH_PATH_RECRUIT_INFORMATION} {...props} />}>
                <ListItemIcon className={'Sidebar__icon'}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText className={`Sidebar__menu`} inset primary="개인정보관리" />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem
                button className={classes.nested}
                component={props => <Link to={routes.MATCH_PATH_RECRUIT_ANSWER} {...props} />}>
                <ListItemIcon className={'Sidebar__icon'}>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText className={`Sidebar__menu`} inset primary="질문답변관리" />
              </ListItem>
            </List>
          </Collapse>
      </div>
      <div className="ItemContainer"> 
        <ListItem button className={'Sidebar__item'}
          component={props => <Link to={routes.MATCH_PATH_INTERVIEW} {...props} />}>
          <ListItemIcon className={'Sidebar__icon'}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText className={`Sidebar__menu`} primary="면리관리" />
        </ListItem>
      </div>
      <div className="ItemContainer">
        <ListItem button className={'Sidebar__item'}
          component={props => <Link to={routes.MATCH_PATH_QUESTION} {...props} />}>
          <ListItemIcon className={'Sidebar__icon'}>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText className={`Sidebar__menu`} primary="질문관리" />
        </ListItem>
      </div>
        <div className='main-img-footer'>
          <div className='MainFooterConitainer'>
            <img src={slogan} />
          </div>
        </div>
    </div>
    )
  }
}

export default withStyles(styles)(Sidebar)