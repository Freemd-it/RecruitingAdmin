import axios from 'axios';

const {
  NODE_ENV,
} = process.env

axios.defaults.withCredentials = true;

const baseURL = (() => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:3001';
  if (process.env.APP_ENV === 'server' && process.env.LOCAL === 'true') {
    return 'http://localhost:3001/';
  }
  return 'http://recruit.freemedials.org';
})();

const defaulAxios = axios.create({
  baseURL,
  withCredentials: NODE_ENV !== 'development',
  headers: {
    // 'token': access_token || false,
  },
});

if (process.env.APP_ENV === 'server') {
  defaulAxios.defaults.timeout = 3001;
}

export default defaulAxios;
