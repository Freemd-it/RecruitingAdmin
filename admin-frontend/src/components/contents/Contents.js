import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import { 
  DashBoardViewerContainer, RecruitManageContainer, QuestionRegistContainer, InterviewManageContainer,
} from '../../containers'

import { interview2 } from '../../lib/service/tableColumn';
import * as routes from '../../lib/service/routes'
import './Contents.css'

const rowsPerPage = 10;
class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route path={routes.MATCH_PATH_DASHBOARD} component={DashBoardViewerContainer} />
          <Route path={routes.MATCH_PATH_RECRUIT_TYPE} component={RecruitManageContainer} />
          <Route 
            path={routes.MATCH_PATH_INTERVIEW} 
            render={() => {
              return <InterviewManageContainer rowsPerPage={rowsPerPage} columns={interview2}/> 
            }} 
          />
          <Route path={routes.MATCH_PATH_QUESTION} component={QuestionRegistContainer} />
        </Switch>
      </div>
    )
  }
}

export default Contents