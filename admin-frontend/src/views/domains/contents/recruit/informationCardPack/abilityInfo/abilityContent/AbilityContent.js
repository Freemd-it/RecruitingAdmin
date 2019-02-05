import React from 'react';

const AbillityContent = ({elements, title, subTitle, contents, ability}) => (
  <div>
    <div className="SubTitle">{elements.special_type} ({elements.content}) </div>
      <div className="SubTitle">{title}</div>
      {ability}
      {elements.content ? <div className="SubTitle">{subTitle}</div> : null}
    <div className="SubContent">{elements.content}</div>
  </div>
)

export default AbillityContent