import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import DashBoardViewerContainer from './dashboard/containers/DashBoardContainer'
import RecruitManageContainer from './recruit/containers/RecruitManageContainer'
import QuestionRegistContainer from './question/containers/QuestionManageContainer'
import InterviewManageContainer from './interview/containers/InterviewManageContainer'
import DocumentManageContainer from './document/containers/DocumentManageContainer'
import NotFoundPage from '../error/NotFoundPage'

import * as Columns from 'lib/service/tableColumn';
import * as routes from 'lib/service/routes'
import './Contents.scss'

class Contents extends Component {
  render() {
    return (
      <div className="contents-board-main">
        <Switch>
          <Route exact path='/' component={ DashBoardViewerContainer } />
          <Route exact path={routes.MATCH_PATH_DASHBOARD} component={ DashBoardViewerContainer } />
          <Route exact path={routes.MATCH_PATH_RECRUIT_TYPE} render={(props) => { return <RecruitManageContainer {...props} type='applyInfo' columns={Columns.applyInfo}/>}} />
          <Route exact path={routes.MATCH_PATH_INTERVIEW} render={(props) => { return <InterviewManageContainer {...props} type= 'interview' columns={Columns.interview}/> }} />
          <Route exact path={routes.MATCH_PATH_QUESTION}  render={(props) => { return <QuestionRegistContainer {...props} type= 'question' columns={Columns.question} />}} />
          <Route exact path={routes.MATCH_PATH_DOCUMENT}  render={(props) => { return <DocumentManageContainer {...props} type= 'manage'columns={Columns.question} />}} />
          <Route component={ NotFoundPage } />
        </Switch>
      </div>
    )
  }
}

export default Contents