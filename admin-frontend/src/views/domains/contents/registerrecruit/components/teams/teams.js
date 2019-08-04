import React from 'react';
import "./teams.scss";
import { Button } from "reactstrap";


const Teams = ({teams, medicalFields, departmentIndex, medicalOptions,
                handleDeleteTeamClick, handleChangeTeamName, handleTeamMedicalOptionClick}) => {
  return (
    <div>
      {teams.map((team, i) => {
        return <Team 
                team={team} key={i} 
                medicalFields={medicalFields}
                handleDeleteTeamClick={handleDeleteTeamClick} 
                handleChangeTeamName={handleChangeTeamName} 
                departmentIndex={departmentIndex} 
                handleTeamMedicalOptionClick={handleTeamMedicalOptionClick}
                medicalOptions={medicalOptions}
                teamIndex={i}/>
      })}
    </div>
  );
};


const Team = ({team, medicalFields, departmentIndex, teamIndex,
              handleDeleteTeamClick, handleChangeTeamName, handleTeamMedicalOptionClick}) => {
  return (
    <div className="team_container">
      <div className="title_button_container">
        <div className="title_container">
          <label htmlFor="team_name">팀 이름: </label>
          <input id="team_name" type="text" value={team.teamName} onChange={(e) => handleChangeTeamName(e, departmentIndex, teamIndex)}/>
        </div>
        <div className="button_container">
          <Button color="danger" size="sm" onClick={(e) => handleDeleteTeamClick(e, departmentIndex, teamIndex)}>팀 삭제</Button>
        </div>
      </div>

      <p>지원 가능 사업 추가하기</p>
      <div className="medical_options_container">
        {medicalFields.map((medicalField, index) => {
          return (
            <div>
              <Button color="primary" onClick={(e)=> handleTeamMedicalOptionClick(e, departmentIndex, teamIndex, medicalField)}>{medicalField}</Button>
            </div>
          );
        })}
      </div>

      <p>선택된 사업</p>
      <div className="medical_options_container">
        {team.medicalFieldOptions.map((medicalOption, i) => {
          return (<MedicalOption 
                  key={i} 
                  team={team}
                  departmentIndex={departmentIndex} 
                  teamIndex={teamIndex}
                  medicalOption={medicalOption} 
                  handleTeamMedicalOptionClick={handleTeamMedicalOptionClick}/>);
        })}
      </div>
    </div>
  );
};

const MedicalOptionAdd = (medicalField, departmentIndex, teamIndex, handleTeamMedicalOptionClick) => {
  return (
    <div>
    <Button color="primary" onClick={(e)=> handleTeamMedicalOptionClick(e, departmentIndex, teamIndex)}>{medicalField}</Button>
  </div>
  )
}

const MedicalOption = ({medicalOption}) => {
  return (
    <div>
      <p>{medicalOption}</p>
    </div>
  );
};

export default Teams;
