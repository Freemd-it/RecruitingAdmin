import React from 'react';
import { Button } from 'reactstrap';
import "./titleAndAddButton.scss";
import { Link } from 'react-router-dom';

const TitleAndAddButton = ({ title, handleAdd, moveTo }) => {
  return (
    <div className="title_add_button_container">
      <div className="title_container"><h3>{title}</h3></div>
      <div className="button_container">
        <Button color="primary" onClick={handleAdd}>추가</Button>
        <Link to={moveTo}><Button color="warning">돌아가기</Button></Link>
      </div>
    </div>
  );
};

export default TitleAndAddButton;
