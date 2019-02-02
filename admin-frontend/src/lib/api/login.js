import axiosCreate from '../defaultAxios'

export const getSignin = (body) => 
  axiosCreate().post('/api/signin', body)
    .then(res => res)
    .catch(err => err)


