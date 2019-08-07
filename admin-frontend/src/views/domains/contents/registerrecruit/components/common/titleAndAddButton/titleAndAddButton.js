import React from 'react';
import { Button } from 'reactstrap';
import "./titleAndAddButton.scss";

const TitleAndAddButton = ({ title, handleAdd }) => {
  return (
    <div className="title_add_button_container">
      <div className="title_container"><h3>{title}</h3></div>
      <div className="button_container">
        <Button color="primary" onClick={handleAdd}>{title} 추가</Button>
      </div>
    </div>
  );
};

export default TitleAndAddButton;
