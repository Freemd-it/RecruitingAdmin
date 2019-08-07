import { getProject } from 'lib/api/project';
import { getRecruitMeta } from 'lib/api/recruitmeta';
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
        projects: List([])
      }),
      recruitmetas: [],
    };
  }

  componentDidMount() {
    getRecruitMeta(this);
    getProject(this);
  }

  render() {
    document.body.style.overflow = "";
    return (
      <div className="root_container">
        <Projects 
          projects={this.state.data.get('projects')} />
        <Recruitmetas recruitmetas={this.state.recruitmetas}/>
      </div>
    );
  }
}

export default RecruitmetaContainer;
