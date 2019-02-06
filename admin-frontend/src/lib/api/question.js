import axiosCreate from '../defaultAxios'
import queryString from 'query-string'


export const getQuestionList = ({type='', q='', ...rest}, ctx) => 
  axiosCreate().get(`/admin/question?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result}))
    .catch(err => err)

export const getQuestionDetail= (id, ctx) => 
  axiosCreate().get(`/admin/question/${id}`)
    .then(res => {
      const { result } = res.data
      res.status === 200 && ctx.setState({
        registedData: {
          id: result._id,
          department: result.department,
          team: result.team,
          question: result.question,
          used: result.used,
          register: result.register,
        },
        isUpdateModal: true,
        // id,
      })
    })
    .catch(err => err)

export const setQuestionInfomation = (data, ctx) => {
  return axiosCreate().post('/admin/question', data)
    .then(res => res) 
    .catch(err => err)
}

export const modifyQuestionInfomation = ({_id, ...rest}, ctx) => 
  axiosCreate().put(`/admin/question/${_id}`, rest)
    .then(res => ctx.setState({ rows: res.data.result}))
    .catch(err => err)