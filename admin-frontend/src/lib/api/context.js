import axiosCreate from '../defaultAxios';
import queryString from 'query-string'

export const getHealthCheck= (token) => 
  axiosCreate().get(`/admin/health?${queryString.stringify(token)}`)
    .then(res => res)
    .catch(err => err)

