import axios from '../defaultAxios'

export const getTest = () => axios.get('/api/test');
export const postTest = () => axios.post('/api/test');
export const postTestUser = () => axios.post('/api/test/user');