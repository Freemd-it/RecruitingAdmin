import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import { 
  DashBoardViewerContainer, RecruitManageContainer, QuestionRegistContainer, InterviewManageContainer,
} from '../../containers'

import * as Columns from '../../lib/service/tableColumn';
import * as routes from '../../lib/service/routes'
import './Contents.css'

const rowsPerPage = 10;
class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route
            path={routes.MATCH_PATH_DASHBOARD}
            component={DashBoardViewerContainer}
          />
          <Route
            path={routes.MATCH_PATH_RECRUIT_TYPE}
            render={ (props) => { return <RecruitManageContainer {...props} rowsPerPage={rowsPerPage} columns={Columns.recruit}/> }} />
          <Route 
            path={ routes.MATCH_PATH_INTERVIEW }
            render={ (props) => { return <InterviewManageContainer {...props} rowsPerPage={rowsPerPage} columns={Columns.interview2}/> }} 
          />
          <Route 
            path={routes.MATCH_PATH_QUESTION} 
            render={() =>{
              return <QuestionRegistContainer rowsPerPage={rowsPerPage} columns={Columns.question2}/>
            }} 
          />
        </Switch>
      </div>
    )
  }
}

export default Contents