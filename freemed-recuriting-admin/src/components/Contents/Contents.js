import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import { 
  DashBoardViewerContainer,
  RecruitManageContainer,
  QuestionRegistContainer,
  InterviewManageContainer,
} from '../../containers'

import './Contents.css'

class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route path='/dashboard' component={DashBoardViewerContainer} />
          <Route path='/recruit/:type' component={RecruitManageContainer} />
          {/* <Route path='/interview' component={InterviewManageContainer} /> */}
          {/* <Route path='/question' component={QuestionRegistContainer} /> */}
        </Switch>
      </div>
    )
  }
}


export default Contents