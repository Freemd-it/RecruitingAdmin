import axios from '../defaultAxios'
import queryString from 'query-string'


export const getQuestionList = ({type='', q='', ...rest}, ctx) => 
  axios.get(`/api/questions?${queryString.stringify({...rest, type, q})}`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const getQuestionDetail= (id, ctx) => 
  axios.get(`/api/questions/${id}`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const setQuestionInfomation = (data, ctx) =>
  axios.post('/api/questions', data)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const modifyQuestionInfomation = ({_id, ...rest}, ctx) => 
  axios.put(`/api/questions/${_id}`, rest)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)