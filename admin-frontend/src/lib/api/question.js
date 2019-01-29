import axios from '../defaultAxios'

export const getQuestionList = () => axios.get('/api/question');
export const getQuestionDetail= (id) => axios.get(`/api/question/${id}`);