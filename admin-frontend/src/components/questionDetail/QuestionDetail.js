import React from 'react'
// import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Col, FormGroup, Label, Input } from 'reactstrap';
import './QuestionDetail.scss';

const QuestionDetail = props => {
  const { 
    registData,
    onRegistData
  } = props;

  return (
    <div className={'container QuestionDetail'}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>본부</Label>
        <Col sm={10}>
          <Input bsSize="sm" type="select" name="department" value={registData.department} onChange={onRegistData} readOnly disabled>
            <option>{registData.department}</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleEmail" sm={2}>팀</Label>
        <Col sm={10}>
          <Input bsSize="sm" type="select" name="team" value={registData.team} onChange={onRegistData}>
            <option>{registData.team}</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>질문</Label>
        <Col sm={10}>
          <Input type="textarea" name="question" onChange={onRegistData} value={registData.question} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={2}>질문 사용 유무</Col>
        <Col sm={10}>
          <Label className="QuestionDetail__radio">
            <Input 
              type="radio" 
              name="useQuestion" 
              checked={!registData.useQuestion}
              onChange={onRegistData}
              value="false"
            />
            <span>사용 안함</span>
          </Label>
          <Label className="QuestionDetail__radio">
            <Input 
              type="radio" 
              name="useQuestion" 
              checked={registData.useQuestion}
              onChange={onRegistData}
              value="true"
            />
            <span>사용</span>
          </Label>
        </Col>
      </FormGroup>
    </div>
  );
}

export default QuestionDetail;