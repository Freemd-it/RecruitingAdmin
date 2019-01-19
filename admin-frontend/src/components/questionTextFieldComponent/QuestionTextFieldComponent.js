import React from 'react'
import TextField from '@material-ui/core/TextField';
import './QuestionTextFieldComponent.scss';

const QuestionTextFieldComponent = props => {
  const { 
    value = {},
    onChangeTeam = () => {},
    onChangeQuestion = () => {}, 
  } = props;
  return (
    <div>
      <TextField
        label="본부"
        className={'QuestionTextFieldComponent__mr QuestionTextFieldComponent__input'}
        value={value.department}
        variant="outlined"
        InputProps={{ readOnly: true }}
      />
      <TextField
        select
        label="팀"
        className={'QuestionTextFieldComponent__input'}
        value={value.team}
        onChange={onChangeTeam}
        SelectProps={{ native: true }}
        variant="outlined"
      >
        <option value={'1팀'}>1팀</option>
        <option value={'2팀'}>2팀</option>
        <option value={'3팀'}>3팀</option>
        <option value={'4팀'}>4팀</option>
      </TextField>
      <TextField
        label="질문"
        className={'QuestionTextFieldComponent__textBox'}
        placeholder="질문을 입력하여주세요."
        multiline
        variant="outlined"
        rows="4"
        onChange={onChangeQuestion}
      />
    </div>
  );
}

export default QuestionTextFieldComponent;