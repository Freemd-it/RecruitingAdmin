import axiosCreate from '../defaultAxios';

export const getChartData= (ctx) => 
  axiosCreate().get(`/admin/statistics`)
    .then(res => {
      console.log('chart api call', res.data.result);
      ctx.setState({ chartData: res.data.result});
    })
    .catch(err => err)

export const getApplierStat= (ctx) => 
axiosCreate().get(`/admin/statistics/applier/21`)
  .then(res => {
    ctx.setState({ applierStat: res.data.result});
  })
  .catch(err => err)
