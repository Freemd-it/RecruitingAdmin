import axios from '../defaultAxios'

export const getQuestionList = () => axios.get('/api/questions');

export const getQuestionDetail= (id) => axios.get(`/api/questions/${id}`);

export const setQuestionInfomation = (data) => {
  axios.post('/api/questions', data)
    .then((res) => { return res.data})
    .catch(err => { return err.statusCode}
  )}

export const modifyQuestionInfomation = ({_id, ...rest}) => { 
  axios.put(`/api/questions/${_id}`, rest)
    .then((res) => { return res.data})
    .catch(err => { return err.statusCode}
  )
}