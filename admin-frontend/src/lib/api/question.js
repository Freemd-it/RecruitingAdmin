import axiosCreate from '../defaultAxios'
import queryString from 'query-string'
import organization from 'lib/service/organization'
import _ from 'lodash'
import moment from 'moment'

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
          department_name: organization[result.department].name,
          department: result.department,
          team: result.team,
          question: result.question,
          used: result.used,
          register: result.register,
          type: result.type,
        },
        isUpdateModal: true,
      })
    })
    .catch(err => err)

export const setQuestionInfomation = (data, ctx) => {
  return axiosCreate().post('/admin/question', data)
    .then(res => res) 
    .catch(err => err)
}

export const modifyQuestionInfomation = (registedData, ctx) => 
  axiosCreate().put(`/admin/question/${registedData.id}`, registedData)
    .then(res => {
      if(res.status === 201) {
        ctx.setState((prevState) => {
          const { rows } = ctx.state
          _.forEach(rows, (v, k) => {
            if(v._id === registedData.id) {
              rows[k] = {
                ...registedData,
                _id: v._id,
                batch: 20,
                registedDate: moment().format('YYYY-MM-DD HH:mm:ss')
              }
            }
          })
          return {
            rows,
            isUpdateModal: false,
          }
        })
      }
    })
    .catch(err => err)