import axiosCreate from '../defaultAxios'
import queryString from 'query-string'

export const getRecruitList = ({ type='', q='', ...rest }, ctx) => {
  return axiosCreate().get(`/api/applicant?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result}))
    .catch(err => err)
}

export const getRecruitDetail = (id,ctx) => {
  return axiosCreate().get(`/api/applicant/${id}`)
    .then(res => ctx.setState({
      selectedRow: res.data.result,
      isDetailModal: true,
    }))
    .catch(err => err)
}