import axiosCreate from '../defaultAxios';
import { fromJS } from 'immutable';

export const getRecruitMeta = (ctx) => 
  axiosCreate().get('/admin/recruitMeta')
    .then(res => ctx.setState({recruitmetas: res.data.result}))
    .catch(err => err)

export const getRecentRecruitMeta = (ctx) => 
  axiosCreate().get('/admin/recentRecruitMeta')
    .then(res => {
      const recruitmeta = fromJS(res.data.result);
      ctx.setState({data: recruitmeta});
    })
    .catch(err => err)

export const postRecruitMeta = (data, ctx) => 
  axiosCreate().post('/admin/recruitMeta', data)
    .then(res => {
      alert('리크루팅 정보가 등록되었습니다.');
      ctx.setState({redirect: true});
    })
    .catch(err => err)
