import { getProject } from 'lib/api/project';
import { getRecruitMeta, deleteRecruitMeta } from 'lib/api/recruitmeta';
import React, { Component } from 'react';
import Projects from '../components/projects/projects';
import Recruitmetas from '../components/recruitmetas/recruitmetas';
import './RecruitmetaContainer.scss';
import { Map, List } from 'immutable';

class RecruitmetaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        projects: List([]),
        recruitMetas: List([]),
      })
    };
  }

  componentDidMount() {
    getRecruitMeta(this);
    getProject(this);
  }

  handleRecruitMetaDelete = (e, index) => {
    const recruitMetaId = this.state.data.getIn(['recruitMetas', index]).toJS()._id;
    console.log('delete recruit meta', recruitMetaId);
    deleteRecruitMeta(this, recruitMetaId);
    getRecruitMeta(this);
  }

  render() {
    document.body.style.overflow = "";
    return (
      <div className="root_container">
        <Projects 
          projects={this.state.data.get('projects')} />
        <Recruitmetas 
          recruitMetas={this.state.data.get('recruitMetas')}
          handleRecruitMetaDelete={this.handleRecruitMetaDelete}
        />
      </div>
    );
  }
}

export default RecruitmetaContainer;
