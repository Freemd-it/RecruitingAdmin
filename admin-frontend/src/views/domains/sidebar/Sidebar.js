/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
import logo from 'static/images/logo_1.png'
import slogan from 'static/images/logo3@2x.png'
import logoutUrl from 'lib/service/redirect'
import * as routes from 'lib/service/routes'
import './Sidebar.scss'



const styles = theme => ({
  root: {
    maxWidth: '230px',
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

  logoutHandler = () => {
    localStorage.removeItem('session')
    localStorage.removeItem('token')
    window.location.assign(logoutUrl());
  }


  render() {
    const { classes } = this.props;
    const pathname = window.location.pathname;
    return (
      <div className={`${classes.root} Container`}>
        <div className='main-img'>
          <img src={logo} />
        </div>
      <div className={`ItemContainer ${pathname === routes.MATCH_PATH_DASHBOARD ? "ItemContainer__active": ""}`}> 
        <div className="ItemWrapper">
          <ListItem className={'Sidebar__item'}
            component={props => <Link to={routes.MATCH_PATH_DASHBOARD} {...props} />}>
            <ListItemIcon className={'Sidebar__icon'}>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText className={`Sidebar__menu`} primary="지원자현황" />
          </ListItem>
        </div>
      </div>
      <div className={`ItemContainer ${pathname === routes.MATCH_PATH_RECRUIT_INFORMATION ? "ItemContainer__active": ""}`}>  
        <div className="ItemWrapper">
          <ListItem className={'Sidebar__item'} focused="false" component={props => <Link to={routes.MATCH_PATH_RECRUIT_INFORMATION} {...props} />}>
            <ListItemIcon className={'Sidebar__icon'}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText className={`Sidebar__menu`} primary="지원서관리" />
          </ListItem>
        </div>
      </div>
      <div className={`ItemContainer ${pathname === routes.MATCH_PATH_INTERVIEW ? "ItemContainer__active": ""}`}>
        <div className="ItemWrapper">
          <ListItem className={'Sidebar__item'}
            component={props => <Link to={routes.MATCH_PATH_INTERVIEW} {...props} />}>
            <ListItemIcon className={'Sidebar__icon'}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText className={`Sidebar__menu`} primary="면접관리" />
          </ListItem>
        </div>
      </div>
      <div className={`ItemContainer ${pathname === routes.MATCH_PATH_QUESTION ? "ItemContainer__active": ""}`}>
        <div className="ItemWrapper">
          <ListItem className={'Sidebar__item'}
            component={props => <Link to={routes.MATCH_PATH_QUESTION} {...props} />}>
            <ListItemIcon className={'Sidebar__icon'}>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText className={`Sidebar__menu`} primary="질문관리" />
          </ListItem>
        </div>
      </div>
      <div className='main-img-footer'>
        <div className='MainFooterConitainer'>
          <img className='slogan' src={slogan} />
        </div>
      </div>
      <Button className="Logout" onClick={this.logoutHandler}>로그아웃</Button>
    </div>
    )
  }
}

export default withStyles(styles)(Sidebar)
