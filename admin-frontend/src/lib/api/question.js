import axios from '../defaultAxios'

export const getQuestionList = () => axios.get('http://localhost:3001/api/question');
export const getQuestionDetail= (id) => axios.get(`localhost:3001/api/question/${id}`);