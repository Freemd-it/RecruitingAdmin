import axios from '../defaultAxios'
import axiosTest from 'axios'

export const check = () => axios.get('/auth/check');
export const getChartData = () => axiosTest.get('/api/statistics');


