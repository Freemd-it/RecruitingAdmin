import axiosCreate from '../defaultAxios';
import { Map, List } from 'immutable';


export const getRecruitmeta = (ctx) => 
  axiosCreate().get('/admin/recruitMeta')
    .then(res => ctx.setState({recruitmetas: res.data.result}))
    .catch(err => err)

export const getProject = (ctx) => 
  axiosCreate().get('/admin/project')
    .then(res => ctx.setState({
      projects: res.data.result
    }))
    .catch(err => err)
