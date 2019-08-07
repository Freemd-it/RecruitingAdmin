import axiosCreate from '../defaultAxios'
import { fromJS } from 'immutable';

export const getProject = (ctx) => 
  axiosCreate().get('/admin/project')
    .then(res => {
      const recruitmeta = fromJS(res.data.result);
      const modifiedData = ctx.state.data.set('projects', recruitmeta)
      ctx.setState({data: modifiedData});
    })
    .catch(err => err)

export const postProject = (ctx, data) => 
  axiosCreate().post('/admin/project', data)
    .then(res => {
      alert('프로젝트가 추가되었습니다.');
    })
    .catch(err => err)

export const deleteProject = (ctx, projectid) => {
  axiosCreate().delete('/admin/project', {data: {"projectid": projectid}})
  .then(res => {
    alert('프로젝트가 삭제되었습니다.');
  })
  .catch(err => err)
}

export const putProject = (ctx, project) => {
  console.log('put project', project);
  axiosCreate().put('/admin/project', {"project": project})
  .then(res => {
    alert('프로젝트 정보가 저장되었습니다.');
  })
  .catch(err => err)
}
  

