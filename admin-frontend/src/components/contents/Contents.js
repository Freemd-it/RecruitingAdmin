import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import { 
  DashBoardViewerContainer, RecruitManageContainer, QuestionRegistContainer, InterviewManageContainer,
} from '../../containers'

import * as routes from '../../lib/service/routes'
import './Contents.css'

class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route path={routes.MATCH_PATH_DASHBOARD} component={DashBoardViewerContainer} />
          <Route path={routes.MATCH_PATH_RECRUIT_TYPE} component={RecruitManageContainer} />
          <Route path={routes.MATCH_PATH_INTERVIEW} component={InterviewManageContainer} />
          <Route path={routes.MATCH_PATH_QUESTION} component={QuestionRegistContainer} />
        </Switch>
      </div>
    )
  }
}

export default Contents