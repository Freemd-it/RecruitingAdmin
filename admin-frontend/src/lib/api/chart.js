import axios from '../defaultAxios'

export const getChartData= (ctx) => 
  axios.get(`/api/statistics`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

