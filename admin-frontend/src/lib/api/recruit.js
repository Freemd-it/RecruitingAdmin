import axiosCreate from '../defaultAxios'
import queryString from 'query-string'

export const getRecruitList = ({ type='', q='', ...rest }, ctx) => {
  return axiosCreate().get(`/admin/applicant?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result, isDetailModal: false}))
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
  .then(res => alert('지원서 평가가 완료 되었습니다.'))
  .catch(err => err)
}

export const setMemo = (data, ctx) => {
  return axiosCreate().put(`/admin/applicant/${data.userId}/memo`, data)
  .then(res => console.log('저장완료', res))
  .catch(err => err);
}