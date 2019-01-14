import React from 'react';
import './MainTemplate.css';

const MainTemplate = ({ contents, sidebar }) => (
  <div className="MainTemplate">
    {sidebar}
    {contents}
  </div>
);

export default MainTemplate;
