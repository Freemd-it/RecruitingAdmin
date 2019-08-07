import axiosCreate from '../defaultAxios'

export const getSignin = (body) => 
  axiosCreate().post('/admin/signin', body)
    .then(res => res)
    .catch(err => err)


export const getInterviewColumn = (batch_id, localStorage) => 
  axiosCreate().get(`admin/recruitMeta/${batch_id}`)
    .then(res => res)
    .catch(err => err)


