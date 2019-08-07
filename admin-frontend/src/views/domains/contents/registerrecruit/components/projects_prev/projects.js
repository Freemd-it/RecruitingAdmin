import React from 'react';
import { Button } from 'reactstrap';
import "./projects.scss";

const Projects = ({handleAddProjectClick, handleDeleteProjectClick, handleChangeProjectName, medicalFeilds}) => {
  return (
    <div>
      <div className="department_title_container">
        <div className="title_container"><h3>진행 중인 사업</h3></div>
        <div className="button_container">
          <Button color="primary" onClick={handleAddProjectClick}>사업 추가</Button>
        </div>
      </div>

      { medicalFeilds.map((medicalFeild, index) => {
      return (
        <Project 
          handleDeleteProjectClick={handleDeleteProjectClick}
          medicalFeild={medicalFeild}
          index={index}
          key={index}
        />
      );}
      )}
    </div>
  );
};

const Project = ({medicalFeild, handleChangeProjectName, handleDeleteProjectClick, index}) => {
  return (
    <div className="department_title_container">
      <div className="title_container">
        <input type="text" value={medicalFeild} onChange={(e) => handleChangeProjectName(e, index)}/>
      </div>
      <div className="button_container">
        <Button color="danger" size="sm" onClick={(e)=> handleDeleteProjectClick(e, index)}>사업 삭제</Button>
      </div>
    </div>
  );
};


export default Projects;
