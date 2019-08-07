import React from 'react';
import { Button } from 'reactstrap';
import './editableListItem.scss';

const EditableListItem = ({itemTitle, handleEdit, handleDelete}) => {
  return (
    <div>
      <div className="editable_list_item_container">
        <div className="title_container"><h5>{itemTitle}</h5></div>
        <div className="button_container">
          <Button color="info" onClick={handleEdit}>수정</Button>
          <Button color="danger" onClick={handleDelete}>삭제</Button>
        </div>
      </div>
    </div>
  );
};

export default EditableListItem;
