import React from 'react';
import { Button } from 'reactstrap'
import "./addListItem.scss";

const AddListItem = ({handleChange, handleAdd, handleDelete, index}) => {
  return (
    <div>
      <div className="editable_list_item_container">
        <div className="title_container">
          <input onChange={(e) => handleChange(e, index)} type="text" value="추가할 값을 입력해주세요"/>
        </div>
        <div className="button_container">
          <Button color="info" onClick={handleAdd}>추가</Button>
          <Button color="danger" onClick={(e) => handleDelete(e, index)}>취소</Button>
        </div>
      </div>
    </div>
  );
};

export default AddListItem;
