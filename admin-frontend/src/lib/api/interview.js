import axiosCreate from '../defaultAxios'
import queryString from 'query-string'


export const getInterviewList = ({type='', q='', ...rest}, ctx) => 
  axiosCreate().get(`/admin/schedule?${queryString.stringify({...rest, type, q})}`)
    .then(res => res.status === 200 && ctx.setState({ rows: res.data.result}))
    .catch(err => err)

