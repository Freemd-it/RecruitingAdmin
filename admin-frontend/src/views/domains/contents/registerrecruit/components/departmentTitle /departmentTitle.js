import React from 'react';
import { Button } from 'reactstrap';
import "./departmentTitle.scss";

const departmentTitle = ({handleDepartmentAddClick}) => {
  return (
    <div className="department_title_container">
      <div className="title_container"><h3>본부, 팀 구조</h3></div>
      <div className="button_container">
        <Button color="primary" onClick={handleDepartmentAddClick}>본부 추가</Button>
      </div>
    </div>
  );
};

export default departmentTitle;
