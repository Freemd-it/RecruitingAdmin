import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';
import './QuestionModal.scss';
import _ from 'lodash'
import organization from 'lib/service/organization';

const QuestionModal = props => {
  const { 
    registedData,
    onRegistedData
  } = props;

  const userSession = JSON.parse(localStorage.getItem('user_session'))
  const teamList = (
    _.map(organization[userSession.department], (v, key) => {
        return <option> {v} </option>
      })
    )
  return (
    <div className={'container QuestionDetail'} key={registedData._id}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>본부</Label>
        <Col sm={10}>
          <Input bsSize="sm" type="select" name="department" value={registedData.department} onChange={onRegistedData} readOnly disabled>
            <option>{userSession.department}</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>팀</Label>
        <Col sm={10}>
          <Input type="select" name="selectMulti" id="exampleSelectMulti">
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