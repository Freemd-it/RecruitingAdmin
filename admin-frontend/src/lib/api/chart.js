import axiosCreate from '../defaultAxios';

export const getChartData= (ctx) => 
  axiosCreate().get(`/admin/statistics`)
    .then(res => {
      console.log('chart api call', res.data.result);
      ctx.setState({ chartData: res.data.result});
    })
    .catch(err => err)

