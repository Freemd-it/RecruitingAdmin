import axiosCreate from '../defaultAxios'

export const getSignin = (body) => 
  axiosCreate().post('/admin/signin', body)
    .then(res => res)
    .catch(err => err)


