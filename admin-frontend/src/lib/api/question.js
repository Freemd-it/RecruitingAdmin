import axiosCreate from '../defaultAxios'
import queryString from 'query-string'


export const getQuestionList = ({type='', q='', ...rest}, ctx) => 
  axiosCreate().get(`/api/question?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result}))
    .catch(err => err)

export const getQuestionDetail= (id, ctx) => 
  axiosCreate().get(`/api/question/${id}`)
    .then(res => ctx.setState({ rows: res.data.result}))
    .catch(err => err)

export const setQuestionInfomation = (data, ctx) => {
  return axiosCreate().post('/api/question', data)
    .then(res => res) 
    .catch(err => err)
}

export const modifyQuestionInfomation = ({_id, ...rest}, ctx) => 
  axiosCreate().put(`/api/question/${_id}`, rest)
    .then(res => ctx.setState({ rows: res.data.result}))
    .catch(err => err)