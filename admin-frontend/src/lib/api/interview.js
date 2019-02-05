import axiosCreate from '../defaultAxios'
import queryString from 'query-string'


export const getInterviewList = ({type='', q='', ...rest}, ctx) => 
  axiosCreate().get(`/api/schedule?${queryString.stringify({...rest, type, q})}`)
    .then(res => ctx.setState({ rows: res.data.result}))
    .catch(err => err)

