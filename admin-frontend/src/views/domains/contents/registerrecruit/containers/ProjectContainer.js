import React, { Component } from 'react';
import ProjectsEdit from '../components/projectsEdit/projectsEdit';
import './ProjectContainer.scss';
import { getProject, postProject, deleteProject, putProject } from 'lib/api/project';
import { Map, List } from 'immutable';
import { InitialProject } from '../data';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Map({
        projects: List([])
      })
    };
  }

  componentDidMount() {
    getProject(this);
  }

  handleProjectNameChange = (e, index) => {
    const { value } = e.target;
    const modifiedProjects = this.state.data.get('projects').setIn([index, 'projectName'], value);
    const modifiedState = this.state.data.set('projects', modifiedProjects)
    this.setState({
      data: modifiedState
    });
  }

  handleProjectDescChange = (e, index) => {
    const { value } = e.target;
    const modifiedProjects = this.state.data.get('projects').setIn([index, 'projectDesc'], value);
    const modifiedState = this.state.data.set('projects', modifiedProjects)
    this.setState({
      data: modifiedState
    });
  }

  handleProjectSave = (e, index) => {
    const project = this.state.data.getIn(['projects', index]).toJS();
    putProject(this, project);
    getProject(this);
  }

  handleProjectDelete = (e, index) => {
    const projectId = this.state.data.getIn(['projects', index]).toJS()._id;
    deleteProject(this, projectId);
    getProject(this);
  }

  handleProjectAdd = (e) => {
    postProject(this, InitialProject.toJS());
    getProject(this);
  }

  render() {
    document.body.style.overflow = "";
    return (
      <div className='root_container'>
        <ProjectsEdit 
          projects={this.state.data.get('projects')}
          handleProjectAdd={this.handleProjectAdd} 
          handleProjectNameChange={this.handleProjectNameChange}
          handleProjectDescChange={this.handleProjectDescChange}
          handleProjectSave={this.handleProjectSave}
          handleProjectDelete={this.handleProjectDelete}/>
      </div>
    );
  }
}

export default ProjectContainer;
