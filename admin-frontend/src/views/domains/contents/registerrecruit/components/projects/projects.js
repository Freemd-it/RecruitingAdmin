import React from 'react';
import { TitleAndMoveButton } from '../common';
import "./projects.scss";

const Projects = ({projects}) => {
  console.log('프로젝트 목록', projects);
  return (
    <div>
      <h2>사업 및 리크루팅 등록</h2>
      <div className="project_container">
        <TitleAndMoveButton title="사업 목록" moveText="추가 / 삭제" moveTo="/recruitmeta/project"/>
        { projects.map((project, index) => {
        return (
          <Project 
            project={project}
            index={index}
            key={index}
          />);
        })
        }
      </div>
    </div>
  );
}


const Project = ({project}) => {
  return (
    <div className='projectTitle'> {project.get('projectName')} </div>
  )
};

export default Projects;
