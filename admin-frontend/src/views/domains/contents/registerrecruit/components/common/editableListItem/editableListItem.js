import React from 'react';
import { Button } from 'reactstrap';

const editableListItem = ({itemTitle, handleEdit}) => {
  return (
    <div>
      <div className="editable_list_item_container">
      <div className="item_title_container"><h5>{itemTitle}</h5></div>
      <div className="button_container">
        <Button color="primary" onClick={handleEdit}>수정</Button>
      </div>
    </div>
    </div>
  );
};

export default editableListItem;
