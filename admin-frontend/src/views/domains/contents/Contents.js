import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import DashBoardViewerContainer from './dashboard/containers/DashBoardChartContainer'
import RecruitManageContainer from './recruit/containers/RecruitManageContainer'
import QuestionRegistContainer from './question/containers/QuestionManageContainer'
import InterviewManageContainer from './interview/containers/InterviewManageContainer'

import * as Columns from 'lib/service/tableColumn';
import * as routes from 'lib/service/routes'
import './Contents.css'

const rowsPerPage = 10;
class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route
            path={routes.MATCH_PATH_DASHBOARD}
            component={ DashBoardViewerContainer } />
          <Route
            path={routes.MATCH_PATH_RECRUIT_TYPE}
            render={(props) => { return <RecruitManageContainer {...props} rowsPerPage={rowsPerPage} columns={Columns.recruit}/> }} />
          <Route 
            path={routes.MATCH_PATH_INTERVIEW}
            render={(props) => { return <InterviewManageContainer {...props} rowsPerPage={rowsPerPage} columns={Columns.interview}/> }} />
          <Route 
            path={routes.MATCH_PATH_QUESTION} 
            render={() =>{ return <QuestionRegistContainer rowsPerPage={rowsPerPage} columns={Columns.question}/> }} />
        </Switch>
      </div>
    )
  }
}

export default Contents