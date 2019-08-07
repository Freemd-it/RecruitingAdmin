import React from 'react';
import { Button } from 'reactstrap';
import "./titleAndMoveButton.scss";
import { Link } from 'react-router-dom';

const TitleAndMoveButton = ({ title, moveTo, moveText }) => {
  return (
    <div className="title_add_button_container">
      <div className="title_container"><h3>{title}</h3></div>
      <div className="button_container">
         <Link to={moveTo}><Button color="primary">{moveText}</Button></Link>
      </div>
    </div>
  );
};

export default TitleAndMoveButton;
