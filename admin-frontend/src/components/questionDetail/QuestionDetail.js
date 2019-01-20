import React from 'react'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './QuestionDetail.scss';

const QuestionDetail = props => {
  const { 
    registData,
    onRegistData
  } = props;
  return (
    <div className={'QuestionDetail'}>
      <TextField
        label="본부"
        className={'QuestionDetail__mr QuestionDetail__input'}
        value={registData.department}
        variant="outlined"
        InputProps={{ readOnly: true }}
      />
      <TextField
        select
        label="팀"
        className={'QuestionDetail__input'}
        name={'team'}
        value={registData.team}
        onChange={onRegistData}
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
        className={'QuestionDetail__textBox'}
        placeholder="질문을 입력하여주세요."
        name={'question'}
        multiline
        variant="outlined"
        rows="10"
        onChange={onRegistData}
        value={registData.question}
      />
      <div>
        <FormControlLabel
          control={
            <Radio
              checked={!registData.useQuestion}
              onChange={onRegistData}
              value={false}
              name="useQuestion"
              aria-label="A"
            />
          }
          label="사용안함"
        />
        <FormControlLabel
          control={
            <Radio
              checked={registData.useQuestion}
              onChange={onRegistData}
              value={true}
              name="useQuestion"
              aria-label="A"
            />
          }
          label="사용"
        />
      </div>
    </div>
  );
}

export default QuestionDetail;