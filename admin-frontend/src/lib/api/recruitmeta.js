import axiosCreate from '../defaultAxios'

export const getRecruitmeta = (ctx) => 
  axiosCreate().get('/admin/recruitMeta')
    .then(res => ctx.setState({recruitmetas: res.data.result}))
    .catch(err => err)
