import axiosCreate from '../defaultAxios';

export const getChartData= (ctx) => 
  axiosCreate().get(`/admin/statistics`)
    .then(res => ctx.setState({ rows: res.data.result}))
    .catch(err => err)

