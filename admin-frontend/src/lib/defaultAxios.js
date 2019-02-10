import axios from 'axios';

const {
  NODE_ENV,
} = process.env


const baseURL = (() => {
  if (NODE_ENV === 'development') return 'http://localhost:3001';
  return 'http://13.209.65.66:3001';
})();

const axiosCreate = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return axios.create({
    baseURL,
    headers: {
      jwt: token || false,
    },
  });
}

export default axiosCreate;
