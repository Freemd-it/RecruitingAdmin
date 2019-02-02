import axios from '../defaultAxios'

export const getSignin = (body) => 
  axios.post('/api/signin', { body })
    .then(res => res)
    .catch(err => err)


