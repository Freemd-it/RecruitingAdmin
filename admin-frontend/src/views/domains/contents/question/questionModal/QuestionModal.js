import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';
import './QuestionModal.scss';
import _ from 'lodash'
import organization from 'lib/service/organization';

const QuestionModal = props => {
  const { department, team } = JSON.parse(localStorage.getItem('user_session'))
  const { registedData, onRegistedData } = props;
  const teamList = (
    _.map(organization[department], (v, key) => {
        return <option> {v} </option>
      })
    )
    
  return (
    <div className={'container QuestionDetail'} key={registedData._id}>
      <FormGroup row>
        <Label sm={2}>본부</Label>
        <Col sm={10}>
          <Input bsSize="sm" type="select" name="department" value={registedData.department} onChange={onRegistedData} readOnly disabled>
            <option> 본부 선택 </option>
            <option>{department}</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>팀</Label>
        <Col sm={10}>
          <Input type="select" name="team" id="exampleSelectMulti" value={registedData.team} onChange={onRegistedData}>
            <option> 팀 선택 </option>
            {teamList}
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>질문</Label>
        <Col sm={10}>
          <Input type="textarea" name="question" onChange={onRegistedData} value={registedData.question} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={2}>질문 사용 유무</Col>
        <Col sm={10}>
          <Label className="QuestionDetail__radio">
            <Input 
              type="radio" 
              name="used" 
              checked={!registedData.used}
              onChange={onRegistedData}
              value="false"
            />
            <span>사용 안함</span>
          </Label>
          <Label className="QuestionDetail__radio">
            <Input 
              type="radio" 
              name="used" 
              checked={registedData.used}
              onChange={onRegistedData}
              value="true"
            />
            <span>사용</span>
          </Label>
        </Col>
      </FormGroup>
    </div>
  );
}

export default QuestionModal;