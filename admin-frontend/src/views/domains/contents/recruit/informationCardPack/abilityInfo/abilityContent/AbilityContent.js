import React from 'react';

const AbillityContent = ({elements, title, subTitle, contents}) => (
  <div>
    <div className="SubTitle">{elements.type} ({elements.title}) </div>
      <span className="SubTitle">{title}</span>
      {contents}
      {elements.content ? <div className="SubTitle">{subTitle}</div> : null}
    <div className="SubContent">{elements.content}</div>
  </div>
)

export default AbillityContent