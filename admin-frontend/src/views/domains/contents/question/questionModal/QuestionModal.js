import React from 'react'
import { Col, FormGroup, Label, Input } from 'reactstrap';
import './QuestionModal.scss';
import _ from 'lodash'
import organization from 'lib/service/organization';

function maketeamList(registedData, department) {
  return (_.map(organization[registedData.department], (v, key) => {
    const temp2 = []
    if(key === 'team') {
      _.forEach(v, (_v, _k) => {
        _.forEach(_v, (__v, __k) => {
          temp2.push((<option value={__k}> {__v} </option>))
        })
      })
    }
    return temp2
  }))
}
const QuestionModal = props => {
  const { department } = JSON.parse(localStorage.getItem('user_session'))
  const { registedData, onRegistedData } = props;
  const teamList = maketeamList(registedData, department)
  return (
    <div className={'container QuestionDetail'} key={registedData._id}>
      <FormGroup row>
        <Label sm={2}>본부</Label>
        <Col sm={10}>
          <Input bsSize="sm" type="select" name="department" value={registedData.department} onChange={onRegistedData}>
            <option disabled> 본부 선택 </option>
            <option>{ registedData.department_name}</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>팀</Label>
        <Col sm={10}>
          <Input type="select" name="team" id="exampleSelectMulti" value={registedData.team} onChange={onRegistedData}>
            <option disabled> 팀 선택 </option>
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
        <Label sm={2}>질문</Label>
        <Col sm={10}>
          <Input type="select" name="type" onChange={onRegistedData} value={registedData.type} >
            <option selected="true" value="type" disabled> 타입선택 </option>
            <option value="text"> 텍스트 </option>
            <option value="file"> 파일첨부 </option>
            <option value="select"> 선택항목</option>
          </Input>
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