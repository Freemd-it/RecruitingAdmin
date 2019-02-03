import axiosCreate from '../defaultaxiosCreate()'
import queryString from 'query-string'


export const getQuestionList = ({type='', q='', ...rest}, ctx) => 
  axiosCreate().get(`/api/questions?${queryString.stringify({...rest, type, q})}`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const getQuestionDetail= (id, ctx) => 
  axiosCreate().get(`/api/questions/${id}`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const setQuestionInfomation = (data, ctx) =>
  axiosCreate().post('/api/questions', data)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

export const modifyQuestionInfomation = ({_id, ...rest}, ctx) => 
  axiosCreate().put(`/api/questions/${_id}`, rest)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)