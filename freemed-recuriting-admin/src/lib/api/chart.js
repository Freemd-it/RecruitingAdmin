import axios from '../defaultAxios'
import axiosTest from 'axios'

export const check = () => axios.get('/auth/check');

export const test = () => axios.get('https://jsonplaceholder.typicode.com/posts')
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
;

