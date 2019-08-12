import axiosCreate from '../defaultAxios';
import { fromJS } from 'immutable';

export const getRecruitMeta = (ctx) => 
  axiosCreate().get('/admin/recruitMeta')
    .then(res => {
      const recruitMetas = fromJS(res.data.result);
      const modifiedData = ctx.state.data.set('recruitMetas', recruitMetas);
      ctx.setState({data: modifiedData});
    })
    .catch(err => err)

export const getRecruitMetaRecent = (ctx) => 
  axiosCreate().get('/admin/recruitMetaRecent')
    .then(res => {
      const recruitmeta = fromJS(res.data.result);
      ctx.setState({data: recruitmeta.update('batch', value => value + 1)});
    })
    .catch(err => err)

export const getRecruitMetaOrg = (ctx, batch) => 
axiosCreate().get('/admin/recruitMetaOrg/' + batch)
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

export const modifyRecruitMeta = (data, batch, ctx) => 
axiosCreate().put('/admin/recruitMeta/' + batch, data)
  .then(res => {
    alert('리크루팅 정보가 수정되었습니다.');
    ctx.setState({redirect: true});
  })
  .catch(err => err)  

export const deleteRecruitMeta = (ctx, recruitMetaId) => {
  axiosCreate().delete('/admin/recruitMeta', {data: {"recruitMetaId": recruitMetaId}})
  .then(res => {
    alert('리크루팅 모집 정보가 삭제되었습니다.');
    ctx.setState({redirect: true});
  })
  .catch(err => err)
}

