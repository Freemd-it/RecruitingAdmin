import axios from '../defaultAxios'
import axiosTest from 'axios'


export const getChartData= (ctx) => 
  axios.get(`/api/statistics`)
    .then(res => ctx.setState({ rows: res.data.data}))
    .catch(err => err)

