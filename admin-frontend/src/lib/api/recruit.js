import axiosCreate from '../defaultAxios'
import queryString from 'query-string'
import { RSA_NO_PADDING } from 'constants';

export const getRecruitList = ({ type='', q='', ...rest }, ctx) => {
  return axiosCreate().get(`/admin/applicant?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result}))
    .catch(err => err)
}

export const getRecruitDetail = (id,ctx) => {
  return axiosCreate().get(`/admin/applicant/${id}`)
    .then(res => ctx.setState({
      selectedRow: res.data.result,
      isDetailModal: true,
    }))
    .catch(err => err)
}

export const setApplicantRank = (data, ctx) => {
  return axiosCreate().put(`/admin/applicant/${data.userId}/rank`, data)
  .then(res =>  this.setState({ isDetailModal: false, }))
  .catch(err => err)
}