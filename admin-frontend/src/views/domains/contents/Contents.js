import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import DashBoardViewerContainer from './dashboard/containers/DashBoardContainer'
import RecruitManageContainer from './recruit/containers/RecruitManageContainer'
import QuestionRegistContainer from './question/containers/QuestionManageContainer'
import InterviewManageContainer from './interview/containers/InterviewManageContainer'

import * as Columns from 'lib/service/tableColumn';
import * as routes from 'lib/service/routes'
import './Contents.css'

class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        
        <Switch>
          <Route
            exact path='/'
              component={ DashBoardViewerContainer } />
          <Route
            path={routes.MATCH_PATH_DASHBOARD}
            component={ DashBoardViewerContainer } />
          <Route
            path={routes.MATCH_PATH_RECRUIT_TYPE}
            render={(props) => { return <RecruitManageContainer {...props} columns={Columns.recruit}/> }} />
          <Route 
            path={routes.MATCH_PATH_INTERVIEW}
            render={(props) => { return <InterviewManageContainer {...props} columns={Columns.interview}/> }} />
          <Route 
            path={routes.MATCH_PATH_QUESTION} 
            render={() =>{ return <QuestionRegistContainer columns={Columns.question}/> }} />
        </Switch>
      </div>
    )
  }
}

export default Contents