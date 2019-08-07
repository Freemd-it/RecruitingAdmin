import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';
import './QuestionModal.scss';
// import _ from 'lodash';

const QuestionModal = props => {
  const { registedData, onRegistedData, isAdd } = props;
  return (
    <div className={'container QuestionDetail'} key={registedData._id}>
      <FormGroup row>
        <Label sm={2}>본부</Label>
        <Col sm={10}>
          <Input 
            bsSize="sm" 
            type="select" 
            name="department" 
            value={registedData.department || registedData.departments[0].name} 
            onChange={onRegistedData}
            disabled={!isAdd}
          >
            {
              registedData.departments.map((item, index) => {
                return (
                  <option 
                    key={item.id || item.name} 
                    disabled={index === 0}
                  >
                    { item.name }
                  </option>
                );
              })
            }
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>팀</Label>
        <Col sm={10}>
          <Input 
            type="select" 
            name="team" 
            value={registedData.team || '팀 선택'} 
            onChange={onRegistedData}
            disabled={!isAdd}
          >
            {
              registedData.department ? 
              registedData.teams[registedData.department].map((item, index) => {
                return (
                  <option 
                    disabled={ index === 0 } 
                    key={item.id || item.name}
                  >
                    { item.name }
                  </option>
                );
              }) :
              <option disabled>팀 선택</option>
            }
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>질문</Label>
        <Col sm={10}>
          <Input 
            type="textarea" 
            name="content" 
            onChange={onRegistedData} 
            value={registedData.content} 
            rows={10}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>질문 유형</Label>
        <Col sm={10}>
          <Input 
            type="select" 
            name="type" 
            onChange={onRegistedData} 
            value={registedData.type || 100} 
          >
            <option value={100} disabled> 타입선택 </option>
            {
              registedData.types.map((item, index) => {
                let text = '';
                switch(item) {
                  case 101:
                    text = '텍스트';
                  break;
                  case 102:
                    text = '파일첨부';
                  break;
                  case 103:
                    text = '선택';
                  break;
                  default:
                    text = '';
                  break;
                }
                return (
                  <option 
                    key={`type__${item}`} 
                    value={item}
                    disabled={item === 103}
                  >
                    {text}
                  </option>
                );
              })
            }
          </Input>
        </Col>
      </FormGroup>

    </div>
  );
}

export default QuestionModal;