import React from 'react';
import './MainTemplate.scss';

const MainTemplate = ({ contents, sidebar }) => (
  <div className="MainTemplate">
    {sidebar}
    {contents}
  </div>
);

export default MainTemplate;
