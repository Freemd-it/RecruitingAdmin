import axiosCreate from '../defaultAxios'

export const getProject = (ctx) => 
  axiosCreate().get('/admin/project')
    .then(res => {
      ctx.setState({
        projects: res.data.result
      });
      console.log('api!!',res.data.result);
    })
    .catch(err => err)
