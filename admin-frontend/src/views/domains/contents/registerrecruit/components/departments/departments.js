import React from 'react';
import Teams from '../teams/teams';
import "./departments.scss";
import { Button } from 'reactstrap';

const Departments = ({data, handleDeleteDepartmentClick, handleAddTeamClick, 
  handleDepartmentDescriptionChange, handleDepartmentNameChange, handleDeleteTeamClick, 
  handleChangeTeamName, handleTeamMedicalOptionClick}) => {
  const departments = data.get('departments').toJS();
  const medicalFields = data.get('medicalFeilds').toJS();
  return (
    <div>
      {departments.map((department, index) => {
        return (
        <Department 
          department={department} 
          medicalFields={medicalFields}
          handleDeleteDepartmentClick={handleDeleteDepartmentClick}
          handleAddTeamClick={handleAddTeamClick}
          handleDepartmentDescriptionChange={handleDepartmentDescriptionChange}
          handleDepartmentNameChange={handleDepartmentNameChange}
          handleDeleteTeamClick={handleDeleteTeamClick}
          handleChangeTeamName={handleChangeTeamName}
          handleTeamMedicalOptionClick={handleTeamMedicalOptionClick}
          index={index}
          key={index}/>);
      })}
    </div>
  );
};

const Department = ({department, medicalFields, handleDeleteDepartmentClick, handleAddTeamClick, 
                     handleDepartmentDescriptionChange, handleDepartmentNameChange, 
                    handleDeleteTeamClick, handleChangeTeamName, handleTeamMedicalOptionClick, index}) => {
  return (
    <div className="department_container">
      <div className="department_header">
        <div className="title_container">
          <label htmlFor="department_name">본부명</label>
          <input id="department_name" type="text" value={department.departmentName} defaultValue='본부 가제'
                 onChange={(e) => handleDepartmentNameChange(e, index)}/>
        </div>
        <div className="button_container">
          <Button color="danger" onClick={(e) => handleDeleteDepartmentClick(e, index)}>본부 삭제</Button>
        </div>
      </div>
      <div className="textarea_container">
        <textarea 
          name="" id="" cols="50" rows="5" 
          value={department.departmentDescription}
          onChange={(e) => handleDepartmentDescriptionChange(e, index)}></textarea>
      </div>

      <div className="department_header">
        <div className="title_container">
          <p>소속팀</p>
        </div>
        <div className="button_container">
          <Button color="primary" onClick={(e) => handleAddTeamClick(e, index)}>소속팀 추가</Button>
        </div>
      </div>
      <Teams 
          teams={department.teams} 
          medicalFields={medicalFields}
          departmentIndex={index} 
          handleDeleteTeamClick={handleDeleteTeamClick} 
          handleChangeTeamName={handleChangeTeamName}
          handleTeamMedicalOptionClick={handleTeamMedicalOptionClick}/>
    </div>
  );
};

export default Departments;
