import axios from 'axios';

const {
  NODE_ENV,
} = process.env


const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3001';
  return 'http://recruit.freemedials.org';
})();

const axiosCreate = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  console.log(token)
  return axios.create({
    baseURL,
    headers: {
      jwt: token || false,
    },
  });

  if (process.env.APP_ENV === 'server') {
    axiosCreate.defaults.timeout = 3001;
  }
}

export default axiosCreate;
