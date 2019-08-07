import React from 'react';
import { TitleAndAddButton } from '../common';
import "./projectsEdit.scss";
import { Button } from 'reactstrap';

const ProjectsEdit = ({projects, handleProjectDelete, handleProjectAdd, handleProjectNameChange, handleProjectDescChange, handleProjectSave}) => {
  return (
    <div>
      <TitleAndAddButton title="프로젝트 수정, 삭제, 추가" handleAdd={handleProjectAdd} moveTo="/recruitmeta" />
      <div className='project_container'>
        {
          projects.map((project, index) => {
            return (
            <ProjectEditItem
              handleProjectDelete={handleProjectDelete}
              handleProjectNameChange={handleProjectNameChange}
              handleProjectDescChange={handleProjectDescChange}
              handleProjectSave={handleProjectSave}
              project={project}
              key={index}
              index={index}
            />)
          })
        }
      </div>
    </div>
  );
}

const ProjectEditItem = ({project, handleProjectDelete, handleProjectNameChange, handleProjectDescChange, handleProjectSave, index}) => {
  return (
    <div className="project_item_container">
      <div className="title_button_container">
        <div className="title_container">
          <label htmlFor="projectName">사업명: </label>
          <input id="projectName" type="text" value={project.get('projectName')} 
          onChange={(e) => handleProjectNameChange(e, index)}/>
        </div>
        <div classNam="button_container">
          <Button color="danger" onClick={(e) => handleProjectDelete(e, index)}>삭제</Button>
          <Button color="info" onClick={(e) => handleProjectSave(e, index)}>저장</Button>
        </div>
      </div>

      <div>
        <label htmlFor="projectName">사업설명: </label>
        <textarea name="" id="" cols="50" rows="2" value={project.get('projectDesc')} onChange={(e) => handleProjectDescChange(e, index)}></textarea>
      </div>
    </div>
  );
};


export default ProjectsEdit;
