import { getProject } from 'lib/api/project';
import { getRecruitMeta } from 'lib/api/recruitmeta';
import React, { Component } from 'react';
import Projects from '../components/projects/projects';
import Recruitmetas from '../components/recruitmetas/recruitmetas';
import './RecruitmetaContainer.scss';

class RecruitmetaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recruitmetas: [],
      projects: [],
    };
  }

  componentDidMount() {
    getRecruitMeta(this);
    getProject(this);
  }

  handleAddProject = () => {
    console.log('프로젝트 수정 페이지 이동');
  }

  handleAddRecruitmeta = () => {
    console.log('리크루트 메타 추가 페이지 이동');
  }

  handleEditRecruitmeta = () => {
    console.log('리크루트 메타 수정 페이지 이동');
  }

  handleAddProject = () => {
    const newProject = {
      projectName: "프로젝트 명",
      projectDesc: "프로젝트 설명",
      projectStatus: "ADD"
    }

    this.setState({
      projects: this.state.projects.concat(newProject)
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="root_container">
        <Projects 
          projects={this.state.projects} />
        <Recruitmetas recruitmetas={this.state.recruitmetas}/>
      </div>
    );
  }
}

export default RecruitmetaContainer;
