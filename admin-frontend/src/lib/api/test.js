import axios from '../defaultAxios'

export const getTest = () => axios.get('/admin/test');
export const postTest = () => axios.post('/admin/test');
export const postTestUser = () => axios.post('/admin/test/user');