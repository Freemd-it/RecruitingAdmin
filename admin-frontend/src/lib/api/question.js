import axiosCreate from '../defaultAxios'
import queryString from 'query-string'
import organization from 'lib/service/organization'
import _ from 'lodash'
import moment from 'moment'

export const getQuestionList = (batch, ctx) => {
  axiosCreate()
    .get(`/admin/question2?batch=${batch}`)
    .then(({ data }) => {
      if (data && data.result) {
        const { result } = data;
        ctx.setState({
          batch,
          questions: result,
          modal: false,
        });
      }
    })
    .catch(e => console.error(e));
};

export const getQuestionDetail = (data, ctx) => {
  const { questionId, departmentId, teamId} = data;
  axiosCreate()
  .get(`/admin/question2/${questionId}?d=${departmentId}&t=${teamId}`)
  .then(({status, data}) => {
    const { result } = data;
    status === 200 && ctx.setState(prevState => {
      const { registedData } = prevState;
      registedData.questionId = result.questionId;
      registedData.department = result.departmentName;
      registedData.team = result.teamName;
      registedData.content = result.content;
      registedData.register = result.register;
      registedData.type = result.type;
      return { registedData, updateModal: true };
    });
  })
  .catch(e => {})
};

export const setQuestionInfomation = (data, ctx) => {
  return axiosCreate().post('/admin/question2', data)
    .then(res => res) 
    .catch(err => err)
};

export const updateQuestion = (data, ctx) => {
  const { questionId } = data;
  delete data.questionId;
  return axiosCreate().put(`/admin/question2/${questionId}`, data)
    .then(({ data, status }) => {
      const { 
        id, 
        content, 
        type, 
        registedData, 
        register,
        departmentName,
        teamName,
      } = data.result || {};
      status === 201 && ctx.setState((prevState) => {
        const { questions } = prevState;
        let index = null;
        questions.some((question, questionIndex) => {
          if ( question.questionId === id && question.departmentName === departmentName && question.teamName === teamName ) {
            index = questionIndex;
            return true;
          }
        });
        questions[index].content = content;
        questions[index].questionId = id;
        questions[index].register = register;
        questions[index].registedData = registedData;
        questions[index].type = type;
        return { questions, updateModal: false }
      }, () => {console.log(ctx.state.updateModal)});
    })
    .catch(err => err)
};